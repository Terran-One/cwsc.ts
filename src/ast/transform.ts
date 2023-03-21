import { AST } from '@terran-one/ldtk';
import { ASTMap as ASTMapBase } from '../generated/Visitor';

export type ASTMap = ASTMapFromAST<ReturnType<typeof transform>>;
type ASTMapFromAST<T> = T extends AST<infer U> ? U : {};

/** Transform the given Gen 1 AST, i.e. AST produced directly by LDTK */
export default function transform(ast: AST<ASTMapBase>) {
  return transformGen1(ast);
}

/** Transformation for Gen 1 AST, i.e. AST produced directly by LDTK */
export function transformGen1(ast: AST<ASTMapBase>) {
  return ast
  .transform({
    program(node) {
      const { rules } = node;
      return {
        ...node,
        rules: {
          imports: rules.importDef,
          roots: rules.root,
        },
        children: [...rules.importDef, ...rules.root],
      }
    },
    block(node) {
      return {
        ...node,
        rules: { foo: node.rules.exprx },
        children: node.rules.exprx,
      }
    },
  });
}
