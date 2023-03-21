import { ParserAPI } from "@terran-one/ldtk/dist/langkit/parser";

export default function literals($: ParserAPI) {
  const { T, r } = $;
  const { rval } = r;
  const { COMMA, Ident, NL, LBRACK, RBRACK, LBRACE, RBRACE, LPAREN, RPAREN } = T;
  const nls = NL.star;
  
  return {
    literal: $.options({
      StringLiteral: T.String,
      NumberLiteral: T.Number,
      BooleanLiteral: $.or(T.TRUE, T.FALSE),
      ArrayLiteral: r.array,
      MapLiteral: r.map,
      TupleLiteral: r.tuple,
    }),

    array: $(LBRACK, $.list(rval, COMMA).optional, RBRACK).inbetween(nls),
    map: $(LBRACE, $.list(r.mapField, COMMA).optional, RBRACE).inbetween(nls),
    mapField: $(Ident, $(nls, T.COLON, nls, rval).optional),
    tuple: $(
      LPAREN,
      $.or(
        $(rval, COMMA).inbetween(nls), // 1-element tuple
        $(rval, $(COMMA, nls, rval, nls).plus, COMMA.optional).inbetween(nls), // 2+ element tuple
      ).optional, // empty tuple
      RPAREN,
    ).inbetween(nls),
  }
}
