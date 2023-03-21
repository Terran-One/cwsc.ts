import { AST as ASTBase } from '@terran-one/ldtk';
import type { ASTMap } from './transform';

export type ASTNode = ASTMap[keyof ASTMap];

export class AST extends ASTBase<ASTMap> {
  constructor(public readonly source: string, root: ASTNode) {
    super(root);
  }
}
