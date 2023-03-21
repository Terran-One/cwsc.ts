parser grammar CWScriptParser;

options { tokenVocab = CWScriptLexer; }

program: (SHEBANG)? (cmdsep)* ((importDef (NL)* cmdsep (NL)*)* importDef (cmdsep)?)? ((root (NL)* cmdsep (NL)*)* root (cmdsep)?)? EOF;
cmdsep: ((NL | SCOLON))+;
importDef: IMPORT (((STAR)? AS Ident | LBRACE (NL)* namedImports (NL)* RBRACE | namedImports))? FROM String;
namedImport: Ident (AS Ident)?;
namedImports: namedImport (NL)* (COMMA (NL)* namedImport (NL)*)* (NL)* (COMMA)?;
root: 
	  <assoc=left> globalFnDef  # FunctionDefRoot
	| <assoc=left> structureDef # StructureDefRoot
	| <assoc=left> contractDef  # ContractDefRoot
	| <assoc=left> interfaceDef # InterfaceDefRoot;
expr: 
	  <assoc=left> LPAREN (NL)* expr (NL)* RPAREN                                         # GroupExpr
	| <assoc=right> expr (NL)* binaryOp (NL)* expr                                        # BinaryOpExpr
	| <assoc=right> Ident (NL)* EQ1 ASSIGNOP (NL)* expr                                   # AssignExpr
	| <assoc=left> expr LPAREN (NL)* (rval (NL)* COMMA (NL)*)* rval (COMMA)? (NL)* RPAREN # CallParenExpr
	| <assoc=left> unaryPreOp expr                                                        # UnaryPreOpExpr
	| <assoc=left> expr unaryPostOp                                                       # UnaryPostOpExpr
	| <assoc=left> expr LBRACK (NL)* expr (NL)* RBRACK                                    # SubscriptExpr
	| <assoc=left> expr ((NL)* DOT1 (NL)* Ident)+                                         # PropExpr
	| <assoc=left> stateIdent (EQ1 | ASSIGNOP) rval                                       # StateWriteExpr
	| <assoc=left> stateIdent                                                             # StateReadExpr
	| <assoc=left> literal                                                                # LiteralExpr
	| <assoc=left> nsIdent                                                                # IdentExpr;
exprx: 
	  <assoc=left> expr                 # ExprExprx
	| <assoc=left> let                  # LetExprx
	| <assoc=left> ifStmt               # IfExprx
	| <assoc=left> block                # BlockExprx
	| <assoc=left> forLoop              # ForLoopExpr
	| <assoc=left> whileLoop            # WhileLoopExpr
	| <assoc=left> sendStmt             # SendExprx
	| <assoc=left> logStmt              # LogExprx
	| <assoc=left> failStmt             # FailExprx
	| <assoc=left> RETURN ((NL)* rval)? # ReturnExpr;
scope: 
	  <assoc=left> expr  # ExprScope
	| <assoc=left> block # BlockScope;
rval: 
	  <assoc=left> ifStmt # IfRVal
	| <assoc=left> expr   # ExprRVal;
binaryOp: (PLUS | DASH | SLASH | STAR | PERCENT | EQ2 | NEQ | LT | LTE | GT | GTE | AMP2 | PIPE2 | QUESTION2);
unaryPreOp: (PLUS2 | DASH2 | BANG);
unaryPostOp: (PLUS2 | DASH2 | QUESTION1 | BANG);
nsIdent: (COLON2)? (NL)* Ident ((NL)* COLON2 (NL)* Ident)*;
stateIdent: STATE ((NL)* DOT1 (NL)* Ident)+;
let: LET (NL)* (varDecl (NL)* COLON (NL)*)* varDecl;
varDecl: (Ident COLON typeDecl | (Ident | destructuring) EQ1 (expr | queryStmt));
destructuring: 
	  <assoc=left> LBRACK (NL)* (((Ident | destructuring) (NL)* COMMA (NL)*)* (Ident | destructuring) (COMMA)?)? (NL)* RBRACK # ArrayDestructuring
	| <assoc=left> LPAREN (NL)* (((Ident | destructuring) (NL)* COMMA (NL)*)* (Ident | destructuring) (COMMA)?)? (NL)* RPAREN # TupleDestructuring
	| <assoc=left> LBRACE (NL)* (((Ident | destructuring) (NL)* COMMA (NL)*)* (Ident | destructuring) (COMMA)?)? (NL)* RBRACE # ObjectDestructuring;
globalFnDef: kind=(EXEC | QUERY | FN) (NL)* name=nsIdent (NL)* fnSigArgs (NL)* fnSigRet (NL)* block;
methodDef: 
	  <assoc=left> INSTANTIATE ((NL)* nsIdent)? (NL)* fnSigArgs ((NL)* fnSigRet)? (NL)* block                                   # InstantiateMethodDef
	| <assoc=left> kind=(EXEC | QUERY | FN) (NL)* blockFnDef                                                                    # SingleMethodDef
	| <assoc=left> kind=(EXEC | QUERY) (NL)* LBRACE (NL)* ((blockFnDef (NL)* cmdsep (NL)*)* blockFnDef (cmdsep)?)? (NL)* RBRACE # BlockMethodDef;
blockFnDef: fnName (NL)* fnSigArgs (NL)* ((NL)* fnSigRet)? (NL)* block;
fnName: 
	  <assoc=left> nsIdent     # IdentFnName
	| <assoc=left> INSTANTIATE # InstantiateFnName;
fnSigArgs: LPAREN (NL)* ((fnArg (NL)* COMMA (NL)*)* fnArg (COMMA)?)? (NL)* (COMMA)? (NL)* RPAREN;
fnSigRet: (NL)* SLIM_ARROW (NL)* typeDecl;
fnArg: nsIdent ((NL)* COLON (NL)* typeDecl)? ((NL)* EQ1 (NL)* expr)?;
contractDef: CONTRACT (NL)* contractName=Ident (NL)* (EXTENDS (NL)* baseContract=Ident)? (NL)* (IMPLEMENTS (NL)* (baseInterface+=Ident (NL)* COMMA (NL)*)* baseInterface+=Ident)? (NL)* LBRACE (NL)* ((contractBody (NL)* cmdsep (NL)*)* contractBody (cmdsep)?)? (NL)* RBRACE;
contractBody: 
	  <assoc=left> eventDef     # EventContractBody
	| <assoc=left> errorDef     # ErrorContractBody
	| <assoc=left> structureDef # StructureContractBody
	| <assoc=left> stateDef     # StateContractBody
	| <assoc=left> methodDef    # MethodContractBody;
interfaceDef: INTERFACE (NL)* interfaceName=Ident (NL)* (EXTENDS (NL)* (baseInterface+=Ident (NL)* COMMA (NL)*)* baseInterface+=Ident)? (NL)* ((interfaceBody (NL)* cmdsep (NL)*)* interfaceBody (cmdsep)?)?;
interfaceBody: 
	  <assoc=left> eventDef     # EventInterfaceBody
	| <assoc=left> errorDef     # ErrorInterfaceBody
	| <assoc=left> structureDef # StructureInterfaceBody
	| <assoc=left> methodDef    # MethodInterfaceBody;
structureDef: STRUCT Ident LBRACE (NL)* ((typedIdent (NL)* COMMA (NL)*)* typedIdent (COMMA)?)? (NL)* RBRACE;
eventDef: EVENT Ident namedTupleType;
errorDef: ERROR Ident namedTupleType;
stateDef: STATE (LBRACE (NL)* (((typedIdent (NL)* COMMA (NL)*)* typedIdent (COMMA)? | (typedIdent (NL)* SCOLON (NL)*)* typedIdent (SCOLON)? | (typedIdent (NL)* NL (NL)*)* typedIdent (NL)?))? (NL)* RBRACE | typedIdent);
typeDecl: 
	  <assoc=left> Ident                                                                                  # IdentTypeDecl
	| <assoc=left> LPAREN (NL)* (((Ident (NL)* COMMA (NL)*)* Ident (COMMA)? | Ident COMMA))? (NL)* RPAREN # TupleTypeDecl
	| <assoc=left> namedTupleType                                                                         # NamedTupleTypeDecl;
typedIdent: Ident COLON typeDecl;
namedTupleType: LPAREN (NL)* (typedIdent (NL)* COMMA (NL)*)* typedIdent (COMMA)? (NL)* RPAREN;
block: (NL)* LBRACE (cmdsep)* ((exprx (NL)* cmdsep (NL)*)* exprx (cmdsep)?)? RBRACE;
forLoop: FOR (NL)* varDecl (NL)* IN (NL)* expr (NL)* (NL)* (NL)* scope;
whileLoop: WHILE (NL)* expr (NL)* scope;
ifStmt: IF (NL)* condition+=expr (NL)* ifBranch=scope (NL)* (ELSE (NL)* IF (NL)* condition+=expr (NL)* elseifBranch+=scope)* (NL)* (ELSE (NL)* elseBranch=scope)?;
sendStmt: SEND (NL)* nsIdent (NL)* map;
queryStmt: QUERY (NL)* nsIdent (NL)* map;
logStmt: 
	  <assoc=left> LOG (NL)* map                # AttributesLogStmt
	| <assoc=left> LOG (NL)* createEventOrError # EventLogStmt;
failStmt: 
	  <assoc=left> FAIL                          # EmptyFailStmt
	| <assoc=left> FAIL (NL)* createEventOrError # ErrorFailStmt
	| <assoc=left> FAIL (NL)* rval               # MessageFailStmt;
createEventOrError: nsIdent LPAREN (NL)* ((rval (NL)* COMMA (NL)*)* rval (COMMA)?)? (NL)* RPAREN;
literal: 
	  <assoc=left> String         # StringLiteral
	| <assoc=left> Number         # NumberLiteral
	| <assoc=left> (TRUE | FALSE) # BooleanLiteral
	| <assoc=left> array          # ArrayLiteral
	| <assoc=left> map            # MapLiteral
	| <assoc=left> tuple          # TupleLiteral;
array: LBRACK (NL)* ((rval (NL)* COMMA (NL)*)* rval (COMMA)?)? (NL)* RBRACK;
map: LBRACE (NL)* ((mapField (NL)* COMMA (NL)*)* mapField (COMMA)?)? (NL)* RBRACE;
mapField: Ident ((NL)* COLON (NL)* rval)?;
tuple: LPAREN (NL)* ((rval (NL)* COMMA | rval (NL)* (COMMA (NL)* rval (NL)*)+ (NL)* (COMMA)?))? (NL)* RPAREN;
