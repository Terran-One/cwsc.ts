import { Parser } from '@terran-one/ldtk';
import lexer from './lexer';
import { flow, literals, messaging, typing } from './subparsers';
import functions from './subparsers/functions';

const parser = Parser.create('CWScriptParser', lexer, $ => {
  const {EOF, r, T} = $;
  const {cmdsep, expr, rval} = r;
  const {COMMA, LPAREN, RPAREN, LBRACE, RBRACE, LBRACK, RBRACK, NL, Ident} = T;
  const nls = NL.star;

  return {
    /***********************************************************************************************
     * PROGRAM
     **********************************************************************************************/
    program: $(
      T.SHEBANG.optional,
      cmdsep.star,
      $.list(r.importDef, cmdsep).optional,
      $.list(r.root, cmdsep).optional,
      EOF,
    ),
    cmdsep: $.or(NL, T.SCOLON).plus,

    /***********************************************************************************************
     * IMPORTS
     **********************************************************************************************/
    // Import from local contract: import from './contract'
    // Import from Github: import 'github.com/contract'
    // Import selective: import { CW20 } from 'github.com/cws-plus/cw20'
    // Import from branch: import from 'github.com/cws-plus/cw20#branch'
    importDef: $(
      T.IMPORT,
      $.or(
        $(T.STAR.optional, T.AS, Ident),
        $(T.LBRACE, r.namedImports, T.RBRACE).inbetween(nls),
        r.namedImports,
      ).optional,
      T.FROM,
      T.String,
    ),
    namedImport: $(Ident, $(T.AS, Ident).optional),
    namedImports: $(r.namedImport, $(T.COMMA, nls, r.namedImport, nls).star, T.COMMA.optional).inbetween(nls),

    /***********************************************************************************************
     * ROOT
     **********************************************************************************************/
    root: $.options({
      FunctionDefRoot: r.globalFnDef,
      StructureDefRoot: r.structureDef,
      ContractDefRoot: r.contractDef,
      InterfaceDefRoot: r.interfaceDef,
    }),

    /***********************************************************************************************
     * EXPRESSIONS
      *********************************************************************************************/
    // expressions which can appear virtually anywhere
    expr: $.options({
      GroupExpr: $(LPAREN, expr, RPAREN).inbetween(nls),
      BinaryOpExpr: $.option($(expr, r.binaryOp, expr).inbetween(nls)).assoc('right'),
      AssignExpr: $.option($(Ident, $(T.EQ1, T.ASSIGNOP), expr).inbetween(nls)).assoc('right'),
      CallParenExpr: $(expr, LPAREN, $.list(rval, COMMA).wrap(nls), RPAREN),
      UnaryPreOpExpr: $(r.unaryPreOp, expr),
      UnaryPostOpExpr: $(expr, r.unaryPostOp),
      SubscriptExpr: $(expr, LBRACK, nls, expr, nls, RBRACK),
      PropExpr: $(expr, $(nls, T.DOT1, nls, Ident).plus),
      StateWriteExpr: $(r.stateIdent, $.or(T.EQ1, T.ASSIGNOP), rval),
      StateReadExpr: r.stateIdent,
      LiteralExpr: r.literal,
      IdentExpr: r.nsIdent,
    }),
    // expressions which can appear in a function scope
    exprx: $.options({
      ExprExprx: r.expr,
      LetExprx: r.let,
      IfExprx: r.ifStmt,
      BlockExprx: r.block,
      ForLoopExpr: r.forLoop,
      WhileLoopExpr: r.whileLoop,
      SendExprx: r.sendStmt,
      LogExprx: r.logStmt,
      FailExprx: r.failStmt,
      ReturnExpr: $(T.RETURN, $(nls, rval).optional),
    }),
    scope: $.options({
      ExprScope: expr,
      BlockScope: r.block,
    }),
    rval: $.options({
      IfRVal: r.ifStmt,
      ExprRVal: expr,
    }),

    binaryOp: $.or(
      T.PLUS, T.DASH, T.SLASH, T.STAR, T.PERCENT,
      T.EQ2, T.NEQ, T.LT, T.LTE, T.GT, T.GTE,
      T.AMP2, T.PIPE2,
      T.QUESTION2,
    ),
    unaryPreOp: $.or(T.PLUS2, T.DASH2, T.BANG),
    unaryPostOp: $.or(T.PLUS2, T.DASH2, T.QUESTION1, T.BANG),
    
    nsIdent: $(T.COLON2.optional, nls, Ident, $(nls, T.COLON2, nls, Ident).star),
    stateIdent: $(T.STATE, $(nls, T.DOT1, nls, Ident).plus),

    let: $(T.LET, nls, $.many(r.varDecl, T.COLON, { multiline: true })),
    varDecl: $.or(
      $(Ident, T.COLON, r.typeDecl),
      $($.or(Ident, r.destructuring), T.EQ1, $.or(expr, r.queryStmt)),
    ),
    destructuring: $.options({
      ArrayDestructuring: $(LBRACK, $.list($.or(Ident, r.destructuring), COMMA).optional, RBRACK).inbetween(nls),
      TupleDestructuring: $(LPAREN, $.list($.or(Ident, r.destructuring), COMMA).optional, RPAREN).inbetween(nls),
      ObjectDestructuring: $(LBRACE, $.list($.or(Ident, r.destructuring), COMMA).optional, RBRACE).inbetween(nls),
    }),

    /***********************************************************************************************
     * FUNCTION DECLARATION
     ***********************************************************************************************/
    ...functions($), // exec, query, fn, instantiate methods in interfaces, contracts & global scope
    ...typing($), // type aliases, interfaces, contracts, structures, ...
    ...flow($), // if, for, while
    ...messaging($), // send, query + syntactic sugar
    ...literals($), // literals
  }
})
.build();

export default parser;
