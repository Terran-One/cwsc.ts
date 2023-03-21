import { AST as ASTBase } from '@terran-one/ldtk';
import { Parser } from '../generated/Parser';
import { ASTMap as ASTMapBase } from '../generated/Visitor';
import transform from './transform';
import { AST } from './types';

export function parse(source: string): AST {
  const parser = Parser.fromString(source);
  const baseAST = new ASTBase<ASTMapBase>(parser.process());
  const transformedAST = transform(baseAST);
  // wrap in custom augmented AST
  return new AST(source, transformedAST.root as any);
}
