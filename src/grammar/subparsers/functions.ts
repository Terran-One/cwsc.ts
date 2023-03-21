import { ParserAPI } from "@terran-one/ldtk/dist/langkit/parser";

export default function functions($: ParserAPI) {
  const { T, r } = $;
  const { cmdsep, expr, fnSigArgs, fnSigRet, nsIdent } = r;
  const { COMMA, NL, LBRACE, RBRACE, LPAREN, RPAREN } = T;
  const nls = NL.star;
  
  return {
    // invalid: EXEC & QUERY
    globalFnDef: $($.alias('kind', T.EXEC, T.QUERY, T.FN), $.alias('name', nsIdent), fnSigArgs, fnSigRet, r.block).inbetween(nls),
    methodDef: $.options({
      // invalid: fnKind, fnName:IdentFnName
      InstantiateMethodDef: $(r.fnKind.optional, r.fnName, $(nls, nsIdent).optional, nls, r.fnSigArgs, $(nls, r.fnSigRet).optional, nls, r.block),
      SingleMethodDef: $(r.fnKind, nls, r.blockFnDef),
      BlockMethodDef: $(
        // invalid: fnKind:FN
        r.fnKind, LBRACE,
        $.list(r.blockFnDef, cmdsep).optional,
        RBRACE,
      ).inbetween(nls),
    }),
    
    blockFnDef: $(r.fnName, fnSigArgs, $(nls, fnSigRet).optional, r.block).inbetween(nls),
    
    // different kinds are only valid in certain contexts
    fnKind: $.or(T.EXEC, T.QUERY, T.FN),
    
    // INSTANTIATE is a special case of a function name
    fnName: $.options({
      IdentFnName: nsIdent,
      InstantiateFnName: T.INSTANTIATE,
    }),
    fnSigArgs: $(LPAREN, $.list(r.fnArg, COMMA).optional, COMMA.optional, RPAREN).inbetween(nls),
    fnSigRet: $(nls, T.SLIM_ARROW, nls, r.typeDecl),
    fnArg: $(nsIdent, $(nls, T.COLON, nls, r.typeDecl).optional, $(nls, T.EQ1, nls, expr).optional),
  }
}
