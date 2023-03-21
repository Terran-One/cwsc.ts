import { CharStreams, CommonTokenStream } from "antlr4ts";
import { CWScriptLexer } from "./antlr/CWScriptLexer";
import { CWScriptParser } from "./antlr/CWScriptParser";
import { ASTMap, visit } from "./Visitor";

export class Parser {
  constructor(public readonly lexer: CWScriptLexer, public readonly parser: CWScriptParser) {
  }

  process(): ASTMap['program'] {
    return visit.program(this.parser.program());
  }

  static fromString(source: string) {
    const lexer = new CWScriptLexer(CharStreams.fromString(source));
    const parser = new CWScriptParser(new CommonTokenStream(lexer));
    return new Parser(lexer, parser);
  }

  static parse(source: string) {
    return Parser.fromString(source).process()
  }
}
