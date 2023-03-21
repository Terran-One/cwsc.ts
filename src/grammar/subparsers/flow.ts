import { ParserAPI } from "@terran-one/ldtk/dist/langkit/parser";

export default function flow($: ParserAPI) {
  const { T, r } = $;
  const { cmdsep, expr, exprx } = r;
  const { NL } = T;
  const nls = NL.star;
  
  return {
    block: $(nls, T.LBRACE, cmdsep.star, $.list(exprx, cmdsep).optional, T.RBRACE),
    
    // for i in vec {}, for (i, j) in map, for i in range(1, 10) {}
    forLoop: $(T.FOR, r.varDecl, T.IN, expr, nls, r.scope).inbetween(nls),
    // while true {}
    whileLoop: $(T.WHILE, expr, r.scope).inbetween(nls),

    // if true a = 12
    // if true { a = 12; b = 12 }
    ifStmt: $(
      T.IF, $.alias('condition[]', expr), $.alias('ifBranch', r.scope),
      $(T.ELSE, T.IF, $.alias('condition[]', expr), $.alias('elseifBranch[]', r.scope)).inbetween(nls).star,
      $(T.ELSE, $.alias('elseBranch', r.scope)).inbetween(nls).optional,
    ).inbetween(nls),
  }
}
