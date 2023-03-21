import { ParserAPI } from "@terran-one/ldtk/dist/langkit/parser";

// This is the messaging subparser. It is imported into the main parser.ts file.
// It is concerned with `send` and `query` statements and their syntactic sugar forms.
// Though currently, it only supports their generic forms.
export default function messaging($: ParserAPI) {
  const { T, r } = $;
  const { COMMA, NL } = T;
  const { nsIdent } = r;
  const nls = NL.star;
  
  return {
    sendStmt: $(T.SEND, nsIdent, r.map).inbetween(nls),
    queryStmt: $(T.QUERY, nsIdent, r.map).inbetween(nls),
    
    logStmt: $.options({
      AttributesLogStmt: $(T.LOG, nls, r.map),
      EventLogStmt: $(T.LOG, nls, r.createEventOrError),
    }),
    
    failStmt: $.options({
      EmptyFailStmt: T.FAIL,
      ErrorFailStmt: $(T.FAIL, nls, r.createEventOrError),
      MessageFailStmt: $(T.FAIL, nls, r.rval),
    }),
    
    createEventOrError: $(nsIdent, T.LPAREN, $.list(r.rval, COMMA).optional.wrap(nls), T.RPAREN),
  }
}
