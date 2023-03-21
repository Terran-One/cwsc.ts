import { CWScriptCodegen } from '../../codegen/codegen';
import { Command } from 'commander';
import { readFileSync, writeFileSync } from "fs";
import { Parser } from '../../parser'

export const command = new Command('compile');
export default command;

command.argument('<filename>', 'The filename to compile');
command.alias('c');
command.description('Compile <filename> to <STDOUT>');
command.action(filename => {
    console.info(`Compiling ${filename}...`)
    const parser = Parser.fromString(readFileSync(filename).toString());

    console.info('Building AST...');
    const ast = parser.buildAST();
    if (parser.syntaxError) {
        showError(parser.syntaxError);
        return;
    }

    console.info('Generating Rust code...');
    const codeGen = new CWScriptCodegen({ file: filename, ast: ast! });
    const rust = codeGen.generateContract();
    if (codeGen.syntaxError) {
        showError(codeGen.syntaxError);
        return;
    }

    console.info('Compilation SUCCESS\n');
    writeFileSync("/dev/stdout", rust!.toRustString());
});

function showError(error: string) {
    console.error(`Errors found during compilation\n\n${error}\n\nCompilation FAILED\n`);
}
