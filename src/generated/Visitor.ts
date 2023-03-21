import { RuleASTNode, OptionsASTNode } from "@terran-one/ldtk";
import { CWScriptParser, ProgramContext, CmdsepContext, ImportDefContext, NamedImportContext, NamedImportsContext, RootContext, FunctionDefRootContext, StructureDefRootContext, ContractDefRootContext, InterfaceDefRootContext, ExprContext, GroupExprContext, BinaryOpExprContext, AssignExprContext, CallParenExprContext, UnaryPreOpExprContext, UnaryPostOpExprContext, SubscriptExprContext, PropExprContext, StateWriteExprContext, StateReadExprContext, LiteralExprContext, IdentExprContext, ExprxContext, ExprExprxContext, LetExprxContext, IfExprxContext, BlockExprxContext, ForLoopExprContext, WhileLoopExprContext, SendExprxContext, LogExprxContext, FailExprxContext, ReturnExprContext, ScopeContext, ExprScopeContext, BlockScopeContext, RvalContext, IfRValContext, ExprRValContext, BinaryOpContext, UnaryPreOpContext, UnaryPostOpContext, NsIdentContext, StateIdentContext, LetContext, VarDeclContext, DestructuringContext, ArrayDestructuringContext, TupleDestructuringContext, ObjectDestructuringContext, GlobalFnDefContext, MethodDefContext, InstantiateMethodDefContext, SingleMethodDefContext, BlockMethodDefContext, BlockFnDefContext, FnNameContext, IdentFnNameContext, InstantiateFnNameContext, FnSigArgsContext, FnSigRetContext, FnArgContext, ContractDefContext, ContractBodyContext, EventContractBodyContext, ErrorContractBodyContext, StructureContractBodyContext, StateContractBodyContext, MethodContractBodyContext, InterfaceDefContext, InterfaceBodyContext, EventInterfaceBodyContext, ErrorInterfaceBodyContext, StructureInterfaceBodyContext, MethodInterfaceBodyContext, StructureDefContext, EventDefContext, ErrorDefContext, StateDefContext, TypeDeclContext, IdentTypeDeclContext, TupleTypeDeclContext, NamedTupleTypeDeclContext, TypedIdentContext, NamedTupleTypeContext, BlockContext, ForLoopContext, WhileLoopContext, IfStmtContext, SendStmtContext, QueryStmtContext, LogStmtContext, AttributesLogStmtContext, EventLogStmtContext, FailStmtContext, EmptyFailStmtContext, ErrorFailStmtContext, MessageFailStmtContext, CreateEventOrErrorContext, LiteralContext, StringLiteralContext, NumberLiteralContext, BooleanLiteralContext, ArrayLiteralContext, MapLiteralContext, TupleLiteralContext, ArrayContext, MapContext, MapFieldContext, TupleContext } from "./antlr/CWScriptParser";

export type ASTRootNode = ProgramASTNode;

export class ProgramASTNode extends RuleASTNode<'program', 'cmdsep' | 'importDef' | 'root', 'SHEBANG' | 'NL'> {
}

export class CmdsepASTNode extends RuleASTNode<'cmdsep', string, 'NL' | 'SCOLON'> {
}

export class ImportDefASTNode extends RuleASTNode<'importDef', 'namedImports', 'IMPORT' | 'STAR' | 'AS' | 'Ident' | 'LBRACE' | 'NL' | 'RBRACE' | 'FROM' | 'String'> {
}

export class NamedImportASTNode extends RuleASTNode<'namedImport', string, 'Ident' | 'AS'> {
}

export class NamedImportsASTNode extends RuleASTNode<'namedImports', 'namedImport', 'NL' | 'COMMA'> {
}

export class RootASTNode extends OptionsASTNode<'root'> {
}

export class FunctionDefRootASTNode extends RuleASTNode<'FunctionDefRoot', 'globalFnDef', string> {
}

export class StructureDefRootASTNode extends RuleASTNode<'StructureDefRoot', 'structureDef', string> {
}

export class ContractDefRootASTNode extends RuleASTNode<'ContractDefRoot', 'contractDef', string> {
}

export class InterfaceDefRootASTNode extends RuleASTNode<'InterfaceDefRoot', 'interfaceDef', string> {
}

export class ExprASTNode extends OptionsASTNode<'expr'> {
}

export class GroupExprASTNode extends RuleASTNode<'GroupExpr', 'expr', 'LPAREN' | 'NL' | 'RPAREN'> {
}

export class BinaryOpExprASTNode extends RuleASTNode<'BinaryOpExpr', 'expr' | 'binaryOp', 'NL'> {
}

export class AssignExprASTNode extends RuleASTNode<'AssignExpr', 'expr', 'Ident' | 'NL' | 'EQ1' | 'ASSIGNOP'> {
}

export class CallParenExprASTNode extends RuleASTNode<'CallParenExpr', 'expr' | 'rval', 'LPAREN' | 'NL' | 'COMMA' | 'RPAREN'> {
}

export class UnaryPreOpExprASTNode extends RuleASTNode<'UnaryPreOpExpr', 'unaryPreOp' | 'expr', string> {
}

export class UnaryPostOpExprASTNode extends RuleASTNode<'UnaryPostOpExpr', 'expr' | 'unaryPostOp', string> {
}

export class SubscriptExprASTNode extends RuleASTNode<'SubscriptExpr', 'expr', 'LBRACK' | 'NL' | 'RBRACK'> {
}

export class PropExprASTNode extends RuleASTNode<'PropExpr', 'expr', 'NL' | 'DOT1' | 'Ident'> {
}

export class StateWriteExprASTNode extends RuleASTNode<'StateWriteExpr', 'stateIdent' | 'rval', 'EQ1' | 'ASSIGNOP'> {
}

export class StateReadExprASTNode extends RuleASTNode<'StateReadExpr', 'stateIdent', string> {
}

export class LiteralExprASTNode extends RuleASTNode<'LiteralExpr', 'literal', string> {
}

export class IdentExprASTNode extends RuleASTNode<'IdentExpr', 'nsIdent', string> {
}

export class ExprxASTNode extends OptionsASTNode<'exprx'> {
}

export class ExprExprxASTNode extends RuleASTNode<'ExprExprx', 'expr', string> {
}

export class LetExprxASTNode extends RuleASTNode<'LetExprx', 'let', string> {
}

export class IfExprxASTNode extends RuleASTNode<'IfExprx', 'ifStmt', string> {
}

export class BlockExprxASTNode extends RuleASTNode<'BlockExprx', 'block', string> {
}

export class ForLoopExprASTNode extends RuleASTNode<'ForLoopExpr', 'forLoop', string> {
}

export class WhileLoopExprASTNode extends RuleASTNode<'WhileLoopExpr', 'whileLoop', string> {
}

export class SendExprxASTNode extends RuleASTNode<'SendExprx', 'sendStmt', string> {
}

export class LogExprxASTNode extends RuleASTNode<'LogExprx', 'logStmt', string> {
}

export class FailExprxASTNode extends RuleASTNode<'FailExprx', 'failStmt', string> {
}

export class ReturnExprASTNode extends RuleASTNode<'ReturnExpr', 'rval', 'RETURN' | 'NL'> {
}

export class ScopeASTNode extends OptionsASTNode<'scope'> {
}

export class ExprScopeASTNode extends RuleASTNode<'ExprScope', 'expr', string> {
}

export class BlockScopeASTNode extends RuleASTNode<'BlockScope', 'block', string> {
}

export class RvalASTNode extends OptionsASTNode<'rval'> {
}

export class IfRValASTNode extends RuleASTNode<'IfRVal', 'ifStmt', string> {
}

export class ExprRValASTNode extends RuleASTNode<'ExprRVal', 'expr', string> {
}

export class BinaryOpASTNode extends RuleASTNode<'binaryOp', string, 'PLUS' | 'DASH' | 'SLASH' | 'STAR' | 'PERCENT' | 'EQ2' | 'NEQ' | 'LT' | 'LTE' | 'GT' | 'GTE' | 'AMP2' | 'PIPE2' | 'QUESTION2'> {
}

export class UnaryPreOpASTNode extends RuleASTNode<'unaryPreOp', string, 'PLUS2' | 'DASH2' | 'BANG'> {
}

export class UnaryPostOpASTNode extends RuleASTNode<'unaryPostOp', string, 'PLUS2' | 'DASH2' | 'QUESTION1' | 'BANG'> {
}

export class NsIdentASTNode extends RuleASTNode<'nsIdent', string, 'COLON2' | 'NL' | 'Ident'> {
}

export class StateIdentASTNode extends RuleASTNode<'stateIdent', string, 'STATE' | 'NL' | 'DOT1' | 'Ident'> {
}

export class LetASTNode extends RuleASTNode<'let', 'varDecl', 'LET' | 'NL' | 'COLON'> {
}

export class VarDeclASTNode extends RuleASTNode<'varDecl', 'typeDecl' | 'destructuring' | 'expr' | 'queryStmt', 'Ident' | 'COLON' | 'EQ1'> {
}

export class DestructuringASTNode extends OptionsASTNode<'destructuring'> {
}

export class ArrayDestructuringASTNode extends RuleASTNode<'ArrayDestructuring', 'destructuring', 'LBRACK' | 'NL' | 'Ident' | 'COMMA' | 'RBRACK'> {
}

export class TupleDestructuringASTNode extends RuleASTNode<'TupleDestructuring', 'destructuring', 'LPAREN' | 'NL' | 'Ident' | 'COMMA' | 'RPAREN'> {
}

export class ObjectDestructuringASTNode extends RuleASTNode<'ObjectDestructuring', 'destructuring', 'LBRACE' | 'NL' | 'Ident' | 'COMMA' | 'RBRACE'> {
}

export class GlobalFnDefASTNode extends RuleASTNode<'globalFnDef', 'nsIdent' | 'fnSigArgs' | 'fnSigRet' | 'block', 'EXEC' | 'QUERY' | 'FN' | 'NL'> {
}

export class MethodDefASTNode extends OptionsASTNode<'methodDef'> {
}

export class InstantiateMethodDefASTNode extends RuleASTNode<'InstantiateMethodDef', 'nsIdent' | 'fnSigArgs' | 'fnSigRet' | 'block', 'INSTANTIATE' | 'NL'> {
}

export class SingleMethodDefASTNode extends RuleASTNode<'SingleMethodDef', 'blockFnDef', 'EXEC' | 'QUERY' | 'FN' | 'NL'> {
}

export class BlockMethodDefASTNode extends RuleASTNode<'BlockMethodDef', 'blockFnDef' | 'cmdsep', 'EXEC' | 'QUERY' | 'NL' | 'LBRACE' | 'RBRACE'> {
}

export class BlockFnDefASTNode extends RuleASTNode<'blockFnDef', 'fnName' | 'fnSigArgs' | 'fnSigRet' | 'block', 'NL'> {
}

export class FnNameASTNode extends OptionsASTNode<'fnName'> {
}

export class IdentFnNameASTNode extends RuleASTNode<'IdentFnName', 'nsIdent', string> {
}

export class InstantiateFnNameASTNode extends RuleASTNode<'InstantiateFnName', string, 'INSTANTIATE'> {
}

export class FnSigArgsASTNode extends RuleASTNode<'fnSigArgs', 'fnArg', 'LPAREN' | 'NL' | 'COMMA' | 'RPAREN'> {
}

export class FnSigRetASTNode extends RuleASTNode<'fnSigRet', 'typeDecl', 'NL' | 'SLIM_ARROW'> {
}

export class FnArgASTNode extends RuleASTNode<'fnArg', 'nsIdent' | 'typeDecl' | 'expr', 'NL' | 'COLON' | 'EQ1'> {
}

export class ContractDefASTNode extends RuleASTNode<'contractDef', 'contractBody' | 'cmdsep', 'CONTRACT' | 'NL' | 'Ident' | 'EXTENDS' | 'IMPLEMENTS' | 'COMMA' | 'LBRACE' | 'RBRACE'> {
}

export class ContractBodyASTNode extends OptionsASTNode<'contractBody'> {
}

export class EventContractBodyASTNode extends RuleASTNode<'EventContractBody', 'eventDef', string> {
}

export class ErrorContractBodyASTNode extends RuleASTNode<'ErrorContractBody', 'errorDef', string> {
}

export class StructureContractBodyASTNode extends RuleASTNode<'StructureContractBody', 'structureDef', string> {
}

export class StateContractBodyASTNode extends RuleASTNode<'StateContractBody', 'stateDef', string> {
}

export class MethodContractBodyASTNode extends RuleASTNode<'MethodContractBody', 'methodDef', string> {
}

export class InterfaceDefASTNode extends RuleASTNode<'interfaceDef', 'interfaceBody' | 'cmdsep', 'INTERFACE' | 'NL' | 'Ident' | 'EXTENDS' | 'COMMA'> {
}

export class InterfaceBodyASTNode extends OptionsASTNode<'interfaceBody'> {
}

export class EventInterfaceBodyASTNode extends RuleASTNode<'EventInterfaceBody', 'eventDef', string> {
}

export class ErrorInterfaceBodyASTNode extends RuleASTNode<'ErrorInterfaceBody', 'errorDef', string> {
}

export class StructureInterfaceBodyASTNode extends RuleASTNode<'StructureInterfaceBody', 'structureDef', string> {
}

export class MethodInterfaceBodyASTNode extends RuleASTNode<'MethodInterfaceBody', 'methodDef', string> {
}

export class StructureDefASTNode extends RuleASTNode<'structureDef', 'typedIdent', 'STRUCT' | 'Ident' | 'LBRACE' | 'NL' | 'COMMA' | 'RBRACE'> {
}

export class EventDefASTNode extends RuleASTNode<'eventDef', 'namedTupleType', 'EVENT' | 'Ident'> {
}

export class ErrorDefASTNode extends RuleASTNode<'errorDef', 'namedTupleType', 'ERROR' | 'Ident'> {
}

export class StateDefASTNode extends RuleASTNode<'stateDef', 'typedIdent', 'STATE' | 'LBRACE' | 'NL' | 'COMMA' | 'SCOLON' | 'RBRACE'> {
}

export class TypeDeclASTNode extends OptionsASTNode<'typeDecl'> {
}

export class IdentTypeDeclASTNode extends RuleASTNode<'IdentTypeDecl', string, 'Ident'> {
}

export class TupleTypeDeclASTNode extends RuleASTNode<'TupleTypeDecl', string, 'LPAREN' | 'NL' | 'Ident' | 'COMMA' | 'RPAREN'> {
}

export class NamedTupleTypeDeclASTNode extends RuleASTNode<'NamedTupleTypeDecl', 'namedTupleType', string> {
}

export class TypedIdentASTNode extends RuleASTNode<'typedIdent', 'typeDecl', 'Ident' | 'COLON'> {
}

export class NamedTupleTypeASTNode extends RuleASTNode<'namedTupleType', 'typedIdent', 'LPAREN' | 'NL' | 'COMMA' | 'RPAREN'> {
}

export class BlockASTNode extends RuleASTNode<'block', 'cmdsep' | 'exprx', 'NL' | 'LBRACE' | 'RBRACE'> {
}

export class ForLoopASTNode extends RuleASTNode<'forLoop', 'varDecl' | 'expr' | 'scope', 'FOR' | 'NL' | 'IN'> {
}

export class WhileLoopASTNode extends RuleASTNode<'whileLoop', 'expr' | 'scope', 'WHILE' | 'NL'> {
}

export class IfStmtASTNode extends RuleASTNode<'ifStmt', 'expr' | 'scope', 'IF' | 'NL' | 'ELSE'> {
}

export class SendStmtASTNode extends RuleASTNode<'sendStmt', 'nsIdent' | 'map', 'SEND' | 'NL'> {
}

export class QueryStmtASTNode extends RuleASTNode<'queryStmt', 'nsIdent' | 'map', 'QUERY' | 'NL'> {
}

export class LogStmtASTNode extends OptionsASTNode<'logStmt'> {
}

export class AttributesLogStmtASTNode extends RuleASTNode<'AttributesLogStmt', 'map', 'LOG' | 'NL'> {
}

export class EventLogStmtASTNode extends RuleASTNode<'EventLogStmt', 'createEventOrError', 'LOG' | 'NL'> {
}

export class FailStmtASTNode extends OptionsASTNode<'failStmt'> {
}

export class EmptyFailStmtASTNode extends RuleASTNode<'EmptyFailStmt', string, 'FAIL'> {
}

export class ErrorFailStmtASTNode extends RuleASTNode<'ErrorFailStmt', 'createEventOrError', 'FAIL' | 'NL'> {
}

export class MessageFailStmtASTNode extends RuleASTNode<'MessageFailStmt', 'rval', 'FAIL' | 'NL'> {
}

export class CreateEventOrErrorASTNode extends RuleASTNode<'createEventOrError', 'nsIdent' | 'rval', 'LPAREN' | 'NL' | 'COMMA' | 'RPAREN'> {
}

export class LiteralASTNode extends OptionsASTNode<'literal'> {
}

export class StringLiteralASTNode extends RuleASTNode<'StringLiteral', string, 'String'> {
}

export class NumberLiteralASTNode extends RuleASTNode<'NumberLiteral', string, 'Number'> {
}

export class BooleanLiteralASTNode extends RuleASTNode<'BooleanLiteral', string, 'TRUE' | 'FALSE'> {
}

export class ArrayLiteralASTNode extends RuleASTNode<'ArrayLiteral', 'array', string> {
}

export class MapLiteralASTNode extends RuleASTNode<'MapLiteral', 'map', string> {
}

export class TupleLiteralASTNode extends RuleASTNode<'TupleLiteral', 'tuple', string> {
}

export class ArrayASTNode extends RuleASTNode<'array', 'rval', 'LBRACK' | 'NL' | 'COMMA' | 'RBRACK'> {
}

export class MapASTNode extends RuleASTNode<'map', 'mapField', 'LBRACE' | 'NL' | 'COMMA' | 'RBRACE'> {
}

export class MapFieldASTNode extends RuleASTNode<'mapField', 'rval', 'Ident' | 'NL' | 'COLON'> {
}

export class TupleASTNode extends RuleASTNode<'tuple', 'rval', 'LPAREN' | 'NL' | 'COMMA' | 'RPAREN'> {
}

export type ASTMap = {
    program: ProgramASTNode,
    cmdsep: CmdsepASTNode,
    importDef: ImportDefASTNode,
    namedImport: NamedImportASTNode,
    namedImports: NamedImportsASTNode,
    root: RootASTNode,
    FunctionDefRoot: FunctionDefRootASTNode,
    StructureDefRoot: StructureDefRootASTNode,
    ContractDefRoot: ContractDefRootASTNode,
    InterfaceDefRoot: InterfaceDefRootASTNode,
    expr: ExprASTNode,
    GroupExpr: GroupExprASTNode,
    BinaryOpExpr: BinaryOpExprASTNode,
    AssignExpr: AssignExprASTNode,
    CallParenExpr: CallParenExprASTNode,
    UnaryPreOpExpr: UnaryPreOpExprASTNode,
    UnaryPostOpExpr: UnaryPostOpExprASTNode,
    SubscriptExpr: SubscriptExprASTNode,
    PropExpr: PropExprASTNode,
    StateWriteExpr: StateWriteExprASTNode,
    StateReadExpr: StateReadExprASTNode,
    LiteralExpr: LiteralExprASTNode,
    IdentExpr: IdentExprASTNode,
    exprx: ExprxASTNode,
    ExprExprx: ExprExprxASTNode,
    LetExprx: LetExprxASTNode,
    IfExprx: IfExprxASTNode,
    BlockExprx: BlockExprxASTNode,
    ForLoopExpr: ForLoopExprASTNode,
    WhileLoopExpr: WhileLoopExprASTNode,
    SendExprx: SendExprxASTNode,
    LogExprx: LogExprxASTNode,
    FailExprx: FailExprxASTNode,
    ReturnExpr: ReturnExprASTNode,
    scope: ScopeASTNode,
    ExprScope: ExprScopeASTNode,
    BlockScope: BlockScopeASTNode,
    rval: RvalASTNode,
    IfRVal: IfRValASTNode,
    ExprRVal: ExprRValASTNode,
    binaryOp: BinaryOpASTNode,
    unaryPreOp: UnaryPreOpASTNode,
    unaryPostOp: UnaryPostOpASTNode,
    nsIdent: NsIdentASTNode,
    stateIdent: StateIdentASTNode,
    let: LetASTNode,
    varDecl: VarDeclASTNode,
    destructuring: DestructuringASTNode,
    ArrayDestructuring: ArrayDestructuringASTNode,
    TupleDestructuring: TupleDestructuringASTNode,
    ObjectDestructuring: ObjectDestructuringASTNode,
    globalFnDef: GlobalFnDefASTNode,
    methodDef: MethodDefASTNode,
    InstantiateMethodDef: InstantiateMethodDefASTNode,
    SingleMethodDef: SingleMethodDefASTNode,
    BlockMethodDef: BlockMethodDefASTNode,
    blockFnDef: BlockFnDefASTNode,
    fnName: FnNameASTNode,
    IdentFnName: IdentFnNameASTNode,
    InstantiateFnName: InstantiateFnNameASTNode,
    fnSigArgs: FnSigArgsASTNode,
    fnSigRet: FnSigRetASTNode,
    fnArg: FnArgASTNode,
    contractDef: ContractDefASTNode,
    contractBody: ContractBodyASTNode,
    EventContractBody: EventContractBodyASTNode,
    ErrorContractBody: ErrorContractBodyASTNode,
    StructureContractBody: StructureContractBodyASTNode,
    StateContractBody: StateContractBodyASTNode,
    MethodContractBody: MethodContractBodyASTNode,
    interfaceDef: InterfaceDefASTNode,
    interfaceBody: InterfaceBodyASTNode,
    EventInterfaceBody: EventInterfaceBodyASTNode,
    ErrorInterfaceBody: ErrorInterfaceBodyASTNode,
    StructureInterfaceBody: StructureInterfaceBodyASTNode,
    MethodInterfaceBody: MethodInterfaceBodyASTNode,
    structureDef: StructureDefASTNode,
    eventDef: EventDefASTNode,
    errorDef: ErrorDefASTNode,
    stateDef: StateDefASTNode,
    typeDecl: TypeDeclASTNode,
    IdentTypeDecl: IdentTypeDeclASTNode,
    TupleTypeDecl: TupleTypeDeclASTNode,
    NamedTupleTypeDecl: NamedTupleTypeDeclASTNode,
    typedIdent: TypedIdentASTNode,
    namedTupleType: NamedTupleTypeASTNode,
    block: BlockASTNode,
    forLoop: ForLoopASTNode,
    whileLoop: WhileLoopASTNode,
    ifStmt: IfStmtASTNode,
    sendStmt: SendStmtASTNode,
    queryStmt: QueryStmtASTNode,
    logStmt: LogStmtASTNode,
    AttributesLogStmt: AttributesLogStmtASTNode,
    EventLogStmt: EventLogStmtASTNode,
    failStmt: FailStmtASTNode,
    EmptyFailStmt: EmptyFailStmtASTNode,
    ErrorFailStmt: ErrorFailStmtASTNode,
    MessageFailStmt: MessageFailStmtASTNode,
    createEventOrError: CreateEventOrErrorASTNode,
    literal: LiteralASTNode,
    StringLiteral: StringLiteralASTNode,
    NumberLiteral: NumberLiteralASTNode,
    BooleanLiteral: BooleanLiteralASTNode,
    ArrayLiteral: ArrayLiteralASTNode,
    MapLiteral: MapLiteralASTNode,
    TupleLiteral: TupleLiteralASTNode,
    array: ArrayASTNode,
    map: MapASTNode,
    mapField: MapFieldASTNode,
    tuple: TupleASTNode,
  };
export type ASTNode = ASTMap[keyof ASTMap];

export const visit = {
    program: (ctx: ProgramContext): ProgramASTNode => {
      const rules = {
        cmdsep: ctx.getRuleContexts(CmdsepContext).map(item => visit.cmdsep(item)),
        importDef: ctx.getRuleContexts(ImportDefContext).map(item => visit.importDef(item)),
        root: ctx.getRuleContexts(RootContext).map(item => visit.root(item)),
      };

      const tokens = {
        SHEBANG: ctx.getTokens(CWScriptParser.SHEBANG),
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new ProgramASTNode('program', ctx, rules, tokens);
    },
    cmdsep: (ctx: CmdsepContext): CmdsepASTNode => {
      const rules = {
      };

      const tokens = {
        NL: ctx.getTokens(CWScriptParser.NL),
        SCOLON: ctx.getTokens(CWScriptParser.SCOLON),
      };

      return new CmdsepASTNode('cmdsep', ctx, rules, tokens);
    },
    importDef: (ctx: ImportDefContext): ImportDefASTNode => {
      const rules = {
        namedImports: ctx.getRuleContexts(NamedImportsContext).map(item => visit.namedImports(item)),
      };

      const tokens = {
        IMPORT: ctx.getTokens(CWScriptParser.IMPORT),
        STAR: ctx.getTokens(CWScriptParser.STAR),
        AS: ctx.getTokens(CWScriptParser.AS),
        Ident: ctx.getTokens(CWScriptParser.Ident),
        LBRACE: ctx.getTokens(CWScriptParser.LBRACE),
        NL: ctx.getTokens(CWScriptParser.NL),
        RBRACE: ctx.getTokens(CWScriptParser.RBRACE),
        FROM: ctx.getTokens(CWScriptParser.FROM),
        String: ctx.getTokens(CWScriptParser.String),
      };

      return new ImportDefASTNode('importDef', ctx, rules, tokens);
    },
    namedImport: (ctx: NamedImportContext): NamedImportASTNode => {
      const rules = {
      };

      const tokens = {
        Ident: ctx.getTokens(CWScriptParser.Ident),
        AS: ctx.getTokens(CWScriptParser.AS),
      };

      return new NamedImportASTNode('namedImport', ctx, rules, tokens);
    },
    namedImports: (ctx: NamedImportsContext): NamedImportsASTNode => {
      const rules = {
        namedImport: ctx.getRuleContexts(NamedImportContext).map(item => visit.namedImport(item)),
      };

      const tokens = {
        NL: ctx.getTokens(CWScriptParser.NL),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
      };

      return new NamedImportsASTNode('namedImports', ctx, rules, tokens);
    },
    root: (ctx: RootContext): RootASTNode => {
      const opts = [
        ctx instanceof FunctionDefRootContext && visit.FunctionDefRoot(ctx), 
        ctx instanceof StructureDefRootContext && visit.StructureDefRoot(ctx), 
        ctx instanceof ContractDefRootContext && visit.ContractDefRoot(ctx), 
        ctx instanceof InterfaceDefRootContext && visit.InterfaceDefRoot(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule root");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule root");

      return new RootASTNode('root', ctx, option);
    },
    FunctionDefRoot: (ctx: FunctionDefRootContext): FunctionDefRootASTNode => {
      const rules = {
        globalFnDef: ctx.getRuleContexts(GlobalFnDefContext).map(item => visit.globalFnDef(item)),
      };

      const tokens = {
      };

      return new FunctionDefRootASTNode('FunctionDefRoot', ctx, rules, tokens);
    },
    StructureDefRoot: (ctx: StructureDefRootContext): StructureDefRootASTNode => {
      const rules = {
        structureDef: ctx.getRuleContexts(StructureDefContext).map(item => visit.structureDef(item)),
      };

      const tokens = {
      };

      return new StructureDefRootASTNode('StructureDefRoot', ctx, rules, tokens);
    },
    ContractDefRoot: (ctx: ContractDefRootContext): ContractDefRootASTNode => {
      const rules = {
        contractDef: ctx.getRuleContexts(ContractDefContext).map(item => visit.contractDef(item)),
      };

      const tokens = {
      };

      return new ContractDefRootASTNode('ContractDefRoot', ctx, rules, tokens);
    },
    InterfaceDefRoot: (ctx: InterfaceDefRootContext): InterfaceDefRootASTNode => {
      const rules = {
        interfaceDef: ctx.getRuleContexts(InterfaceDefContext).map(item => visit.interfaceDef(item)),
      };

      const tokens = {
      };

      return new InterfaceDefRootASTNode('InterfaceDefRoot', ctx, rules, tokens);
    },
    expr: (ctx: ExprContext): ExprASTNode => {
      const opts = [
        ctx instanceof GroupExprContext && visit.GroupExpr(ctx), 
        ctx instanceof BinaryOpExprContext && visit.BinaryOpExpr(ctx), 
        ctx instanceof AssignExprContext && visit.AssignExpr(ctx), 
        ctx instanceof CallParenExprContext && visit.CallParenExpr(ctx), 
        ctx instanceof UnaryPreOpExprContext && visit.UnaryPreOpExpr(ctx), 
        ctx instanceof UnaryPostOpExprContext && visit.UnaryPostOpExpr(ctx), 
        ctx instanceof SubscriptExprContext && visit.SubscriptExpr(ctx), 
        ctx instanceof PropExprContext && visit.PropExpr(ctx), 
        ctx instanceof StateWriteExprContext && visit.StateWriteExpr(ctx), 
        ctx instanceof StateReadExprContext && visit.StateReadExpr(ctx), 
        ctx instanceof LiteralExprContext && visit.LiteralExpr(ctx), 
        ctx instanceof IdentExprContext && visit.IdentExpr(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule expr");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule expr");

      return new ExprASTNode('expr', ctx, option);
    },
    GroupExpr: (ctx: GroupExprContext): GroupExprASTNode => {
      const rules = {
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
      };

      const tokens = {
        LPAREN: ctx.getTokens(CWScriptParser.LPAREN),
        NL: ctx.getTokens(CWScriptParser.NL),
        RPAREN: ctx.getTokens(CWScriptParser.RPAREN),
      };

      return new GroupExprASTNode('GroupExpr', ctx, rules, tokens);
    },
    BinaryOpExpr: (ctx: BinaryOpExprContext): BinaryOpExprASTNode => {
      const rules = {
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
        binaryOp: ctx.getRuleContexts(BinaryOpContext).map(item => visit.binaryOp(item)),
      };

      const tokens = {
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new BinaryOpExprASTNode('BinaryOpExpr', ctx, rules, tokens);
    },
    AssignExpr: (ctx: AssignExprContext): AssignExprASTNode => {
      const rules = {
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
      };

      const tokens = {
        Ident: ctx.getTokens(CWScriptParser.Ident),
        NL: ctx.getTokens(CWScriptParser.NL),
        EQ1: ctx.getTokens(CWScriptParser.EQ1),
        ASSIGNOP: ctx.getTokens(CWScriptParser.ASSIGNOP),
      };

      return new AssignExprASTNode('AssignExpr', ctx, rules, tokens);
    },
    CallParenExpr: (ctx: CallParenExprContext): CallParenExprASTNode => {
      const rules = {
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
        rval: ctx.getRuleContexts(RvalContext).map(item => visit.rval(item)),
      };

      const tokens = {
        LPAREN: ctx.getTokens(CWScriptParser.LPAREN),
        NL: ctx.getTokens(CWScriptParser.NL),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        RPAREN: ctx.getTokens(CWScriptParser.RPAREN),
      };

      return new CallParenExprASTNode('CallParenExpr', ctx, rules, tokens);
    },
    UnaryPreOpExpr: (ctx: UnaryPreOpExprContext): UnaryPreOpExprASTNode => {
      const rules = {
        unaryPreOp: ctx.getRuleContexts(UnaryPreOpContext).map(item => visit.unaryPreOp(item)),
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
      };

      const tokens = {
      };

      return new UnaryPreOpExprASTNode('UnaryPreOpExpr', ctx, rules, tokens);
    },
    UnaryPostOpExpr: (ctx: UnaryPostOpExprContext): UnaryPostOpExprASTNode => {
      const rules = {
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
        unaryPostOp: ctx.getRuleContexts(UnaryPostOpContext).map(item => visit.unaryPostOp(item)),
      };

      const tokens = {
      };

      return new UnaryPostOpExprASTNode('UnaryPostOpExpr', ctx, rules, tokens);
    },
    SubscriptExpr: (ctx: SubscriptExprContext): SubscriptExprASTNode => {
      const rules = {
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
      };

      const tokens = {
        LBRACK: ctx.getTokens(CWScriptParser.LBRACK),
        NL: ctx.getTokens(CWScriptParser.NL),
        RBRACK: ctx.getTokens(CWScriptParser.RBRACK),
      };

      return new SubscriptExprASTNode('SubscriptExpr', ctx, rules, tokens);
    },
    PropExpr: (ctx: PropExprContext): PropExprASTNode => {
      const rules = {
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
      };

      const tokens = {
        NL: ctx.getTokens(CWScriptParser.NL),
        DOT1: ctx.getTokens(CWScriptParser.DOT1),
        Ident: ctx.getTokens(CWScriptParser.Ident),
      };

      return new PropExprASTNode('PropExpr', ctx, rules, tokens);
    },
    StateWriteExpr: (ctx: StateWriteExprContext): StateWriteExprASTNode => {
      const rules = {
        stateIdent: ctx.getRuleContexts(StateIdentContext).map(item => visit.stateIdent(item)),
        rval: ctx.getRuleContexts(RvalContext).map(item => visit.rval(item)),
      };

      const tokens = {
        EQ1: ctx.getTokens(CWScriptParser.EQ1),
        ASSIGNOP: ctx.getTokens(CWScriptParser.ASSIGNOP),
      };

      return new StateWriteExprASTNode('StateWriteExpr', ctx, rules, tokens);
    },
    StateReadExpr: (ctx: StateReadExprContext): StateReadExprASTNode => {
      const rules = {
        stateIdent: ctx.getRuleContexts(StateIdentContext).map(item => visit.stateIdent(item)),
      };

      const tokens = {
      };

      return new StateReadExprASTNode('StateReadExpr', ctx, rules, tokens);
    },
    LiteralExpr: (ctx: LiteralExprContext): LiteralExprASTNode => {
      const rules = {
        literal: ctx.getRuleContexts(LiteralContext).map(item => visit.literal(item)),
      };

      const tokens = {
      };

      return new LiteralExprASTNode('LiteralExpr', ctx, rules, tokens);
    },
    IdentExpr: (ctx: IdentExprContext): IdentExprASTNode => {
      const rules = {
        nsIdent: ctx.getRuleContexts(NsIdentContext).map(item => visit.nsIdent(item)),
      };

      const tokens = {
      };

      return new IdentExprASTNode('IdentExpr', ctx, rules, tokens);
    },
    exprx: (ctx: ExprxContext): ExprxASTNode => {
      const opts = [
        ctx instanceof ExprExprxContext && visit.ExprExprx(ctx), 
        ctx instanceof LetExprxContext && visit.LetExprx(ctx), 
        ctx instanceof IfExprxContext && visit.IfExprx(ctx), 
        ctx instanceof BlockExprxContext && visit.BlockExprx(ctx), 
        ctx instanceof ForLoopExprContext && visit.ForLoopExpr(ctx), 
        ctx instanceof WhileLoopExprContext && visit.WhileLoopExpr(ctx), 
        ctx instanceof SendExprxContext && visit.SendExprx(ctx), 
        ctx instanceof LogExprxContext && visit.LogExprx(ctx), 
        ctx instanceof FailExprxContext && visit.FailExprx(ctx), 
        ctx instanceof ReturnExprContext && visit.ReturnExpr(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule exprx");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule exprx");

      return new ExprxASTNode('exprx', ctx, option);
    },
    ExprExprx: (ctx: ExprExprxContext): ExprExprxASTNode => {
      const rules = {
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
      };

      const tokens = {
      };

      return new ExprExprxASTNode('ExprExprx', ctx, rules, tokens);
    },
    LetExprx: (ctx: LetExprxContext): LetExprxASTNode => {
      const rules = {
        let: ctx.getRuleContexts(LetContext).map(item => visit.let(item)),
      };

      const tokens = {
      };

      return new LetExprxASTNode('LetExprx', ctx, rules, tokens);
    },
    IfExprx: (ctx: IfExprxContext): IfExprxASTNode => {
      const rules = {
        ifStmt: ctx.getRuleContexts(IfStmtContext).map(item => visit.ifStmt(item)),
      };

      const tokens = {
      };

      return new IfExprxASTNode('IfExprx', ctx, rules, tokens);
    },
    BlockExprx: (ctx: BlockExprxContext): BlockExprxASTNode => {
      const rules = {
        block: ctx.getRuleContexts(BlockContext).map(item => visit.block(item)),
      };

      const tokens = {
      };

      return new BlockExprxASTNode('BlockExprx', ctx, rules, tokens);
    },
    ForLoopExpr: (ctx: ForLoopExprContext): ForLoopExprASTNode => {
      const rules = {
        forLoop: ctx.getRuleContexts(ForLoopContext).map(item => visit.forLoop(item)),
      };

      const tokens = {
      };

      return new ForLoopExprASTNode('ForLoopExpr', ctx, rules, tokens);
    },
    WhileLoopExpr: (ctx: WhileLoopExprContext): WhileLoopExprASTNode => {
      const rules = {
        whileLoop: ctx.getRuleContexts(WhileLoopContext).map(item => visit.whileLoop(item)),
      };

      const tokens = {
      };

      return new WhileLoopExprASTNode('WhileLoopExpr', ctx, rules, tokens);
    },
    SendExprx: (ctx: SendExprxContext): SendExprxASTNode => {
      const rules = {
        sendStmt: ctx.getRuleContexts(SendStmtContext).map(item => visit.sendStmt(item)),
      };

      const tokens = {
      };

      return new SendExprxASTNode('SendExprx', ctx, rules, tokens);
    },
    LogExprx: (ctx: LogExprxContext): LogExprxASTNode => {
      const rules = {
        logStmt: ctx.getRuleContexts(LogStmtContext).map(item => visit.logStmt(item)),
      };

      const tokens = {
      };

      return new LogExprxASTNode('LogExprx', ctx, rules, tokens);
    },
    FailExprx: (ctx: FailExprxContext): FailExprxASTNode => {
      const rules = {
        failStmt: ctx.getRuleContexts(FailStmtContext).map(item => visit.failStmt(item)),
      };

      const tokens = {
      };

      return new FailExprxASTNode('FailExprx', ctx, rules, tokens);
    },
    ReturnExpr: (ctx: ReturnExprContext): ReturnExprASTNode => {
      const rules = {
        rval: ctx.getRuleContexts(RvalContext).map(item => visit.rval(item)),
      };

      const tokens = {
        RETURN: ctx.getTokens(CWScriptParser.RETURN),
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new ReturnExprASTNode('ReturnExpr', ctx, rules, tokens);
    },
    scope: (ctx: ScopeContext): ScopeASTNode => {
      const opts = [
        ctx instanceof ExprScopeContext && visit.ExprScope(ctx), 
        ctx instanceof BlockScopeContext && visit.BlockScope(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule scope");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule scope");

      return new ScopeASTNode('scope', ctx, option);
    },
    ExprScope: (ctx: ExprScopeContext): ExprScopeASTNode => {
      const rules = {
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
      };

      const tokens = {
      };

      return new ExprScopeASTNode('ExprScope', ctx, rules, tokens);
    },
    BlockScope: (ctx: BlockScopeContext): BlockScopeASTNode => {
      const rules = {
        block: ctx.getRuleContexts(BlockContext).map(item => visit.block(item)),
      };

      const tokens = {
      };

      return new BlockScopeASTNode('BlockScope', ctx, rules, tokens);
    },
    rval: (ctx: RvalContext): RvalASTNode => {
      const opts = [
        ctx instanceof IfRValContext && visit.IfRVal(ctx), 
        ctx instanceof ExprRValContext && visit.ExprRVal(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule rval");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule rval");

      return new RvalASTNode('rval', ctx, option);
    },
    IfRVal: (ctx: IfRValContext): IfRValASTNode => {
      const rules = {
        ifStmt: ctx.getRuleContexts(IfStmtContext).map(item => visit.ifStmt(item)),
      };

      const tokens = {
      };

      return new IfRValASTNode('IfRVal', ctx, rules, tokens);
    },
    ExprRVal: (ctx: ExprRValContext): ExprRValASTNode => {
      const rules = {
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
      };

      const tokens = {
      };

      return new ExprRValASTNode('ExprRVal', ctx, rules, tokens);
    },
    binaryOp: (ctx: BinaryOpContext): BinaryOpASTNode => {
      const rules = {
      };

      const tokens = {
        PLUS: ctx.getTokens(CWScriptParser.PLUS),
        DASH: ctx.getTokens(CWScriptParser.DASH),
        SLASH: ctx.getTokens(CWScriptParser.SLASH),
        STAR: ctx.getTokens(CWScriptParser.STAR),
        PERCENT: ctx.getTokens(CWScriptParser.PERCENT),
        EQ2: ctx.getTokens(CWScriptParser.EQ2),
        NEQ: ctx.getTokens(CWScriptParser.NEQ),
        LT: ctx.getTokens(CWScriptParser.LT),
        LTE: ctx.getTokens(CWScriptParser.LTE),
        GT: ctx.getTokens(CWScriptParser.GT),
        GTE: ctx.getTokens(CWScriptParser.GTE),
        AMP2: ctx.getTokens(CWScriptParser.AMP2),
        PIPE2: ctx.getTokens(CWScriptParser.PIPE2),
        QUESTION2: ctx.getTokens(CWScriptParser.QUESTION2),
      };

      return new BinaryOpASTNode('binaryOp', ctx, rules, tokens);
    },
    unaryPreOp: (ctx: UnaryPreOpContext): UnaryPreOpASTNode => {
      const rules = {
      };

      const tokens = {
        PLUS2: ctx.getTokens(CWScriptParser.PLUS2),
        DASH2: ctx.getTokens(CWScriptParser.DASH2),
        BANG: ctx.getTokens(CWScriptParser.BANG),
      };

      return new UnaryPreOpASTNode('unaryPreOp', ctx, rules, tokens);
    },
    unaryPostOp: (ctx: UnaryPostOpContext): UnaryPostOpASTNode => {
      const rules = {
      };

      const tokens = {
        PLUS2: ctx.getTokens(CWScriptParser.PLUS2),
        DASH2: ctx.getTokens(CWScriptParser.DASH2),
        QUESTION1: ctx.getTokens(CWScriptParser.QUESTION1),
        BANG: ctx.getTokens(CWScriptParser.BANG),
      };

      return new UnaryPostOpASTNode('unaryPostOp', ctx, rules, tokens);
    },
    nsIdent: (ctx: NsIdentContext): NsIdentASTNode => {
      const rules = {
      };

      const tokens = {
        COLON2: ctx.getTokens(CWScriptParser.COLON2),
        NL: ctx.getTokens(CWScriptParser.NL),
        Ident: ctx.getTokens(CWScriptParser.Ident),
      };

      return new NsIdentASTNode('nsIdent', ctx, rules, tokens);
    },
    stateIdent: (ctx: StateIdentContext): StateIdentASTNode => {
      const rules = {
      };

      const tokens = {
        STATE: ctx.getTokens(CWScriptParser.STATE),
        NL: ctx.getTokens(CWScriptParser.NL),
        DOT1: ctx.getTokens(CWScriptParser.DOT1),
        Ident: ctx.getTokens(CWScriptParser.Ident),
      };

      return new StateIdentASTNode('stateIdent', ctx, rules, tokens);
    },
    let: (ctx: LetContext): LetASTNode => {
      const rules = {
        varDecl: ctx.getRuleContexts(VarDeclContext).map(item => visit.varDecl(item)),
      };

      const tokens = {
        LET: ctx.getTokens(CWScriptParser.LET),
        NL: ctx.getTokens(CWScriptParser.NL),
        COLON: ctx.getTokens(CWScriptParser.COLON),
      };

      return new LetASTNode('let', ctx, rules, tokens);
    },
    varDecl: (ctx: VarDeclContext): VarDeclASTNode => {
      const rules = {
        typeDecl: ctx.getRuleContexts(TypeDeclContext).map(item => visit.typeDecl(item)),
        destructuring: ctx.getRuleContexts(DestructuringContext).map(item => visit.destructuring(item)),
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
        queryStmt: ctx.getRuleContexts(QueryStmtContext).map(item => visit.queryStmt(item)),
      };

      const tokens = {
        Ident: ctx.getTokens(CWScriptParser.Ident),
        COLON: ctx.getTokens(CWScriptParser.COLON),
        EQ1: ctx.getTokens(CWScriptParser.EQ1),
      };

      return new VarDeclASTNode('varDecl', ctx, rules, tokens);
    },
    destructuring: (ctx: DestructuringContext): DestructuringASTNode => {
      const opts = [
        ctx instanceof ArrayDestructuringContext && visit.ArrayDestructuring(ctx), 
        ctx instanceof TupleDestructuringContext && visit.TupleDestructuring(ctx), 
        ctx instanceof ObjectDestructuringContext && visit.ObjectDestructuring(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule destructuring");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule destructuring");

      return new DestructuringASTNode('destructuring', ctx, option);
    },
    ArrayDestructuring: (ctx: ArrayDestructuringContext): ArrayDestructuringASTNode => {
      const rules = {
        destructuring: ctx.getRuleContexts(DestructuringContext).map(item => visit.destructuring(item)),
      };

      const tokens = {
        LBRACK: ctx.getTokens(CWScriptParser.LBRACK),
        NL: ctx.getTokens(CWScriptParser.NL),
        Ident: ctx.getTokens(CWScriptParser.Ident),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        RBRACK: ctx.getTokens(CWScriptParser.RBRACK),
      };

      return new ArrayDestructuringASTNode('ArrayDestructuring', ctx, rules, tokens);
    },
    TupleDestructuring: (ctx: TupleDestructuringContext): TupleDestructuringASTNode => {
      const rules = {
        destructuring: ctx.getRuleContexts(DestructuringContext).map(item => visit.destructuring(item)),
      };

      const tokens = {
        LPAREN: ctx.getTokens(CWScriptParser.LPAREN),
        NL: ctx.getTokens(CWScriptParser.NL),
        Ident: ctx.getTokens(CWScriptParser.Ident),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        RPAREN: ctx.getTokens(CWScriptParser.RPAREN),
      };

      return new TupleDestructuringASTNode('TupleDestructuring', ctx, rules, tokens);
    },
    ObjectDestructuring: (ctx: ObjectDestructuringContext): ObjectDestructuringASTNode => {
      const rules = {
        destructuring: ctx.getRuleContexts(DestructuringContext).map(item => visit.destructuring(item)),
      };

      const tokens = {
        LBRACE: ctx.getTokens(CWScriptParser.LBRACE),
        NL: ctx.getTokens(CWScriptParser.NL),
        Ident: ctx.getTokens(CWScriptParser.Ident),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        RBRACE: ctx.getTokens(CWScriptParser.RBRACE),
      };

      return new ObjectDestructuringASTNode('ObjectDestructuring', ctx, rules, tokens);
    },
    globalFnDef: (ctx: GlobalFnDefContext): GlobalFnDefASTNode => {
      const rules = {
        nsIdent: ctx.getRuleContexts(NsIdentContext).map(item => visit.nsIdent(item)),
        fnSigArgs: ctx.getRuleContexts(FnSigArgsContext).map(item => visit.fnSigArgs(item)),
        fnSigRet: ctx.getRuleContexts(FnSigRetContext).map(item => visit.fnSigRet(item)),
        block: ctx.getRuleContexts(BlockContext).map(item => visit.block(item)),
      };

      const tokens = {
        EXEC: ctx.getTokens(CWScriptParser.EXEC),
        QUERY: ctx.getTokens(CWScriptParser.QUERY),
        FN: ctx.getTokens(CWScriptParser.FN),
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new GlobalFnDefASTNode('globalFnDef', ctx, rules, tokens);
    },
    methodDef: (ctx: MethodDefContext): MethodDefASTNode => {
      const opts = [
        ctx instanceof InstantiateMethodDefContext && visit.InstantiateMethodDef(ctx), 
        ctx instanceof SingleMethodDefContext && visit.SingleMethodDef(ctx), 
        ctx instanceof BlockMethodDefContext && visit.BlockMethodDef(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule methodDef");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule methodDef");

      return new MethodDefASTNode('methodDef', ctx, option);
    },
    InstantiateMethodDef: (ctx: InstantiateMethodDefContext): InstantiateMethodDefASTNode => {
      const rules = {
        nsIdent: ctx.getRuleContexts(NsIdentContext).map(item => visit.nsIdent(item)),
        fnSigArgs: ctx.getRuleContexts(FnSigArgsContext).map(item => visit.fnSigArgs(item)),
        fnSigRet: ctx.getRuleContexts(FnSigRetContext).map(item => visit.fnSigRet(item)),
        block: ctx.getRuleContexts(BlockContext).map(item => visit.block(item)),
      };

      const tokens = {
        INSTANTIATE: ctx.getTokens(CWScriptParser.INSTANTIATE),
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new InstantiateMethodDefASTNode('InstantiateMethodDef', ctx, rules, tokens);
    },
    SingleMethodDef: (ctx: SingleMethodDefContext): SingleMethodDefASTNode => {
      const rules = {
        blockFnDef: ctx.getRuleContexts(BlockFnDefContext).map(item => visit.blockFnDef(item)),
      };

      const tokens = {
        EXEC: ctx.getTokens(CWScriptParser.EXEC),
        QUERY: ctx.getTokens(CWScriptParser.QUERY),
        FN: ctx.getTokens(CWScriptParser.FN),
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new SingleMethodDefASTNode('SingleMethodDef', ctx, rules, tokens);
    },
    BlockMethodDef: (ctx: BlockMethodDefContext): BlockMethodDefASTNode => {
      const rules = {
        blockFnDef: ctx.getRuleContexts(BlockFnDefContext).map(item => visit.blockFnDef(item)),
        cmdsep: ctx.getRuleContexts(CmdsepContext).map(item => visit.cmdsep(item)),
      };

      const tokens = {
        EXEC: ctx.getTokens(CWScriptParser.EXEC),
        QUERY: ctx.getTokens(CWScriptParser.QUERY),
        NL: ctx.getTokens(CWScriptParser.NL),
        LBRACE: ctx.getTokens(CWScriptParser.LBRACE),
        RBRACE: ctx.getTokens(CWScriptParser.RBRACE),
      };

      return new BlockMethodDefASTNode('BlockMethodDef', ctx, rules, tokens);
    },
    blockFnDef: (ctx: BlockFnDefContext): BlockFnDefASTNode => {
      const rules = {
        fnName: ctx.getRuleContexts(FnNameContext).map(item => visit.fnName(item)),
        fnSigArgs: ctx.getRuleContexts(FnSigArgsContext).map(item => visit.fnSigArgs(item)),
        fnSigRet: ctx.getRuleContexts(FnSigRetContext).map(item => visit.fnSigRet(item)),
        block: ctx.getRuleContexts(BlockContext).map(item => visit.block(item)),
      };

      const tokens = {
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new BlockFnDefASTNode('blockFnDef', ctx, rules, tokens);
    },
    fnName: (ctx: FnNameContext): FnNameASTNode => {
      const opts = [
        ctx instanceof IdentFnNameContext && visit.IdentFnName(ctx), 
        ctx instanceof InstantiateFnNameContext && visit.InstantiateFnName(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule fnName");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule fnName");

      return new FnNameASTNode('fnName', ctx, option);
    },
    IdentFnName: (ctx: IdentFnNameContext): IdentFnNameASTNode => {
      const rules = {
        nsIdent: ctx.getRuleContexts(NsIdentContext).map(item => visit.nsIdent(item)),
      };

      const tokens = {
      };

      return new IdentFnNameASTNode('IdentFnName', ctx, rules, tokens);
    },
    InstantiateFnName: (ctx: InstantiateFnNameContext): InstantiateFnNameASTNode => {
      const rules = {
      };

      const tokens = {
        INSTANTIATE: ctx.getTokens(CWScriptParser.INSTANTIATE),
      };

      return new InstantiateFnNameASTNode('InstantiateFnName', ctx, rules, tokens);
    },
    fnSigArgs: (ctx: FnSigArgsContext): FnSigArgsASTNode => {
      const rules = {
        fnArg: ctx.getRuleContexts(FnArgContext).map(item => visit.fnArg(item)),
      };

      const tokens = {
        LPAREN: ctx.getTokens(CWScriptParser.LPAREN),
        NL: ctx.getTokens(CWScriptParser.NL),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        RPAREN: ctx.getTokens(CWScriptParser.RPAREN),
      };

      return new FnSigArgsASTNode('fnSigArgs', ctx, rules, tokens);
    },
    fnSigRet: (ctx: FnSigRetContext): FnSigRetASTNode => {
      const rules = {
        typeDecl: ctx.getRuleContexts(TypeDeclContext).map(item => visit.typeDecl(item)),
      };

      const tokens = {
        NL: ctx.getTokens(CWScriptParser.NL),
        SLIM_ARROW: ctx.getTokens(CWScriptParser.SLIM_ARROW),
      };

      return new FnSigRetASTNode('fnSigRet', ctx, rules, tokens);
    },
    fnArg: (ctx: FnArgContext): FnArgASTNode => {
      const rules = {
        nsIdent: ctx.getRuleContexts(NsIdentContext).map(item => visit.nsIdent(item)),
        typeDecl: ctx.getRuleContexts(TypeDeclContext).map(item => visit.typeDecl(item)),
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
      };

      const tokens = {
        NL: ctx.getTokens(CWScriptParser.NL),
        COLON: ctx.getTokens(CWScriptParser.COLON),
        EQ1: ctx.getTokens(CWScriptParser.EQ1),
      };

      return new FnArgASTNode('fnArg', ctx, rules, tokens);
    },
    contractDef: (ctx: ContractDefContext): ContractDefASTNode => {
      const rules = {
        contractBody: ctx.getRuleContexts(ContractBodyContext).map(item => visit.contractBody(item)),
        cmdsep: ctx.getRuleContexts(CmdsepContext).map(item => visit.cmdsep(item)),
      };

      const tokens = {
        CONTRACT: ctx.getTokens(CWScriptParser.CONTRACT),
        NL: ctx.getTokens(CWScriptParser.NL),
        Ident: ctx.getTokens(CWScriptParser.Ident),
        EXTENDS: ctx.getTokens(CWScriptParser.EXTENDS),
        IMPLEMENTS: ctx.getTokens(CWScriptParser.IMPLEMENTS),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        LBRACE: ctx.getTokens(CWScriptParser.LBRACE),
        RBRACE: ctx.getTokens(CWScriptParser.RBRACE),
      };

      return new ContractDefASTNode('contractDef', ctx, rules, tokens);
    },
    contractBody: (ctx: ContractBodyContext): ContractBodyASTNode => {
      const opts = [
        ctx instanceof EventContractBodyContext && visit.EventContractBody(ctx), 
        ctx instanceof ErrorContractBodyContext && visit.ErrorContractBody(ctx), 
        ctx instanceof StructureContractBodyContext && visit.StructureContractBody(ctx), 
        ctx instanceof StateContractBodyContext && visit.StateContractBody(ctx), 
        ctx instanceof MethodContractBodyContext && visit.MethodContractBody(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule contractBody");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule contractBody");

      return new ContractBodyASTNode('contractBody', ctx, option);
    },
    EventContractBody: (ctx: EventContractBodyContext): EventContractBodyASTNode => {
      const rules = {
        eventDef: ctx.getRuleContexts(EventDefContext).map(item => visit.eventDef(item)),
      };

      const tokens = {
      };

      return new EventContractBodyASTNode('EventContractBody', ctx, rules, tokens);
    },
    ErrorContractBody: (ctx: ErrorContractBodyContext): ErrorContractBodyASTNode => {
      const rules = {
        errorDef: ctx.getRuleContexts(ErrorDefContext).map(item => visit.errorDef(item)),
      };

      const tokens = {
      };

      return new ErrorContractBodyASTNode('ErrorContractBody', ctx, rules, tokens);
    },
    StructureContractBody: (ctx: StructureContractBodyContext): StructureContractBodyASTNode => {
      const rules = {
        structureDef: ctx.getRuleContexts(StructureDefContext).map(item => visit.structureDef(item)),
      };

      const tokens = {
      };

      return new StructureContractBodyASTNode('StructureContractBody', ctx, rules, tokens);
    },
    StateContractBody: (ctx: StateContractBodyContext): StateContractBodyASTNode => {
      const rules = {
        stateDef: ctx.getRuleContexts(StateDefContext).map(item => visit.stateDef(item)),
      };

      const tokens = {
      };

      return new StateContractBodyASTNode('StateContractBody', ctx, rules, tokens);
    },
    MethodContractBody: (ctx: MethodContractBodyContext): MethodContractBodyASTNode => {
      const rules = {
        methodDef: ctx.getRuleContexts(MethodDefContext).map(item => visit.methodDef(item)),
      };

      const tokens = {
      };

      return new MethodContractBodyASTNode('MethodContractBody', ctx, rules, tokens);
    },
    interfaceDef: (ctx: InterfaceDefContext): InterfaceDefASTNode => {
      const rules = {
        interfaceBody: ctx.getRuleContexts(InterfaceBodyContext).map(item => visit.interfaceBody(item)),
        cmdsep: ctx.getRuleContexts(CmdsepContext).map(item => visit.cmdsep(item)),
      };

      const tokens = {
        INTERFACE: ctx.getTokens(CWScriptParser.INTERFACE),
        NL: ctx.getTokens(CWScriptParser.NL),
        Ident: ctx.getTokens(CWScriptParser.Ident),
        EXTENDS: ctx.getTokens(CWScriptParser.EXTENDS),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
      };

      return new InterfaceDefASTNode('interfaceDef', ctx, rules, tokens);
    },
    interfaceBody: (ctx: InterfaceBodyContext): InterfaceBodyASTNode => {
      const opts = [
        ctx instanceof EventInterfaceBodyContext && visit.EventInterfaceBody(ctx), 
        ctx instanceof ErrorInterfaceBodyContext && visit.ErrorInterfaceBody(ctx), 
        ctx instanceof StructureInterfaceBodyContext && visit.StructureInterfaceBody(ctx), 
        ctx instanceof MethodInterfaceBodyContext && visit.MethodInterfaceBody(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule interfaceBody");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule interfaceBody");

      return new InterfaceBodyASTNode('interfaceBody', ctx, option);
    },
    EventInterfaceBody: (ctx: EventInterfaceBodyContext): EventInterfaceBodyASTNode => {
      const rules = {
        eventDef: ctx.getRuleContexts(EventDefContext).map(item => visit.eventDef(item)),
      };

      const tokens = {
      };

      return new EventInterfaceBodyASTNode('EventInterfaceBody', ctx, rules, tokens);
    },
    ErrorInterfaceBody: (ctx: ErrorInterfaceBodyContext): ErrorInterfaceBodyASTNode => {
      const rules = {
        errorDef: ctx.getRuleContexts(ErrorDefContext).map(item => visit.errorDef(item)),
      };

      const tokens = {
      };

      return new ErrorInterfaceBodyASTNode('ErrorInterfaceBody', ctx, rules, tokens);
    },
    StructureInterfaceBody: (ctx: StructureInterfaceBodyContext): StructureInterfaceBodyASTNode => {
      const rules = {
        structureDef: ctx.getRuleContexts(StructureDefContext).map(item => visit.structureDef(item)),
      };

      const tokens = {
      };

      return new StructureInterfaceBodyASTNode('StructureInterfaceBody', ctx, rules, tokens);
    },
    MethodInterfaceBody: (ctx: MethodInterfaceBodyContext): MethodInterfaceBodyASTNode => {
      const rules = {
        methodDef: ctx.getRuleContexts(MethodDefContext).map(item => visit.methodDef(item)),
      };

      const tokens = {
      };

      return new MethodInterfaceBodyASTNode('MethodInterfaceBody', ctx, rules, tokens);
    },
    structureDef: (ctx: StructureDefContext): StructureDefASTNode => {
      const rules = {
        typedIdent: ctx.getRuleContexts(TypedIdentContext).map(item => visit.typedIdent(item)),
      };

      const tokens = {
        STRUCT: ctx.getTokens(CWScriptParser.STRUCT),
        Ident: ctx.getTokens(CWScriptParser.Ident),
        LBRACE: ctx.getTokens(CWScriptParser.LBRACE),
        NL: ctx.getTokens(CWScriptParser.NL),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        RBRACE: ctx.getTokens(CWScriptParser.RBRACE),
      };

      return new StructureDefASTNode('structureDef', ctx, rules, tokens);
    },
    eventDef: (ctx: EventDefContext): EventDefASTNode => {
      const rules = {
        namedTupleType: ctx.getRuleContexts(NamedTupleTypeContext).map(item => visit.namedTupleType(item)),
      };

      const tokens = {
        EVENT: ctx.getTokens(CWScriptParser.EVENT),
        Ident: ctx.getTokens(CWScriptParser.Ident),
      };

      return new EventDefASTNode('eventDef', ctx, rules, tokens);
    },
    errorDef: (ctx: ErrorDefContext): ErrorDefASTNode => {
      const rules = {
        namedTupleType: ctx.getRuleContexts(NamedTupleTypeContext).map(item => visit.namedTupleType(item)),
      };

      const tokens = {
        ERROR: ctx.getTokens(CWScriptParser.ERROR),
        Ident: ctx.getTokens(CWScriptParser.Ident),
      };

      return new ErrorDefASTNode('errorDef', ctx, rules, tokens);
    },
    stateDef: (ctx: StateDefContext): StateDefASTNode => {
      const rules = {
        typedIdent: ctx.getRuleContexts(TypedIdentContext).map(item => visit.typedIdent(item)),
      };

      const tokens = {
        STATE: ctx.getTokens(CWScriptParser.STATE),
        LBRACE: ctx.getTokens(CWScriptParser.LBRACE),
        NL: ctx.getTokens(CWScriptParser.NL),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        SCOLON: ctx.getTokens(CWScriptParser.SCOLON),
        RBRACE: ctx.getTokens(CWScriptParser.RBRACE),
      };

      return new StateDefASTNode('stateDef', ctx, rules, tokens);
    },
    typeDecl: (ctx: TypeDeclContext): TypeDeclASTNode => {
      const opts = [
        ctx instanceof IdentTypeDeclContext && visit.IdentTypeDecl(ctx), 
        ctx instanceof TupleTypeDeclContext && visit.TupleTypeDecl(ctx), 
        ctx instanceof NamedTupleTypeDeclContext && visit.NamedTupleTypeDecl(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule typeDecl");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule typeDecl");

      return new TypeDeclASTNode('typeDecl', ctx, option);
    },
    IdentTypeDecl: (ctx: IdentTypeDeclContext): IdentTypeDeclASTNode => {
      const rules = {
      };

      const tokens = {
        Ident: ctx.getTokens(CWScriptParser.Ident),
      };

      return new IdentTypeDeclASTNode('IdentTypeDecl', ctx, rules, tokens);
    },
    TupleTypeDecl: (ctx: TupleTypeDeclContext): TupleTypeDeclASTNode => {
      const rules = {
      };

      const tokens = {
        LPAREN: ctx.getTokens(CWScriptParser.LPAREN),
        NL: ctx.getTokens(CWScriptParser.NL),
        Ident: ctx.getTokens(CWScriptParser.Ident),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        RPAREN: ctx.getTokens(CWScriptParser.RPAREN),
      };

      return new TupleTypeDeclASTNode('TupleTypeDecl', ctx, rules, tokens);
    },
    NamedTupleTypeDecl: (ctx: NamedTupleTypeDeclContext): NamedTupleTypeDeclASTNode => {
      const rules = {
        namedTupleType: ctx.getRuleContexts(NamedTupleTypeContext).map(item => visit.namedTupleType(item)),
      };

      const tokens = {
      };

      return new NamedTupleTypeDeclASTNode('NamedTupleTypeDecl', ctx, rules, tokens);
    },
    typedIdent: (ctx: TypedIdentContext): TypedIdentASTNode => {
      const rules = {
        typeDecl: ctx.getRuleContexts(TypeDeclContext).map(item => visit.typeDecl(item)),
      };

      const tokens = {
        Ident: ctx.getTokens(CWScriptParser.Ident),
        COLON: ctx.getTokens(CWScriptParser.COLON),
      };

      return new TypedIdentASTNode('typedIdent', ctx, rules, tokens);
    },
    namedTupleType: (ctx: NamedTupleTypeContext): NamedTupleTypeASTNode => {
      const rules = {
        typedIdent: ctx.getRuleContexts(TypedIdentContext).map(item => visit.typedIdent(item)),
      };

      const tokens = {
        LPAREN: ctx.getTokens(CWScriptParser.LPAREN),
        NL: ctx.getTokens(CWScriptParser.NL),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        RPAREN: ctx.getTokens(CWScriptParser.RPAREN),
      };

      return new NamedTupleTypeASTNode('namedTupleType', ctx, rules, tokens);
    },
    block: (ctx: BlockContext): BlockASTNode => {
      const rules = {
        cmdsep: ctx.getRuleContexts(CmdsepContext).map(item => visit.cmdsep(item)),
        exprx: ctx.getRuleContexts(ExprxContext).map(item => visit.exprx(item)),
      };

      const tokens = {
        NL: ctx.getTokens(CWScriptParser.NL),
        LBRACE: ctx.getTokens(CWScriptParser.LBRACE),
        RBRACE: ctx.getTokens(CWScriptParser.RBRACE),
      };

      return new BlockASTNode('block', ctx, rules, tokens);
    },
    forLoop: (ctx: ForLoopContext): ForLoopASTNode => {
      const rules = {
        varDecl: ctx.getRuleContexts(VarDeclContext).map(item => visit.varDecl(item)),
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
        scope: ctx.getRuleContexts(ScopeContext).map(item => visit.scope(item)),
      };

      const tokens = {
        FOR: ctx.getTokens(CWScriptParser.FOR),
        NL: ctx.getTokens(CWScriptParser.NL),
        IN: ctx.getTokens(CWScriptParser.IN),
      };

      return new ForLoopASTNode('forLoop', ctx, rules, tokens);
    },
    whileLoop: (ctx: WhileLoopContext): WhileLoopASTNode => {
      const rules = {
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
        scope: ctx.getRuleContexts(ScopeContext).map(item => visit.scope(item)),
      };

      const tokens = {
        WHILE: ctx.getTokens(CWScriptParser.WHILE),
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new WhileLoopASTNode('whileLoop', ctx, rules, tokens);
    },
    ifStmt: (ctx: IfStmtContext): IfStmtASTNode => {
      const rules = {
        expr: ctx.getRuleContexts(ExprContext).map(item => visit.expr(item)),
        scope: ctx.getRuleContexts(ScopeContext).map(item => visit.scope(item)),
      };

      const tokens = {
        IF: ctx.getTokens(CWScriptParser.IF),
        NL: ctx.getTokens(CWScriptParser.NL),
        ELSE: ctx.getTokens(CWScriptParser.ELSE),
      };

      return new IfStmtASTNode('ifStmt', ctx, rules, tokens);
    },
    sendStmt: (ctx: SendStmtContext): SendStmtASTNode => {
      const rules = {
        nsIdent: ctx.getRuleContexts(NsIdentContext).map(item => visit.nsIdent(item)),
        map: ctx.getRuleContexts(MapContext).map(item => visit.map(item)),
      };

      const tokens = {
        SEND: ctx.getTokens(CWScriptParser.SEND),
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new SendStmtASTNode('sendStmt', ctx, rules, tokens);
    },
    queryStmt: (ctx: QueryStmtContext): QueryStmtASTNode => {
      const rules = {
        nsIdent: ctx.getRuleContexts(NsIdentContext).map(item => visit.nsIdent(item)),
        map: ctx.getRuleContexts(MapContext).map(item => visit.map(item)),
      };

      const tokens = {
        QUERY: ctx.getTokens(CWScriptParser.QUERY),
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new QueryStmtASTNode('queryStmt', ctx, rules, tokens);
    },
    logStmt: (ctx: LogStmtContext): LogStmtASTNode => {
      const opts = [
        ctx instanceof AttributesLogStmtContext && visit.AttributesLogStmt(ctx), 
        ctx instanceof EventLogStmtContext && visit.EventLogStmt(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule logStmt");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule logStmt");

      return new LogStmtASTNode('logStmt', ctx, option);
    },
    AttributesLogStmt: (ctx: AttributesLogStmtContext): AttributesLogStmtASTNode => {
      const rules = {
        map: ctx.getRuleContexts(MapContext).map(item => visit.map(item)),
      };

      const tokens = {
        LOG: ctx.getTokens(CWScriptParser.LOG),
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new AttributesLogStmtASTNode('AttributesLogStmt', ctx, rules, tokens);
    },
    EventLogStmt: (ctx: EventLogStmtContext): EventLogStmtASTNode => {
      const rules = {
        createEventOrError: ctx.getRuleContexts(CreateEventOrErrorContext).map(item => visit.createEventOrError(item)),
      };

      const tokens = {
        LOG: ctx.getTokens(CWScriptParser.LOG),
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new EventLogStmtASTNode('EventLogStmt', ctx, rules, tokens);
    },
    failStmt: (ctx: FailStmtContext): FailStmtASTNode => {
      const opts = [
        ctx instanceof EmptyFailStmtContext && visit.EmptyFailStmt(ctx), 
        ctx instanceof ErrorFailStmtContext && visit.ErrorFailStmt(ctx), 
        ctx instanceof MessageFailStmtContext && visit.MessageFailStmt(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule failStmt");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule failStmt");

      return new FailStmtASTNode('failStmt', ctx, option);
    },
    EmptyFailStmt: (ctx: EmptyFailStmtContext): EmptyFailStmtASTNode => {
      const rules = {
      };

      const tokens = {
        FAIL: ctx.getTokens(CWScriptParser.FAIL),
      };

      return new EmptyFailStmtASTNode('EmptyFailStmt', ctx, rules, tokens);
    },
    ErrorFailStmt: (ctx: ErrorFailStmtContext): ErrorFailStmtASTNode => {
      const rules = {
        createEventOrError: ctx.getRuleContexts(CreateEventOrErrorContext).map(item => visit.createEventOrError(item)),
      };

      const tokens = {
        FAIL: ctx.getTokens(CWScriptParser.FAIL),
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new ErrorFailStmtASTNode('ErrorFailStmt', ctx, rules, tokens);
    },
    MessageFailStmt: (ctx: MessageFailStmtContext): MessageFailStmtASTNode => {
      const rules = {
        rval: ctx.getRuleContexts(RvalContext).map(item => visit.rval(item)),
      };

      const tokens = {
        FAIL: ctx.getTokens(CWScriptParser.FAIL),
        NL: ctx.getTokens(CWScriptParser.NL),
      };

      return new MessageFailStmtASTNode('MessageFailStmt', ctx, rules, tokens);
    },
    createEventOrError: (ctx: CreateEventOrErrorContext): CreateEventOrErrorASTNode => {
      const rules = {
        nsIdent: ctx.getRuleContexts(NsIdentContext).map(item => visit.nsIdent(item)),
        rval: ctx.getRuleContexts(RvalContext).map(item => visit.rval(item)),
      };

      const tokens = {
        LPAREN: ctx.getTokens(CWScriptParser.LPAREN),
        NL: ctx.getTokens(CWScriptParser.NL),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        RPAREN: ctx.getTokens(CWScriptParser.RPAREN),
      };

      return new CreateEventOrErrorASTNode('createEventOrError', ctx, rules, tokens);
    },
    literal: (ctx: LiteralContext): LiteralASTNode => {
      const opts = [
        ctx instanceof StringLiteralContext && visit.StringLiteral(ctx), 
        ctx instanceof NumberLiteralContext && visit.NumberLiteral(ctx), 
        ctx instanceof BooleanLiteralContext && visit.BooleanLiteral(ctx), 
        ctx instanceof ArrayLiteralContext && visit.ArrayLiteral(ctx), 
        ctx instanceof MapLiteralContext && visit.MapLiteral(ctx), 
        ctx instanceof TupleLiteralContext && visit.TupleLiteral(ctx)
      ].filter(ctx => Boolean(ctx)) as any[];
      if (opts.length > 1) throw Error("Multiple valid Options found for rule literal");

      const [option] = opts;
      if (!option) console.error("No valid Option found for rule literal");

      return new LiteralASTNode('literal', ctx, option);
    },
    StringLiteral: (ctx: StringLiteralContext): StringLiteralASTNode => {
      const rules = {
      };

      const tokens = {
        String: ctx.getTokens(CWScriptParser.String),
      };

      return new StringLiteralASTNode('StringLiteral', ctx, rules, tokens);
    },
    NumberLiteral: (ctx: NumberLiteralContext): NumberLiteralASTNode => {
      const rules = {
      };

      const tokens = {
        Number: ctx.getTokens(CWScriptParser.Number),
      };

      return new NumberLiteralASTNode('NumberLiteral', ctx, rules, tokens);
    },
    BooleanLiteral: (ctx: BooleanLiteralContext): BooleanLiteralASTNode => {
      const rules = {
      };

      const tokens = {
        TRUE: ctx.getTokens(CWScriptParser.TRUE),
        FALSE: ctx.getTokens(CWScriptParser.FALSE),
      };

      return new BooleanLiteralASTNode('BooleanLiteral', ctx, rules, tokens);
    },
    ArrayLiteral: (ctx: ArrayLiteralContext): ArrayLiteralASTNode => {
      const rules = {
        array: ctx.getRuleContexts(ArrayContext).map(item => visit.array(item)),
      };

      const tokens = {
      };

      return new ArrayLiteralASTNode('ArrayLiteral', ctx, rules, tokens);
    },
    MapLiteral: (ctx: MapLiteralContext): MapLiteralASTNode => {
      const rules = {
        map: ctx.getRuleContexts(MapContext).map(item => visit.map(item)),
      };

      const tokens = {
      };

      return new MapLiteralASTNode('MapLiteral', ctx, rules, tokens);
    },
    TupleLiteral: (ctx: TupleLiteralContext): TupleLiteralASTNode => {
      const rules = {
        tuple: ctx.getRuleContexts(TupleContext).map(item => visit.tuple(item)),
      };

      const tokens = {
      };

      return new TupleLiteralASTNode('TupleLiteral', ctx, rules, tokens);
    },
    array: (ctx: ArrayContext): ArrayASTNode => {
      const rules = {
        rval: ctx.getRuleContexts(RvalContext).map(item => visit.rval(item)),
      };

      const tokens = {
        LBRACK: ctx.getTokens(CWScriptParser.LBRACK),
        NL: ctx.getTokens(CWScriptParser.NL),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        RBRACK: ctx.getTokens(CWScriptParser.RBRACK),
      };

      return new ArrayASTNode('array', ctx, rules, tokens);
    },
    map: (ctx: MapContext): MapASTNode => {
      const rules = {
        mapField: ctx.getRuleContexts(MapFieldContext).map(item => visit.mapField(item)),
      };

      const tokens = {
        LBRACE: ctx.getTokens(CWScriptParser.LBRACE),
        NL: ctx.getTokens(CWScriptParser.NL),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        RBRACE: ctx.getTokens(CWScriptParser.RBRACE),
      };

      return new MapASTNode('map', ctx, rules, tokens);
    },
    mapField: (ctx: MapFieldContext): MapFieldASTNode => {
      const rules = {
        rval: ctx.getRuleContexts(RvalContext).map(item => visit.rval(item)),
      };

      const tokens = {
        Ident: ctx.getTokens(CWScriptParser.Ident),
        NL: ctx.getTokens(CWScriptParser.NL),
        COLON: ctx.getTokens(CWScriptParser.COLON),
      };

      return new MapFieldASTNode('mapField', ctx, rules, tokens);
    },
    tuple: (ctx: TupleContext): TupleASTNode => {
      const rules = {
        rval: ctx.getRuleContexts(RvalContext).map(item => visit.rval(item)),
      };

      const tokens = {
        LPAREN: ctx.getTokens(CWScriptParser.LPAREN),
        NL: ctx.getTokens(CWScriptParser.NL),
        COMMA: ctx.getTokens(CWScriptParser.COMMA),
        RPAREN: ctx.getTokens(CWScriptParser.RPAREN),
      };

      return new TupleASTNode('tuple', ctx, rules, tokens);
    },
  };
