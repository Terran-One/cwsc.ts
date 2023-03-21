import { ParserAPI } from "@terran-one/ldtk/dist/langkit/parser";

export default function typing($: ParserAPI) {
  const { T, r } = $;
  const { cmdsep } = r;
  const { COMMA, Ident, NL, LBRACE, RBRACE, LPAREN, RPAREN } = T;
  const nls = NL.star;
  
  return {
    contractDef: $(
      T.CONTRACT, $.alias('contractName', Ident),
      $(T.EXTENDS, nls, $.alias('baseContract', Ident)).optional,
      $(T.IMPLEMENTS, nls, $.many($.alias('baseInterface[]', Ident), COMMA, { multiline: true })).optional,
      LBRACE,
      $.list(r.contractBody, cmdsep).optional,
      RBRACE,
    ).inbetween(nls),
    contractBody: $.options({
      EventContractBody: r.eventDef,
      ErrorContractBody: r.errorDef,
      StructureContractBody: r.structureDef,
      StateContractBody: r.stateDef,
      MethodContractBody: r.methodDef,
    }),

    interfaceDef: $(
      T.INTERFACE, $.alias('interfaceName', Ident),
      $(T.EXTENDS, nls, $.many($.alias('baseInterface[]', Ident), COMMA, { multiline: true })).optional,
      $.list(r.interfaceBody, cmdsep).optional,
    ).inbetween(nls),
    interfaceBody: $.options({
      EventInterfaceBody: r.eventDef,
      ErrorInterfaceBody: r.errorDef,
      StructureInterfaceBody: r.structureDef,
      MethodInterfaceBody: r.methodDef,
    }),

    structureDef: $(
      T.STRUCT, Ident, LBRACE,
      $.list(r.typedIdent, COMMA).optional.wrap(nls),
      RBRACE,
    ),

    eventDef: $(T.EVENT, Ident, r.namedTupleType),
    errorDef: $(T.ERROR, Ident, r.namedTupleType),

    stateDef: $(T.STATE, $.or(
      $(LBRACE,
        $.or(
          $.list(r.typedIdent, T.COMMA),
          $.list(r.typedIdent, T.SCOLON),
          $.list(r.typedIdent, T.NL),
        ).optional,
        RBRACE,
      ).inbetween(nls),
      r.typedIdent,
    )),
    
    typeDecl: $.options({
      IdentTypeDecl: Ident,
      TupleTypeDecl: $(LPAREN, $.or(
        $.list(Ident, COMMA),
        $(Ident, COMMA),
      ).optional, RPAREN).inbetween(nls),
      NamedTupleTypeDecl: r.namedTupleType,
      // TODO
    }),
    typedIdent: $(Ident, T.COLON, r.typeDecl),
    
    namedTupleType: $(LPAREN, $.list(r.typedIdent, COMMA), RPAREN).inbetween(nls),
  }
}
