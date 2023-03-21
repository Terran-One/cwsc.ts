// Generated from generated/antlr/CWScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CWScriptParser extends Parser {
	public static readonly SHEBANG = 1;
	public static readonly Comment = 2;
	public static readonly BlockComment = 3;
	public static readonly IMPORT = 4;
	public static readonly FROM = 5;
	public static readonly AS = 6;
	public static readonly IF = 7;
	public static readonly ELSE = 8;
	public static readonly IN = 9;
	public static readonly LET = 10;
	public static readonly TRUE = 11;
	public static readonly FALSE = 12;
	public static readonly FOR = 13;
	public static readonly WHILE = 14;
	public static readonly RETURN = 15;
	public static readonly LPAREN = 16;
	public static readonly RPAREN = 17;
	public static readonly LBRACE = 18;
	public static readonly RBRACE = 19;
	public static readonly LBRACK = 20;
	public static readonly RBRACK = 21;
	public static readonly COLON2 = 22;
	public static readonly COLON = 23;
	public static readonly SCOLON = 24;
	public static readonly COMMA = 25;
	public static readonly AMP2 = 26;
	public static readonly PIPE2 = 27;
	public static readonly SLIM_ARROW = 28;
	public static readonly EQ2 = 29;
	public static readonly EQ1 = 30;
	public static readonly NEQ = 31;
	public static readonly LTE = 32;
	public static readonly LT = 33;
	public static readonly GTE = 34;
	public static readonly GT = 35;
	public static readonly ASSIGNOP = 36;
	public static readonly PLUS2 = 37;
	public static readonly PLUS = 38;
	public static readonly DASH2 = 39;
	public static readonly DASH = 40;
	public static readonly STAR = 41;
	public static readonly BANG = 42;
	public static readonly QUESTION2 = 43;
	public static readonly QUESTION1 = 44;
	public static readonly SLASH = 45;
	public static readonly PERCENT = 46;
	public static readonly FN = 47;
	public static readonly INSTANTIATE = 48;
	public static readonly EXEC = 49;
	public static readonly QUERY = 50;
	public static readonly CONTRACT = 51;
	public static readonly EVENT = 52;
	public static readonly STRUCT = 53;
	public static readonly ENUM = 54;
	public static readonly INTERFACE = 55;
	public static readonly IMPLEMENTS = 56;
	public static readonly EXTENDS = 57;
	public static readonly SEND = 58;
	public static readonly LOG = 59;
	public static readonly FAIL = 60;
	public static readonly STATE = 61;
	public static readonly ERROR = 62;
	public static readonly Number = 63;
	public static readonly Ident = 64;
	public static readonly DOT3 = 65;
	public static readonly DOT2 = 66;
	public static readonly DOT1 = 67;
	public static readonly WS = 68;
	public static readonly NL = 69;
	public static readonly String = 70;
	public static readonly EscapeSequence = 71;
	public static readonly RULE_program = 0;
	public static readonly RULE_cmdsep = 1;
	public static readonly RULE_importDef = 2;
	public static readonly RULE_namedImport = 3;
	public static readonly RULE_namedImports = 4;
	public static readonly RULE_root = 5;
	public static readonly RULE_expr = 6;
	public static readonly RULE_exprx = 7;
	public static readonly RULE_scope = 8;
	public static readonly RULE_rval = 9;
	public static readonly RULE_binaryOp = 10;
	public static readonly RULE_unaryPreOp = 11;
	public static readonly RULE_unaryPostOp = 12;
	public static readonly RULE_nsIdent = 13;
	public static readonly RULE_stateIdent = 14;
	public static readonly RULE_let = 15;
	public static readonly RULE_varDecl = 16;
	public static readonly RULE_destructuring = 17;
	public static readonly RULE_globalFnDef = 18;
	public static readonly RULE_methodDef = 19;
	public static readonly RULE_blockFnDef = 20;
	public static readonly RULE_fnName = 21;
	public static readonly RULE_fnSigArgs = 22;
	public static readonly RULE_fnSigRet = 23;
	public static readonly RULE_fnArg = 24;
	public static readonly RULE_contractDef = 25;
	public static readonly RULE_contractBody = 26;
	public static readonly RULE_interfaceDef = 27;
	public static readonly RULE_interfaceBody = 28;
	public static readonly RULE_structureDef = 29;
	public static readonly RULE_eventDef = 30;
	public static readonly RULE_errorDef = 31;
	public static readonly RULE_stateDef = 32;
	public static readonly RULE_typeDecl = 33;
	public static readonly RULE_typedIdent = 34;
	public static readonly RULE_namedTupleType = 35;
	public static readonly RULE_block = 36;
	public static readonly RULE_forLoop = 37;
	public static readonly RULE_whileLoop = 38;
	public static readonly RULE_ifStmt = 39;
	public static readonly RULE_sendStmt = 40;
	public static readonly RULE_queryStmt = 41;
	public static readonly RULE_logStmt = 42;
	public static readonly RULE_failStmt = 43;
	public static readonly RULE_createEventOrError = 44;
	public static readonly RULE_literal = 45;
	public static readonly RULE_array = 46;
	public static readonly RULE_map = 47;
	public static readonly RULE_mapField = 48;
	public static readonly RULE_tuple = 49;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "cmdsep", "importDef", "namedImport", "namedImports", "root", 
		"expr", "exprx", "scope", "rval", "binaryOp", "unaryPreOp", "unaryPostOp", 
		"nsIdent", "stateIdent", "let", "varDecl", "destructuring", "globalFnDef", 
		"methodDef", "blockFnDef", "fnName", "fnSigArgs", "fnSigRet", "fnArg", 
		"contractDef", "contractBody", "interfaceDef", "interfaceBody", "structureDef", 
		"eventDef", "errorDef", "stateDef", "typeDecl", "typedIdent", "namedTupleType", 
		"block", "forLoop", "whileLoop", "ifStmt", "sendStmt", "queryStmt", "logStmt", 
		"failStmt", "createEventOrError", "literal", "array", "map", "mapField", 
		"tuple",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'import'", "'from'", "'as'", 
		"'if'", "'else'", "'in'", "'let'", "'true'", "'false'", "'for'", "'while'", 
		"'return'", "'('", "')'", "'{'", "'}'", "'['", "']'", "'::'", "':'", "';'", 
		"','", "'&&'", "'||'", "'->'", "'=='", "'='", "'!='", "'<='", "'<'", "'>='", 
		"'>'", undefined, "'++'", "'+'", "'--'", "'-'", "'*'", "'!'", "'??'", 
		"'?'", "'/'", "'%'", "'fn'", "'instantiate'", "'exec'", "'query'", "'contract'", 
		"'event'", "'struct'", "'enum'", "'interface'", "'implements'", "'extends'", 
		"'send'", "'log'", "'fail'", "'state'", "'error'", undefined, undefined, 
		"'...'", "'..'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SHEBANG", "Comment", "BlockComment", "IMPORT", "FROM", "AS", 
		"IF", "ELSE", "IN", "LET", "TRUE", "FALSE", "FOR", "WHILE", "RETURN", 
		"LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "COLON2", 
		"COLON", "SCOLON", "COMMA", "AMP2", "PIPE2", "SLIM_ARROW", "EQ2", "EQ1", 
		"NEQ", "LTE", "LT", "GTE", "GT", "ASSIGNOP", "PLUS2", "PLUS", "DASH2", 
		"DASH", "STAR", "BANG", "QUESTION2", "QUESTION1", "SLASH", "PERCENT", 
		"FN", "INSTANTIATE", "EXEC", "QUERY", "CONTRACT", "EVENT", "STRUCT", "ENUM", 
		"INTERFACE", "IMPLEMENTS", "EXTENDS", "SEND", "LOG", "FAIL", "STATE", 
		"ERROR", "Number", "Ident", "DOT3", "DOT2", "DOT1", "WS", "NL", "String", 
		"EscapeSequence",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CWScriptParser._LITERAL_NAMES, CWScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CWScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CWScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CWScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CWScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CWScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CWScriptParser.RULE_program);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.SHEBANG) {
				{
				this.state = 100;
				this.match(CWScriptParser.SHEBANG);
				}
			}

			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.SCOLON || _la === CWScriptParser.NL) {
				{
				{
				this.state = 103;
				this.cmdsep();
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPORT) {
				{
				this.state = 125;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 109;
						this.importDef();
						this.state = 113;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 110;
								this.match(CWScriptParser.NL);
								}
								}
							}
							this.state = 115;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
						}
						this.state = 116;
						this.cmdsep();
						this.state = 120;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 117;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 122;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 127;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
				this.state = 128;
				this.importDef();
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SCOLON || _la === CWScriptParser.NL) {
					{
					this.state = 129;
					this.cmdsep();
					}
				}

				}
			}

			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (CWScriptParser.FN - 47)) | (1 << (CWScriptParser.EXEC - 47)) | (1 << (CWScriptParser.QUERY - 47)) | (1 << (CWScriptParser.CONTRACT - 47)) | (1 << (CWScriptParser.STRUCT - 47)) | (1 << (CWScriptParser.INTERFACE - 47)))) !== 0)) {
				{
				this.state = 150;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 134;
						this.root();
						this.state = 138;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 135;
								this.match(CWScriptParser.NL);
								}
								}
							}
							this.state = 140;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
						}
						this.state = 141;
						this.cmdsep();
						this.state = 145;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 142;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 147;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 152;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				}
				this.state = 153;
				this.root();
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SCOLON || _la === CWScriptParser.NL) {
					{
					this.state = 154;
					this.cmdsep();
					}
				}

				}
			}

			this.state = 159;
			this.match(CWScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdsep(): CmdsepContext {
		let _localctx: CmdsepContext = new CmdsepContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CWScriptParser.RULE_cmdsep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 161;
					_la = this._input.LA(1);
					if (!(_la === CWScriptParser.SCOLON || _la === CWScriptParser.NL)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 164;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDef(): ImportDefContext {
		let _localctx: ImportDefContext = new ImportDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CWScriptParser.RULE_importDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(CWScriptParser.IMPORT);
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.AS || _la === CWScriptParser.LBRACE || _la === CWScriptParser.STAR || _la === CWScriptParser.Ident) {
				{
				this.state = 189;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CWScriptParser.AS:
				case CWScriptParser.STAR:
					{
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CWScriptParser.STAR) {
						{
						this.state = 167;
						this.match(CWScriptParser.STAR);
						}
					}

					this.state = 170;
					this.match(CWScriptParser.AS);
					this.state = 171;
					this.match(CWScriptParser.Ident);
					}
					break;
				case CWScriptParser.LBRACE:
					{
					this.state = 172;
					this.match(CWScriptParser.LBRACE);
					this.state = 176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 173;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 178;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 179;
					this.namedImports();
					this.state = 183;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 180;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 185;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 186;
					this.match(CWScriptParser.RBRACE);
					}
					break;
				case CWScriptParser.Ident:
					{
					this.state = 188;
					this.namedImports();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			this.state = 193;
			this.match(CWScriptParser.FROM);
			this.state = 194;
			this.match(CWScriptParser.String);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedImport(): NamedImportContext {
		let _localctx: NamedImportContext = new NamedImportContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CWScriptParser.RULE_namedImport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(CWScriptParser.Ident);
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.AS) {
				{
				this.state = 197;
				this.match(CWScriptParser.AS);
				this.state = 198;
				this.match(CWScriptParser.Ident);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedImports(): NamedImportsContext {
		let _localctx: NamedImportsContext = new NamedImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CWScriptParser.RULE_namedImports);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.namedImport();
			this.state = 205;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 202;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 224;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 208;
					this.match(CWScriptParser.COMMA);
					this.state = 212;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 209;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 214;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 215;
					this.namedImport();
					this.state = 219;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 216;
							this.match(CWScriptParser.NL);
							}
							}
						}
						this.state = 221;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
					}
					}
					}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 230;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 227;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 233;
				this.match(CWScriptParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CWScriptParser.RULE_root);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.FN:
			case CWScriptParser.EXEC:
			case CWScriptParser.QUERY:
				_localctx = new FunctionDefRootContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 236;
				this.globalFnDef();
				}
				break;
			case CWScriptParser.STRUCT:
				_localctx = new StructureDefRootContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 237;
				this.structureDef();
				}
				break;
			case CWScriptParser.CONTRACT:
				_localctx = new ContractDefRootContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 238;
				this.contractDef();
				}
				break;
			case CWScriptParser.INTERFACE:
				_localctx = new InterfaceDefRootContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 239;
				this.interfaceDef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, CWScriptParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 243;
				this.match(CWScriptParser.LPAREN);
				this.state = 247;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 244;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 249;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 250;
				this.expr(0);
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 251;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 256;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 257;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new AssignExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 259;
				this.match(CWScriptParser.Ident);
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 260;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 265;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 266;
				this.match(CWScriptParser.EQ1);
				this.state = 267;
				this.match(CWScriptParser.ASSIGNOP);
				this.state = 271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 268;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 273;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				}
				this.state = 274;
				this.expr(10);
				}
				break;

			case 3:
				{
				_localctx = new UnaryPreOpExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 275;
				this.unaryPreOp();
				this.state = 276;
				this.expr(8);
				}
				break;

			case 4:
				{
				_localctx = new StateWriteExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 278;
				this.stateIdent();
				this.state = 279;
				_la = this._input.LA(1);
				if (!(_la === CWScriptParser.EQ1 || _la === CWScriptParser.ASSIGNOP)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 280;
				this.rval();
				}
				break;

			case 5:
				{
				_localctx = new StateReadExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 282;
				this.stateIdent();
				}
				break;

			case 6:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 283;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new IdentExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 284;
				this.nsIdent();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 382;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 380;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
					case 1:
						{
						_localctx = new BinaryOpExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 287;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 291;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 288;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 293;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 294;
						this.binaryOp();
						this.state = 298;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 295;
								this.match(CWScriptParser.NL);
								}
								}
							}
							this.state = 300;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
						}
						this.state = 301;
						this.expr(11);
						}
						break;

					case 2:
						{
						_localctx = new CallParenExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 303;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 304;
						this.match(CWScriptParser.LPAREN);
						this.state = 308;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 305;
								this.match(CWScriptParser.NL);
								}
								}
							}
							this.state = 310;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
						}
						this.state = 327;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 311;
								this.rval();
								this.state = 315;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === CWScriptParser.NL) {
									{
									{
									this.state = 312;
									this.match(CWScriptParser.NL);
									}
									}
									this.state = 317;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 318;
								this.match(CWScriptParser.COMMA);
								this.state = 322;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
										{
										this.state = 319;
										this.match(CWScriptParser.NL);
										}
										}
									}
									this.state = 324;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
								}
								}
								}
							}
							this.state = 329;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
						}
						this.state = 330;
						this.rval();
						this.state = 332;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.COMMA) {
							{
							this.state = 331;
							this.match(CWScriptParser.COMMA);
							}
						}

						this.state = 337;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 334;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 339;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 340;
						this.match(CWScriptParser.RPAREN);
						}
						break;

					case 3:
						{
						_localctx = new UnaryPostOpExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 342;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 343;
						this.unaryPostOp();
						}
						break;

					case 4:
						{
						_localctx = new SubscriptExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 344;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 345;
						this.match(CWScriptParser.LBRACK);
						this.state = 349;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 346;
								this.match(CWScriptParser.NL);
								}
								}
							}
							this.state = 351;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
						}
						this.state = 352;
						this.expr(0);
						this.state = 356;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 353;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 358;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 359;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 5:
						{
						_localctx = new PropExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 361;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 376;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 365;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === CWScriptParser.NL) {
									{
									{
									this.state = 362;
									this.match(CWScriptParser.NL);
									}
									}
									this.state = 367;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 368;
								this.match(CWScriptParser.DOT1);
								this.state = 372;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === CWScriptParser.NL) {
									{
									{
									this.state = 369;
									this.match(CWScriptParser.NL);
									}
									}
									this.state = 374;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 375;
								this.match(CWScriptParser.Ident);
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 378;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					}
					}
				}
				this.state = 384;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprx(): ExprxContext {
		let _localctx: ExprxContext = new ExprxContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CWScriptParser.RULE_exprx);
		try {
			let _alt: number;
			this.state = 404;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				_localctx = new ExprExprxContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 385;
				this.expr(0);
				}
				break;

			case 2:
				_localctx = new LetExprxContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 386;
				this.let();
				}
				break;

			case 3:
				_localctx = new IfExprxContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 387;
				this.ifStmt();
				}
				break;

			case 4:
				_localctx = new BlockExprxContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 388;
				this.block();
				}
				break;

			case 5:
				_localctx = new ForLoopExprContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 389;
				this.forLoop();
				}
				break;

			case 6:
				_localctx = new WhileLoopExprContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 390;
				this.whileLoop();
				}
				break;

			case 7:
				_localctx = new SendExprxContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 391;
				this.sendStmt();
				}
				break;

			case 8:
				_localctx = new LogExprxContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 392;
				this.logStmt();
				}
				break;

			case 9:
				_localctx = new FailExprxContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 393;
				this.failStmt();
				}
				break;

			case 10:
				_localctx = new ReturnExprContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 394;
				this.match(CWScriptParser.RETURN);
				this.state = 402;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 398;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 395;
							this.match(CWScriptParser.NL);
							}
							}
						}
						this.state = 400;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
					}
					this.state = 401;
					this.rval();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scope(): ScopeContext {
		let _localctx: ScopeContext = new ScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CWScriptParser.RULE_scope);
		try {
			this.state = 408;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				_localctx = new ExprScopeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 406;
				this.expr(0);
				}
				break;

			case 2:
				_localctx = new BlockScopeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 407;
				this.block();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rval(): RvalContext {
		let _localctx: RvalContext = new RvalContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CWScriptParser.RULE_rval);
		try {
			this.state = 412;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.IF:
				_localctx = new IfRValContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 410;
				this.ifStmt();
				}
				break;
			case CWScriptParser.TRUE:
			case CWScriptParser.FALSE:
			case CWScriptParser.LPAREN:
			case CWScriptParser.LBRACE:
			case CWScriptParser.LBRACK:
			case CWScriptParser.COLON2:
			case CWScriptParser.PLUS2:
			case CWScriptParser.DASH2:
			case CWScriptParser.BANG:
			case CWScriptParser.STATE:
			case CWScriptParser.Number:
			case CWScriptParser.Ident:
			case CWScriptParser.NL:
			case CWScriptParser.String:
				_localctx = new ExprRValContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 411;
				this.expr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryOp(): BinaryOpContext {
		let _localctx: BinaryOpContext = new BinaryOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CWScriptParser.RULE_binaryOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			_la = this._input.LA(1);
			if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (CWScriptParser.AMP2 - 26)) | (1 << (CWScriptParser.PIPE2 - 26)) | (1 << (CWScriptParser.EQ2 - 26)) | (1 << (CWScriptParser.NEQ - 26)) | (1 << (CWScriptParser.LTE - 26)) | (1 << (CWScriptParser.LT - 26)) | (1 << (CWScriptParser.GTE - 26)) | (1 << (CWScriptParser.GT - 26)) | (1 << (CWScriptParser.PLUS - 26)) | (1 << (CWScriptParser.DASH - 26)) | (1 << (CWScriptParser.STAR - 26)) | (1 << (CWScriptParser.QUESTION2 - 26)) | (1 << (CWScriptParser.SLASH - 26)) | (1 << (CWScriptParser.PERCENT - 26)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryPreOp(): UnaryPreOpContext {
		let _localctx: UnaryPreOpContext = new UnaryPreOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CWScriptParser.RULE_unaryPreOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			_la = this._input.LA(1);
			if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (CWScriptParser.PLUS2 - 37)) | (1 << (CWScriptParser.DASH2 - 37)) | (1 << (CWScriptParser.BANG - 37)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryPostOp(): UnaryPostOpContext {
		let _localctx: UnaryPostOpContext = new UnaryPostOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CWScriptParser.RULE_unaryPostOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			_la = this._input.LA(1);
			if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (CWScriptParser.PLUS2 - 37)) | (1 << (CWScriptParser.DASH2 - 37)) | (1 << (CWScriptParser.BANG - 37)) | (1 << (CWScriptParser.QUESTION1 - 37)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nsIdent(): NsIdentContext {
		let _localctx: NsIdentContext = new NsIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CWScriptParser.RULE_nsIdent);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON2) {
				{
				this.state = 420;
				this.match(CWScriptParser.COLON2);
				}
			}

			this.state = 426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 423;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 429;
			this.match(CWScriptParser.Ident);
			this.state = 446;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 433;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 430;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 435;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 436;
					this.match(CWScriptParser.COLON2);
					this.state = 440;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 437;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 442;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 443;
					this.match(CWScriptParser.Ident);
					}
					}
				}
				this.state = 448;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateIdent(): StateIdentContext {
		let _localctx: StateIdentContext = new StateIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CWScriptParser.RULE_stateIdent);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.match(CWScriptParser.STATE);
			this.state = 464;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 453;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 450;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 455;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 456;
					this.match(CWScriptParser.DOT1);
					this.state = 460;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 457;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 462;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 463;
					this.match(CWScriptParser.Ident);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 466;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public let(): LetContext {
		let _localctx: LetContext = new LetContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CWScriptParser.RULE_let);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.match(CWScriptParser.LET);
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 469;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 491;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 475;
					this.varDecl();
					this.state = 479;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 476;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 481;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 482;
					this.match(CWScriptParser.COLON);
					this.state = 486;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 483;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 488;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
				}
				this.state = 493;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			}
			this.state = 494;
			this.varDecl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CWScriptParser.RULE_varDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 496;
				this.match(CWScriptParser.Ident);
				this.state = 497;
				this.match(CWScriptParser.COLON);
				this.state = 498;
				this.typeDecl();
				}
				break;

			case 2:
				{
				this.state = 501;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CWScriptParser.Ident:
					{
					this.state = 499;
					this.match(CWScriptParser.Ident);
					}
					break;
				case CWScriptParser.LPAREN:
				case CWScriptParser.LBRACE:
				case CWScriptParser.LBRACK:
					{
					this.state = 500;
					this.destructuring();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 503;
				this.match(CWScriptParser.EQ1);
				this.state = 506;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CWScriptParser.TRUE:
				case CWScriptParser.FALSE:
				case CWScriptParser.LPAREN:
				case CWScriptParser.LBRACE:
				case CWScriptParser.LBRACK:
				case CWScriptParser.COLON2:
				case CWScriptParser.PLUS2:
				case CWScriptParser.DASH2:
				case CWScriptParser.BANG:
				case CWScriptParser.STATE:
				case CWScriptParser.Number:
				case CWScriptParser.Ident:
				case CWScriptParser.NL:
				case CWScriptParser.String:
					{
					this.state = 504;
					this.expr(0);
					}
					break;
				case CWScriptParser.QUERY:
					{
					this.state = 505;
					this.queryStmt();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public destructuring(): DestructuringContext {
		let _localctx: DestructuringContext = new DestructuringContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CWScriptParser.RULE_destructuring);
		let _la: number;
		try {
			let _alt: number;
			this.state = 645;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.LBRACK:
				_localctx = new ArrayDestructuringContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 510;
				this.match(CWScriptParser.LBRACK);
				this.state = 514;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 511;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 516;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
				}
				this.state = 546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.LPAREN) | (1 << CWScriptParser.LBRACE) | (1 << CWScriptParser.LBRACK))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 536;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 519;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case CWScriptParser.Ident:
								{
								this.state = 517;
								this.match(CWScriptParser.Ident);
								}
								break;
							case CWScriptParser.LPAREN:
							case CWScriptParser.LBRACE:
							case CWScriptParser.LBRACK:
								{
								this.state = 518;
								this.destructuring();
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 524;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.NL) {
								{
								{
								this.state = 521;
								this.match(CWScriptParser.NL);
								}
								}
								this.state = 526;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 527;
							this.match(CWScriptParser.COMMA);
							this.state = 531;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.NL) {
								{
								{
								this.state = 528;
								this.match(CWScriptParser.NL);
								}
								}
								this.state = 533;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
							}
						}
						this.state = 538;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
					}
					this.state = 541;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CWScriptParser.Ident:
						{
						this.state = 539;
						this.match(CWScriptParser.Ident);
						}
						break;
					case CWScriptParser.LPAREN:
					case CWScriptParser.LBRACE:
					case CWScriptParser.LBRACK:
						{
						this.state = 540;
						this.destructuring();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 544;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CWScriptParser.COMMA) {
						{
						this.state = 543;
						this.match(CWScriptParser.COMMA);
						}
					}

					}
				}

				this.state = 551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 548;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 553;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 554;
				this.match(CWScriptParser.RBRACK);
				}
				break;
			case CWScriptParser.LPAREN:
				_localctx = new TupleDestructuringContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 555;
				this.match(CWScriptParser.LPAREN);
				this.state = 559;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 556;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 561;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				}
				this.state = 591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.LPAREN) | (1 << CWScriptParser.LBRACE) | (1 << CWScriptParser.LBRACK))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 581;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 564;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case CWScriptParser.Ident:
								{
								this.state = 562;
								this.match(CWScriptParser.Ident);
								}
								break;
							case CWScriptParser.LPAREN:
							case CWScriptParser.LBRACE:
							case CWScriptParser.LBRACK:
								{
								this.state = 563;
								this.destructuring();
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 569;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.NL) {
								{
								{
								this.state = 566;
								this.match(CWScriptParser.NL);
								}
								}
								this.state = 571;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 572;
							this.match(CWScriptParser.COMMA);
							this.state = 576;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.NL) {
								{
								{
								this.state = 573;
								this.match(CWScriptParser.NL);
								}
								}
								this.state = 578;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
							}
						}
						this.state = 583;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
					}
					this.state = 586;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CWScriptParser.Ident:
						{
						this.state = 584;
						this.match(CWScriptParser.Ident);
						}
						break;
					case CWScriptParser.LPAREN:
					case CWScriptParser.LBRACE:
					case CWScriptParser.LBRACK:
						{
						this.state = 585;
						this.destructuring();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 589;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CWScriptParser.COMMA) {
						{
						this.state = 588;
						this.match(CWScriptParser.COMMA);
						}
					}

					}
				}

				this.state = 596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 593;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 598;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 599;
				this.match(CWScriptParser.RPAREN);
				}
				break;
			case CWScriptParser.LBRACE:
				_localctx = new ObjectDestructuringContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 600;
				this.match(CWScriptParser.LBRACE);
				this.state = 604;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 601;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 606;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				}
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.LPAREN) | (1 << CWScriptParser.LBRACE) | (1 << CWScriptParser.LBRACK))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 626;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 609;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case CWScriptParser.Ident:
								{
								this.state = 607;
								this.match(CWScriptParser.Ident);
								}
								break;
							case CWScriptParser.LPAREN:
							case CWScriptParser.LBRACE:
							case CWScriptParser.LBRACK:
								{
								this.state = 608;
								this.destructuring();
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 614;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.NL) {
								{
								{
								this.state = 611;
								this.match(CWScriptParser.NL);
								}
								}
								this.state = 616;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 617;
							this.match(CWScriptParser.COMMA);
							this.state = 621;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.NL) {
								{
								{
								this.state = 618;
								this.match(CWScriptParser.NL);
								}
								}
								this.state = 623;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
							}
						}
						this.state = 628;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
					}
					this.state = 631;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CWScriptParser.Ident:
						{
						this.state = 629;
						this.match(CWScriptParser.Ident);
						}
						break;
					case CWScriptParser.LPAREN:
					case CWScriptParser.LBRACE:
					case CWScriptParser.LBRACK:
						{
						this.state = 630;
						this.destructuring();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 634;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CWScriptParser.COMMA) {
						{
						this.state = 633;
						this.match(CWScriptParser.COMMA);
						}
					}

					}
				}

				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 638;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 643;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 644;
				this.match(CWScriptParser.RBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public globalFnDef(): GlobalFnDefContext {
		let _localctx: GlobalFnDefContext = new GlobalFnDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CWScriptParser.RULE_globalFnDef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			_localctx._kind = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (CWScriptParser.FN - 47)) | (1 << (CWScriptParser.EXEC - 47)) | (1 << (CWScriptParser.QUERY - 47)))) !== 0))) {
				_localctx._kind = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 651;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 648;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 653;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			this.state = 654;
			_localctx._name = this.nsIdent();
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 655;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 661;
			this.fnSigArgs();
			this.state = 665;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 662;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 667;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
			}
			this.state = 668;
			this.fnSigRet();
			this.state = 672;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 669;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 674;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			}
			this.state = 675;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDef(): MethodDefContext {
		let _localctx: MethodDefContext = new MethodDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CWScriptParser.RULE_methodDef);
		let _la: number;
		try {
			let _alt: number;
			this.state = 765;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				_localctx = new InstantiateMethodDefContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 677;
				this.match(CWScriptParser.INSTANTIATE);
				this.state = 685;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 681;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 678;
							this.match(CWScriptParser.NL);
							}
							}
						}
						this.state = 683;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
					}
					this.state = 684;
					this.nsIdent();
					}
					break;
				}
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 687;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 692;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 693;
				this.fnSigArgs();
				this.state = 701;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 697;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 694;
							this.match(CWScriptParser.NL);
							}
							}
						}
						this.state = 699;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
					}
					this.state = 700;
					this.fnSigRet();
					}
					break;
				}
				this.state = 706;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 703;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 708;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
				}
				this.state = 709;
				this.block();
				}
				break;

			case 2:
				_localctx = new SingleMethodDefContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 711;
				(_localctx as SingleMethodDefContext)._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (CWScriptParser.FN - 47)) | (1 << (CWScriptParser.EXEC - 47)) | (1 << (CWScriptParser.QUERY - 47)))) !== 0))) {
					(_localctx as SingleMethodDefContext)._kind = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 715;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 712;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 717;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				}
				this.state = 718;
				this.blockFnDef();
				}
				break;

			case 3:
				_localctx = new BlockMethodDefContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 719;
				(_localctx as BlockMethodDefContext)._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CWScriptParser.EXEC || _la === CWScriptParser.QUERY)) {
					(_localctx as BlockMethodDefContext)._kind = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 720;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 725;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 726;
				this.match(CWScriptParser.LBRACE);
				this.state = 730;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 727;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 732;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
				}
				this.state = 756;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
				case 1:
					{
					this.state = 749;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 733;
							this.blockFnDef();
							this.state = 737;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 734;
									this.match(CWScriptParser.NL);
									}
									}
								}
								this.state = 739;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
							}
							this.state = 740;
							this.cmdsep();
							this.state = 744;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 741;
									this.match(CWScriptParser.NL);
									}
									}
								}
								this.state = 746;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
							}
							}
							}
						}
						this.state = 751;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
					}
					this.state = 752;
					this.blockFnDef();
					this.state = 754;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
					case 1:
						{
						this.state = 753;
						this.cmdsep();
						}
						break;
					}
					}
					break;
				}
				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 758;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 763;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 764;
				this.match(CWScriptParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockFnDef(): BlockFnDefContext {
		let _localctx: BlockFnDefContext = new BlockFnDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CWScriptParser.RULE_blockFnDef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.fnName();
			this.state = 771;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 768;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 774;
			this.fnSigArgs();
			this.state = 778;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 775;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 780;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			}
			this.state = 788;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 784;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 781;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 786;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
				}
				this.state = 787;
				this.fnSigRet();
				}
				break;
			}
			this.state = 793;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 790;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 795;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
			}
			this.state = 796;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnName(): FnNameContext {
		let _localctx: FnNameContext = new FnNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CWScriptParser.RULE_fnName);
		try {
			this.state = 800;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.COLON2:
			case CWScriptParser.Ident:
			case CWScriptParser.NL:
				_localctx = new IdentFnNameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 798;
				this.nsIdent();
				}
				break;
			case CWScriptParser.INSTANTIATE:
				_localctx = new InstantiateFnNameContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 799;
				this.match(CWScriptParser.INSTANTIATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnSigArgs(): FnSigArgsContext {
		let _localctx: FnSigArgsContext = new FnSigArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CWScriptParser.RULE_fnSigArgs);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 802;
			this.match(CWScriptParser.LPAREN);
			this.state = 806;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 803;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 808;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			}
			this.state = 832;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				this.state = 825;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 809;
						this.fnArg();
						this.state = 813;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 810;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 815;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 816;
						this.match(CWScriptParser.COMMA);
						this.state = 820;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 817;
								this.match(CWScriptParser.NL);
								}
								}
							}
							this.state = 822;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
						}
						}
						}
					}
					this.state = 827;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
				}
				this.state = 828;
				this.fnArg();
				this.state = 830;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 829;
					this.match(CWScriptParser.COMMA);
					}
					break;
				}
				}
				break;
			}
			this.state = 837;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 834;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 839;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			}
			this.state = 841;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 840;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 843;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 849;
			this.match(CWScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnSigRet(): FnSigRetContext {
		let _localctx: FnSigRetContext = new FnSigRetContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CWScriptParser.RULE_fnSigRet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 851;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 857;
			this.match(CWScriptParser.SLIM_ARROW);
			this.state = 861;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 858;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 864;
			this.typeDecl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnArg(): FnArgContext {
		let _localctx: FnArgContext = new FnArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CWScriptParser.RULE_fnArg);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 866;
			this.nsIdent();
			this.state = 881;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				this.state = 870;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 867;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 872;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 873;
				this.match(CWScriptParser.COLON);
				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 874;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 879;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 880;
				this.typeDecl();
				}
				break;
			}
			this.state = 897;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				{
				this.state = 886;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 883;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 888;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 889;
				this.match(CWScriptParser.EQ1);
				this.state = 893;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 890;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 895;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
				}
				this.state = 896;
				this.expr(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractDef(): ContractDefContext {
		let _localctx: ContractDefContext = new ContractDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CWScriptParser.RULE_contractDef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 899;
			this.match(CWScriptParser.CONTRACT);
			this.state = 903;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 900;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 906;
			_localctx._contractName = this.match(CWScriptParser.Ident);
			this.state = 910;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 907;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 912;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
			}
			this.state = 921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 913;
				this.match(CWScriptParser.EXTENDS);
				this.state = 917;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 914;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 919;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 920;
				_localctx._baseContract = this.match(CWScriptParser.Ident);
				}
			}

			this.state = 926;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 923;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 928;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			}
			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPLEMENTS) {
				{
				this.state = 929;
				this.match(CWScriptParser.IMPLEMENTS);
				this.state = 933;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 930;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 935;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 952;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 936;
						_localctx._Ident = this.match(CWScriptParser.Ident);
						_localctx._baseInterface.push(_localctx._Ident);
						this.state = 940;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 937;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 942;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 943;
						this.match(CWScriptParser.COMMA);
						this.state = 947;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 944;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 949;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 954;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
				}
				this.state = 955;
				_localctx._Ident = this.match(CWScriptParser.Ident);
				_localctx._baseInterface.push(_localctx._Ident);
				}
			}

			this.state = 961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 958;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 964;
			this.match(CWScriptParser.LBRACE);
			this.state = 968;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 965;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 970;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
			}
			this.state = 994;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (CWScriptParser.FN - 47)) | (1 << (CWScriptParser.INSTANTIATE - 47)) | (1 << (CWScriptParser.EXEC - 47)) | (1 << (CWScriptParser.QUERY - 47)) | (1 << (CWScriptParser.EVENT - 47)) | (1 << (CWScriptParser.STRUCT - 47)) | (1 << (CWScriptParser.STATE - 47)) | (1 << (CWScriptParser.ERROR - 47)))) !== 0)) {
				{
				this.state = 987;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 971;
						this.contractBody();
						this.state = 975;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 972;
								this.match(CWScriptParser.NL);
								}
								}
							}
							this.state = 977;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
						}
						this.state = 978;
						this.cmdsep();
						this.state = 982;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 979;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 984;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 989;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
				}
				this.state = 990;
				this.contractBody();
				this.state = 992;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
				case 1:
					{
					this.state = 991;
					this.cmdsep();
					}
					break;
				}
				}
			}

			this.state = 999;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 996;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1001;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1002;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractBody(): ContractBodyContext {
		let _localctx: ContractBodyContext = new ContractBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CWScriptParser.RULE_contractBody);
		try {
			this.state = 1009;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.EVENT:
				_localctx = new EventContractBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1004;
				this.eventDef();
				}
				break;
			case CWScriptParser.ERROR:
				_localctx = new ErrorContractBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1005;
				this.errorDef();
				}
				break;
			case CWScriptParser.STRUCT:
				_localctx = new StructureContractBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1006;
				this.structureDef();
				}
				break;
			case CWScriptParser.STATE:
				_localctx = new StateContractBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1007;
				this.stateDef();
				}
				break;
			case CWScriptParser.FN:
			case CWScriptParser.INSTANTIATE:
			case CWScriptParser.EXEC:
			case CWScriptParser.QUERY:
				_localctx = new MethodContractBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1008;
				this.methodDef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDef(): InterfaceDefContext {
		let _localctx: InterfaceDefContext = new InterfaceDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CWScriptParser.RULE_interfaceDef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1011;
			this.match(CWScriptParser.INTERFACE);
			this.state = 1015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1012;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1017;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1018;
			_localctx._interfaceName = this.match(CWScriptParser.Ident);
			this.state = 1022;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1019;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1024;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			}
			this.state = 1052;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 1025;
				this.match(CWScriptParser.EXTENDS);
				this.state = 1029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 1026;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 1031;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1048;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1032;
						_localctx._Ident = this.match(CWScriptParser.Ident);
						_localctx._baseInterface.push(_localctx._Ident);
						this.state = 1036;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 1033;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 1038;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1039;
						this.match(CWScriptParser.COMMA);
						this.state = 1043;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 1040;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 1045;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 1050;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
				}
				this.state = 1051;
				_localctx._Ident = this.match(CWScriptParser.Ident);
				_localctx._baseInterface.push(_localctx._Ident);
				}
			}

			this.state = 1057;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1054;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1059;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			}
			this.state = 1083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (CWScriptParser.FN - 47)) | (1 << (CWScriptParser.INSTANTIATE - 47)) | (1 << (CWScriptParser.EXEC - 47)) | (1 << (CWScriptParser.QUERY - 47)) | (1 << (CWScriptParser.EVENT - 47)) | (1 << (CWScriptParser.STRUCT - 47)) | (1 << (CWScriptParser.ERROR - 47)))) !== 0)) {
				{
				this.state = 1076;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1060;
						this.interfaceBody();
						this.state = 1064;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1061;
								this.match(CWScriptParser.NL);
								}
								}
							}
							this.state = 1066;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
						}
						this.state = 1067;
						this.cmdsep();
						this.state = 1071;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 1068;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 1073;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 1078;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
				}
				this.state = 1079;
				this.interfaceBody();
				this.state = 1081;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
				case 1:
					{
					this.state = 1080;
					this.cmdsep();
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CWScriptParser.RULE_interfaceBody);
		try {
			this.state = 1089;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.EVENT:
				_localctx = new EventInterfaceBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1085;
				this.eventDef();
				}
				break;
			case CWScriptParser.ERROR:
				_localctx = new ErrorInterfaceBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1086;
				this.errorDef();
				}
				break;
			case CWScriptParser.STRUCT:
				_localctx = new StructureInterfaceBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1087;
				this.structureDef();
				}
				break;
			case CWScriptParser.FN:
			case CWScriptParser.INSTANTIATE:
			case CWScriptParser.EXEC:
			case CWScriptParser.QUERY:
				_localctx = new MethodInterfaceBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1088;
				this.methodDef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structureDef(): StructureDefContext {
		let _localctx: StructureDefContext = new StructureDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CWScriptParser.RULE_structureDef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1091;
			this.match(CWScriptParser.STRUCT);
			this.state = 1092;
			this.match(CWScriptParser.Ident);
			this.state = 1093;
			this.match(CWScriptParser.LBRACE);
			this.state = 1097;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1094;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1099;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			}
			this.state = 1123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.Ident) {
				{
				this.state = 1116;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1100;
						this.typedIdent();
						this.state = 1104;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 1101;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 1106;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1107;
						this.match(CWScriptParser.COMMA);
						this.state = 1111;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 1108;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 1113;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 1118;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
				}
				this.state = 1119;
				this.typedIdent();
				this.state = 1121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 1120;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 1128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1125;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1131;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDef(): EventDefContext {
		let _localctx: EventDefContext = new EventDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CWScriptParser.RULE_eventDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1133;
			this.match(CWScriptParser.EVENT);
			this.state = 1134;
			this.match(CWScriptParser.Ident);
			this.state = 1135;
			this.namedTupleType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorDef(): ErrorDefContext {
		let _localctx: ErrorDefContext = new ErrorDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CWScriptParser.RULE_errorDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1137;
			this.match(CWScriptParser.ERROR);
			this.state = 1138;
			this.match(CWScriptParser.Ident);
			this.state = 1139;
			this.namedTupleType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateDef(): StateDefContext {
		let _localctx: StateDefContext = new StateDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CWScriptParser.RULE_stateDef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1141;
			this.match(CWScriptParser.STATE);
			this.state = 1230;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.LBRACE:
				{
				this.state = 1142;
				this.match(CWScriptParser.LBRACE);
				this.state = 1146;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1143;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 1148;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
				}
				this.state = 1220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.Ident) {
					{
					this.state = 1218;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
					case 1:
						{
						this.state = 1165;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1149;
								this.typedIdent();
								this.state = 1153;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === CWScriptParser.NL) {
									{
									{
									this.state = 1150;
									this.match(CWScriptParser.NL);
									}
									}
									this.state = 1155;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 1156;
								this.match(CWScriptParser.COMMA);
								this.state = 1160;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === CWScriptParser.NL) {
									{
									{
									this.state = 1157;
									this.match(CWScriptParser.NL);
									}
									}
									this.state = 1162;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								}
								}
							}
							this.state = 1167;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
						}
						this.state = 1168;
						this.typedIdent();
						this.state = 1170;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.COMMA) {
							{
							this.state = 1169;
							this.match(CWScriptParser.COMMA);
							}
						}

						}
						break;

					case 2:
						{
						this.state = 1188;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1172;
								this.typedIdent();
								this.state = 1176;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === CWScriptParser.NL) {
									{
									{
									this.state = 1173;
									this.match(CWScriptParser.NL);
									}
									}
									this.state = 1178;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 1179;
								this.match(CWScriptParser.SCOLON);
								this.state = 1183;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === CWScriptParser.NL) {
									{
									{
									this.state = 1180;
									this.match(CWScriptParser.NL);
									}
									}
									this.state = 1185;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								}
								}
							}
							this.state = 1190;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
						}
						this.state = 1191;
						this.typedIdent();
						this.state = 1193;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.SCOLON) {
							{
							this.state = 1192;
							this.match(CWScriptParser.SCOLON);
							}
						}

						}
						break;

					case 3:
						{
						this.state = 1211;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1195;
								this.typedIdent();
								this.state = 1199;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
										{
										this.state = 1196;
										this.match(CWScriptParser.NL);
										}
										}
									}
									this.state = 1201;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
								}
								this.state = 1202;
								this.match(CWScriptParser.NL);
								this.state = 1206;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === CWScriptParser.NL) {
									{
									{
									this.state = 1203;
									this.match(CWScriptParser.NL);
									}
									}
									this.state = 1208;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								}
								}
							}
							this.state = 1213;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
						}
						this.state = 1214;
						this.typedIdent();
						this.state = 1216;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
						case 1:
							{
							this.state = 1215;
							this.match(CWScriptParser.NL);
							}
							break;
						}
						}
						break;
					}
					}
				}

				this.state = 1225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 1222;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 1227;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1228;
				this.match(CWScriptParser.RBRACE);
				}
				break;
			case CWScriptParser.Ident:
				{
				this.state = 1229;
				this.typedIdent();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDecl(): TypeDeclContext {
		let _localctx: TypeDeclContext = new TypeDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CWScriptParser.RULE_typeDecl);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				_localctx = new IdentTypeDeclContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1232;
				this.match(CWScriptParser.Ident);
				}
				break;

			case 2:
				_localctx = new TupleTypeDeclContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1233;
				this.match(CWScriptParser.LPAREN);
				this.state = 1237;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1234;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 1239;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
				}
				this.state = 1267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.Ident) {
					{
					this.state = 1265;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
					case 1:
						{
						this.state = 1256;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1240;
								this.match(CWScriptParser.Ident);
								this.state = 1244;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === CWScriptParser.NL) {
									{
									{
									this.state = 1241;
									this.match(CWScriptParser.NL);
									}
									}
									this.state = 1246;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 1247;
								this.match(CWScriptParser.COMMA);
								this.state = 1251;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === CWScriptParser.NL) {
									{
									{
									this.state = 1248;
									this.match(CWScriptParser.NL);
									}
									}
									this.state = 1253;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								}
								}
							}
							this.state = 1258;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
						}
						this.state = 1259;
						this.match(CWScriptParser.Ident);
						this.state = 1261;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.COMMA) {
							{
							this.state = 1260;
							this.match(CWScriptParser.COMMA);
							}
						}

						}
						break;

					case 2:
						{
						this.state = 1263;
						this.match(CWScriptParser.Ident);
						this.state = 1264;
						this.match(CWScriptParser.COMMA);
						}
						break;
					}
					}
				}

				this.state = 1272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 1269;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 1274;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1275;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 3:
				_localctx = new NamedTupleTypeDeclContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1276;
				this.namedTupleType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedIdent(): TypedIdentContext {
		let _localctx: TypedIdentContext = new TypedIdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CWScriptParser.RULE_typedIdent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1279;
			this.match(CWScriptParser.Ident);
			this.state = 1280;
			this.match(CWScriptParser.COLON);
			this.state = 1281;
			this.typeDecl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedTupleType(): NamedTupleTypeContext {
		let _localctx: NamedTupleTypeContext = new NamedTupleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CWScriptParser.RULE_namedTupleType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1283;
			this.match(CWScriptParser.LPAREN);
			this.state = 1287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1284;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1306;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1290;
					this.typedIdent();
					this.state = 1294;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 1291;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 1296;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1297;
					this.match(CWScriptParser.COMMA);
					this.state = 1301;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 1298;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 1303;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
				}
				this.state = 1308;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
			}
			this.state = 1309;
			this.typedIdent();
			this.state = 1311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COMMA) {
				{
				this.state = 1310;
				this.match(CWScriptParser.COMMA);
				}
			}

			this.state = 1316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1313;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1319;
			this.match(CWScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CWScriptParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1321;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1327;
			this.match(CWScriptParser.LBRACE);
			this.state = 1331;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1328;
					this.cmdsep();
					}
					}
				}
				this.state = 1333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
			}
			this.state = 1357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CWScriptParser.IF - 7)) | (1 << (CWScriptParser.LET - 7)) | (1 << (CWScriptParser.TRUE - 7)) | (1 << (CWScriptParser.FALSE - 7)) | (1 << (CWScriptParser.FOR - 7)) | (1 << (CWScriptParser.WHILE - 7)) | (1 << (CWScriptParser.RETURN - 7)) | (1 << (CWScriptParser.LPAREN - 7)) | (1 << (CWScriptParser.LBRACE - 7)) | (1 << (CWScriptParser.LBRACK - 7)) | (1 << (CWScriptParser.COLON2 - 7)) | (1 << (CWScriptParser.PLUS2 - 7)))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (CWScriptParser.DASH2 - 39)) | (1 << (CWScriptParser.BANG - 39)) | (1 << (CWScriptParser.SEND - 39)) | (1 << (CWScriptParser.LOG - 39)) | (1 << (CWScriptParser.FAIL - 39)) | (1 << (CWScriptParser.STATE - 39)) | (1 << (CWScriptParser.Number - 39)) | (1 << (CWScriptParser.Ident - 39)) | (1 << (CWScriptParser.NL - 39)) | (1 << (CWScriptParser.String - 39)))) !== 0)) {
				{
				this.state = 1350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1334;
						this.exprx();
						this.state = 1338;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1335;
								this.match(CWScriptParser.NL);
								}
								}
							}
							this.state = 1340;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
						}
						this.state = 1341;
						this.cmdsep();
						this.state = 1345;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1342;
								this.match(CWScriptParser.NL);
								}
								}
							}
							this.state = 1347;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
						}
						}
						}
					}
					this.state = 1352;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
				}
				this.state = 1353;
				this.exprx();
				this.state = 1355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.SCOLON || _la === CWScriptParser.NL) {
					{
					this.state = 1354;
					this.cmdsep();
					}
				}

				}
			}

			this.state = 1359;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forLoop(): ForLoopContext {
		let _localctx: ForLoopContext = new ForLoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CWScriptParser.RULE_forLoop);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1361;
			this.match(CWScriptParser.FOR);
			this.state = 1365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1362;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1368;
			this.varDecl();
			this.state = 1372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1369;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1375;
			this.match(CWScriptParser.IN);
			this.state = 1379;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 218, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1376;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1381;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 218, this._ctx);
			}
			this.state = 1382;
			this.expr(0);
			this.state = 1386;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1383;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1388;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
			}
			this.state = 1392;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1389;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1394;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
			}
			this.state = 1398;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1395;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1400;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 221, this._ctx);
			}
			this.state = 1401;
			this.scope();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileLoop(): WhileLoopContext {
		let _localctx: WhileLoopContext = new WhileLoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CWScriptParser.RULE_whileLoop);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1403;
			this.match(CWScriptParser.WHILE);
			this.state = 1407;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1404;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1409;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 222, this._ctx);
			}
			this.state = 1410;
			this.expr(0);
			this.state = 1414;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1411;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1416;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
			}
			this.state = 1417;
			this.scope();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CWScriptParser.RULE_ifStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1419;
			this.match(CWScriptParser.IF);
			this.state = 1423;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1420;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1425;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
			}
			this.state = 1426;
			_localctx._expr = this.expr(0);
			_localctx._condition.push(_localctx._expr);
			this.state = 1430;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1427;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1432;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 225, this._ctx);
			}
			this.state = 1433;
			_localctx._ifBranch = this.scope();
			this.state = 1437;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1434;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1439;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
			}
			this.state = 1465;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1440;
					this.match(CWScriptParser.ELSE);
					this.state = 1444;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 1441;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 1446;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1447;
					this.match(CWScriptParser.IF);
					this.state = 1451;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1448;
							this.match(CWScriptParser.NL);
							}
							}
						}
						this.state = 1453;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 228, this._ctx);
					}
					this.state = 1454;
					_localctx._expr = this.expr(0);
					_localctx._condition.push(_localctx._expr);
					this.state = 1458;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1455;
							this.match(CWScriptParser.NL);
							}
							}
						}
						this.state = 1460;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
					}
					this.state = 1461;
					_localctx._scope = this.scope();
					_localctx._elseifBranch.push(_localctx._scope);
					}
					}
				}
				this.state = 1467;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 230, this._ctx);
			}
			this.state = 1471;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1468;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1473;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 231, this._ctx);
			}
			this.state = 1482;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				{
				this.state = 1474;
				this.match(CWScriptParser.ELSE);
				this.state = 1478;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1475;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 1480;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 232, this._ctx);
				}
				this.state = 1481;
				_localctx._elseBranch = this.scope();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sendStmt(): SendStmtContext {
		let _localctx: SendStmtContext = new SendStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CWScriptParser.RULE_sendStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1484;
			this.match(CWScriptParser.SEND);
			this.state = 1488;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1485;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1490;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 234, this._ctx);
			}
			this.state = 1491;
			this.nsIdent();
			this.state = 1495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1492;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1497;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1498;
			this.map();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryStmt(): QueryStmtContext {
		let _localctx: QueryStmtContext = new QueryStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CWScriptParser.RULE_queryStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1500;
			this.match(CWScriptParser.QUERY);
			this.state = 1504;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 236, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1501;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1506;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 236, this._ctx);
			}
			this.state = 1507;
			this.nsIdent();
			this.state = 1511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1508;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1514;
			this.map();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logStmt(): LogStmtContext {
		let _localctx: LogStmtContext = new LogStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CWScriptParser.RULE_logStmt);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1532;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				_localctx = new AttributesLogStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1516;
				this.match(CWScriptParser.LOG);
				this.state = 1520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 1517;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 1522;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1523;
				this.map();
				}
				break;

			case 2:
				_localctx = new EventLogStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1524;
				this.match(CWScriptParser.LOG);
				this.state = 1528;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 239, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1525;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 1530;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 239, this._ctx);
				}
				this.state = 1531;
				this.createEventOrError();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public failStmt(): FailStmtContext {
		let _localctx: FailStmtContext = new FailStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CWScriptParser.RULE_failStmt);
		try {
			let _alt: number;
			this.state = 1551;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 243, this._ctx) ) {
			case 1:
				_localctx = new EmptyFailStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1534;
				this.match(CWScriptParser.FAIL);
				}
				break;

			case 2:
				_localctx = new ErrorFailStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1535;
				this.match(CWScriptParser.FAIL);
				this.state = 1539;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 241, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1536;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 1541;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 241, this._ctx);
				}
				this.state = 1542;
				this.createEventOrError();
				}
				break;

			case 3:
				_localctx = new MessageFailStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1543;
				this.match(CWScriptParser.FAIL);
				this.state = 1547;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1544;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 1549;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
				}
				this.state = 1550;
				this.rval();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createEventOrError(): CreateEventOrErrorContext {
		let _localctx: CreateEventOrErrorContext = new CreateEventOrErrorContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CWScriptParser.RULE_createEventOrError);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1553;
			this.nsIdent();
			this.state = 1554;
			this.match(CWScriptParser.LPAREN);
			this.state = 1558;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 244, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1555;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1560;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 244, this._ctx);
			}
			this.state = 1584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
			case 1:
				{
				this.state = 1577;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 247, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1561;
						this.rval();
						this.state = 1565;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 1562;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 1567;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1568;
						this.match(CWScriptParser.COMMA);
						this.state = 1572;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1569;
								this.match(CWScriptParser.NL);
								}
								}
							}
							this.state = 1574;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
						}
						}
						}
					}
					this.state = 1579;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 247, this._ctx);
				}
				this.state = 1580;
				this.rval();
				this.state = 1582;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 1581;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
				break;
			}
			this.state = 1589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1586;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1592;
			this.match(CWScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CWScriptParser.RULE_literal);
		let _la: number;
		try {
			this.state = 1600;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.String:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1594;
				this.match(CWScriptParser.String);
				}
				break;
			case CWScriptParser.Number:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1595;
				this.match(CWScriptParser.Number);
				}
				break;
			case CWScriptParser.TRUE:
			case CWScriptParser.FALSE:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1596;
				_la = this._input.LA(1);
				if (!(_la === CWScriptParser.TRUE || _la === CWScriptParser.FALSE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case CWScriptParser.LBRACK:
				_localctx = new ArrayLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1597;
				this.array();
				}
				break;
			case CWScriptParser.LBRACE:
				_localctx = new MapLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1598;
				this.map();
				}
				break;
			case CWScriptParser.LPAREN:
				_localctx = new TupleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1599;
				this.tuple();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CWScriptParser.RULE_array);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1602;
			this.match(CWScriptParser.LBRACK);
			this.state = 1606;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1603;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1608;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
			}
			this.state = 1632;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				{
				this.state = 1625;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1609;
						this.rval();
						this.state = 1613;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 1610;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 1615;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1616;
						this.match(CWScriptParser.COMMA);
						this.state = 1620;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 254, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 1617;
								this.match(CWScriptParser.NL);
								}
								}
							}
							this.state = 1622;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 254, this._ctx);
						}
						}
						}
					}
					this.state = 1627;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 255, this._ctx);
				}
				this.state = 1628;
				this.rval();
				this.state = 1630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 1629;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
				break;
			}
			this.state = 1637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1634;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1639;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1640;
			this.match(CWScriptParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public map(): MapContext {
		let _localctx: MapContext = new MapContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CWScriptParser.RULE_map);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1642;
			this.match(CWScriptParser.LBRACE);
			this.state = 1646;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1643;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1648;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
			}
			this.state = 1672;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.Ident) {
				{
				this.state = 1665;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 262, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1649;
						this.mapField();
						this.state = 1653;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 1650;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 1655;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1656;
						this.match(CWScriptParser.COMMA);
						this.state = 1660;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.NL) {
							{
							{
							this.state = 1657;
							this.match(CWScriptParser.NL);
							}
							}
							this.state = 1662;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 1667;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 262, this._ctx);
				}
				this.state = 1668;
				this.mapField();
				this.state = 1670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 1669;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 1677;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1674;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1680;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapField(): MapFieldContext {
		let _localctx: MapFieldContext = new MapFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CWScriptParser.RULE_mapField);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1682;
			this.match(CWScriptParser.Ident);
			this.state = 1697;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 268, this._ctx) ) {
			case 1:
				{
				this.state = 1686;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.NL) {
					{
					{
					this.state = 1683;
					this.match(CWScriptParser.NL);
					}
					}
					this.state = 1688;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1689;
				this.match(CWScriptParser.COLON);
				this.state = 1693;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1690;
						this.match(CWScriptParser.NL);
						}
						}
					}
					this.state = 1695;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
				}
				this.state = 1696;
				this.rval();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple(): TupleContext {
		let _localctx: TupleContext = new TupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CWScriptParser.RULE_tuple);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1699;
			this.match(CWScriptParser.LPAREN);
			this.state = 1703;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 269, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1700;
					this.match(CWScriptParser.NL);
					}
					}
				}
				this.state = 1705;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 269, this._ctx);
			}
			this.state = 1751;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				{
				this.state = 1749;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 277, this._ctx) ) {
				case 1:
					{
					this.state = 1706;
					this.rval();
					this.state = 1710;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 1707;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 1712;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1713;
					this.match(CWScriptParser.COMMA);
					}
					break;

				case 2:
					{
					this.state = 1715;
					this.rval();
					this.state = 1719;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.NL) {
						{
						{
						this.state = 1716;
						this.match(CWScriptParser.NL);
						}
						}
						this.state = 1721;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1736;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 1722;
							this.match(CWScriptParser.COMMA);
							this.state = 1726;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 272, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 1723;
									this.match(CWScriptParser.NL);
									}
									}
								}
								this.state = 1728;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 272, this._ctx);
							}
							this.state = 1729;
							this.rval();
							this.state = 1733;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 1730;
									this.match(CWScriptParser.NL);
									}
									}
								}
								this.state = 1735;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 273, this._ctx);
							}
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 1738;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 274, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 1743;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1740;
							this.match(CWScriptParser.NL);
							}
							}
						}
						this.state = 1745;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
					}
					this.state = 1747;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CWScriptParser.COMMA) {
						{
						this.state = 1746;
						this.match(CWScriptParser.COMMA);
						}
					}

					}
					break;
				}
				}
				break;
			}
			this.state = 1756;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.NL) {
				{
				{
				this.state = 1753;
				this.match(CWScriptParser.NL);
				}
				}
				this.state = 1758;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1759;
			this.match(CWScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);

		case 1:
			return this.precpred(this._ctx, 9);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);

		case 4:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03I\u06E4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x03\x02" +
		"\x05\x02h\n\x02\x03\x02\x07\x02k\n\x02\f\x02\x0E\x02n\v\x02\x03\x02\x03" +
		"\x02\x07\x02r\n\x02\f\x02\x0E\x02u\v\x02\x03\x02\x03\x02\x07\x02y\n\x02" +
		"\f\x02\x0E\x02|\v\x02\x07\x02~\n\x02\f\x02\x0E\x02\x81\v\x02\x03\x02\x03" +
		"\x02\x05\x02\x85\n\x02\x05\x02\x87\n\x02\x03\x02\x03\x02\x07\x02\x8B\n" +
		"\x02\f\x02\x0E\x02\x8E\v\x02\x03\x02\x03\x02\x07\x02\x92\n\x02\f\x02\x0E" +
		"\x02\x95\v\x02\x07\x02\x97\n\x02\f\x02\x0E\x02\x9A\v\x02\x03\x02\x03\x02" +
		"\x05\x02\x9E\n\x02\x05\x02\xA0\n\x02\x03\x02\x03\x02\x03\x03\x06\x03\xA5" +
		"\n\x03\r\x03\x0E\x03\xA6\x03\x04\x03\x04\x05\x04\xAB\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04\xB1\n\x04\f\x04\x0E\x04\xB4\v\x04\x03\x04" +
		"\x03\x04\x07\x04\xB8\n\x04\f\x04\x0E\x04\xBB\v\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04\xC0\n\x04\x05\x04\xC2\n\x04\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\xCA\n\x05\x03\x06\x03\x06\x07\x06\xCE\n\x06\f" +
		"\x06\x0E\x06\xD1\v\x06\x03\x06\x03\x06\x07\x06\xD5\n\x06\f\x06\x0E\x06" +
		"\xD8\v\x06\x03\x06\x03\x06\x07\x06\xDC\n\x06\f\x06\x0E\x06\xDF\v\x06\x07" +
		"\x06\xE1\n\x06\f\x06\x0E\x06\xE4\v\x06\x03\x06\x07\x06\xE7\n\x06\f\x06" +
		"\x0E\x06\xEA\v\x06\x03\x06\x05\x06\xED\n\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\xF3\n\x07\x03\b\x03\b\x03\b\x07\b\xF8\n\b\f\b\x0E\b\xFB\v" +
		"\b\x03\b\x03\b\x07\b\xFF\n\b\f\b\x0E\b\u0102\v\b\x03\b\x03\b\x03\b\x03" +
		"\b\x07\b\u0108\n\b\f\b\x0E\b\u010B\v\b\x03\b\x03\b\x03\b\x07\b\u0110\n" +
		"\b\f\b\x0E\b\u0113\v\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x05\b\u0120\n\b\x03\b\x03\b\x07\b\u0124\n\b\f\b\x0E" +
		"\b\u0127\v\b\x03\b\x03\b\x07\b\u012B\n\b\f\b\x0E\b\u012E\v\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x07\b\u0135\n\b\f\b\x0E\b\u0138\v\b\x03\b\x03\b\x07" +
		"\b\u013C\n\b\f\b\x0E\b\u013F\v\b\x03\b\x03\b\x07\b\u0143\n\b\f\b\x0E\b" +
		"\u0146\v\b\x07\b\u0148\n\b\f\b\x0E\b\u014B\v\b\x03\b\x03\b\x05\b\u014F" +
		"\n\b\x03\b\x07\b\u0152\n\b\f\b\x0E\b\u0155\v\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x07\b\u015E\n\b\f\b\x0E\b\u0161\v\b\x03\b\x03\b\x07" +
		"\b\u0165\n\b\f\b\x0E\b\u0168\v\b\x03\b\x03\b\x03\b\x03\b\x07\b\u016E\n" +
		"\b\f\b\x0E\b\u0171\v\b\x03\b\x03\b\x07\b\u0175\n\b\f\b\x0E\b\u0178\v\b" +
		"\x03\b\x06\b\u017B\n\b\r\b\x0E\b\u017C\x07\b\u017F\n\b\f\b\x0E\b\u0182" +
		"\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x07\t\u018F\n\t\f\t\x0E\t\u0192\v\t\x03\t\x05\t\u0195\n\t\x05\t\u0197" +
		"\n\t\x03\n\x03\n\x05\n\u019B\n\n\x03\v\x03\v\x05\v\u019F\n\v\x03\f\x03" +
		"\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x05\x0F\u01A8\n\x0F\x03\x0F\x07" +
		"\x0F\u01AB\n\x0F\f\x0F\x0E\x0F\u01AE\v\x0F\x03\x0F\x03\x0F\x07\x0F\u01B2" +
		"\n\x0F\f\x0F\x0E\x0F\u01B5\v\x0F\x03\x0F\x03\x0F\x07\x0F\u01B9\n\x0F\f" +
		"\x0F\x0E\x0F\u01BC\v\x0F\x03\x0F\x07\x0F\u01BF\n\x0F\f\x0F\x0E\x0F\u01C2" +
		"\v\x0F\x03\x10\x03\x10\x07\x10\u01C6\n\x10\f\x10\x0E\x10\u01C9\v\x10\x03" +
		"\x10\x03\x10\x07\x10\u01CD\n\x10\f\x10\x0E\x10\u01D0\v\x10\x03\x10\x06" +
		"\x10\u01D3\n\x10\r\x10\x0E\x10\u01D4\x03\x11\x03\x11\x07\x11\u01D9\n\x11" +
		"\f\x11\x0E\x11\u01DC\v\x11\x03\x11\x03\x11\x07\x11\u01E0\n\x11\f\x11\x0E" +
		"\x11\u01E3\v\x11\x03\x11\x03\x11\x07\x11\u01E7\n\x11\f\x11\x0E\x11\u01EA" +
		"\v\x11\x07\x11\u01EC\n\x11\f\x11\x0E\x11\u01EF\v\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01F8\n\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\u01FD\n\x12\x05\x12\u01FF\n\x12\x03\x13\x03\x13\x07\x13" +
		"\u0203\n\x13\f\x13\x0E\x13\u0206\v\x13\x03\x13\x03\x13\x05\x13\u020A\n" +
		"\x13\x03\x13\x07\x13\u020D\n\x13\f\x13\x0E\x13\u0210\v\x13\x03\x13\x03" +
		"\x13\x07\x13\u0214\n\x13\f\x13\x0E\x13\u0217\v\x13\x07\x13\u0219\n\x13" +
		"\f\x13\x0E\x13\u021C\v\x13\x03\x13\x03\x13\x05\x13\u0220\n\x13\x03\x13" +
		"\x05\x13\u0223\n\x13\x05\x13\u0225\n\x13\x03\x13\x07\x13\u0228\n\x13\f" +
		"\x13\x0E\x13\u022B\v\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0230\n\x13\f" +
		"\x13\x0E\x13\u0233\v\x13\x03\x13\x03\x13\x05\x13\u0237\n\x13\x03\x13\x07" +
		"\x13\u023A\n\x13\f\x13\x0E\x13\u023D\v\x13\x03\x13\x03\x13\x07\x13\u0241" +
		"\n\x13\f\x13\x0E\x13\u0244\v\x13\x07\x13\u0246\n\x13\f\x13\x0E\x13\u0249" +
		"\v\x13\x03\x13\x03\x13\x05\x13\u024D\n\x13\x03\x13\x05\x13\u0250\n\x13" +
		"\x05\x13\u0252\n\x13\x03\x13\x07\x13\u0255\n\x13\f\x13\x0E\x13\u0258\v" +
		"\x13\x03\x13\x03\x13\x03\x13\x07\x13\u025D\n\x13\f\x13\x0E\x13\u0260\v" +
		"\x13\x03\x13\x03\x13\x05\x13\u0264\n\x13\x03\x13\x07\x13\u0267\n\x13\f" +
		"\x13\x0E\x13\u026A\v\x13\x03\x13\x03\x13\x07\x13\u026E\n\x13\f\x13\x0E" +
		"\x13\u0271\v\x13\x07\x13\u0273\n\x13\f\x13\x0E\x13\u0276\v\x13\x03\x13" +
		"\x03\x13\x05\x13\u027A\n\x13\x03\x13\x05\x13\u027D\n\x13\x05\x13\u027F" +
		"\n\x13\x03\x13\x07\x13\u0282\n\x13\f\x13\x0E\x13\u0285\v\x13\x03\x13\x05" +
		"\x13\u0288\n\x13\x03\x14\x03\x14\x07\x14\u028C\n\x14\f\x14\x0E\x14\u028F" +
		"\v\x14\x03\x14\x03\x14\x07\x14\u0293\n\x14\f\x14\x0E\x14\u0296\v\x14\x03" +
		"\x14\x03\x14\x07\x14\u029A\n\x14\f\x14\x0E\x14\u029D\v\x14\x03\x14\x03" +
		"\x14\x07\x14\u02A1\n\x14\f\x14\x0E\x14\u02A4\v\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x07\x15\u02AA\n\x15\f\x15\x0E\x15\u02AD\v\x15\x03\x15\x05" +
		"\x15\u02B0\n\x15\x03\x15\x07\x15\u02B3\n\x15\f\x15\x0E\x15\u02B6\v\x15" +
		"\x03\x15\x03\x15\x07\x15\u02BA\n\x15\f\x15\x0E\x15\u02BD\v\x15\x03\x15" +
		"\x05\x15\u02C0\n\x15\x03\x15\x07\x15\u02C3\n\x15\f\x15\x0E\x15\u02C6\v" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u02CC\n\x15\f\x15\x0E\x15" +
		"\u02CF\v\x15\x03\x15\x03\x15\x03\x15\x07\x15\u02D4\n\x15\f\x15\x0E\x15" +
		"\u02D7\v\x15\x03\x15\x03\x15\x07\x15\u02DB\n\x15\f\x15\x0E\x15\u02DE\v" +
		"\x15\x03\x15\x03\x15\x07\x15\u02E2\n\x15\f\x15\x0E\x15\u02E5\v\x15\x03" +
		"\x15\x03\x15\x07\x15\u02E9\n\x15\f\x15\x0E\x15\u02EC\v\x15\x07\x15\u02EE" +
		"\n\x15\f\x15\x0E\x15\u02F1\v\x15\x03\x15\x03\x15\x05\x15\u02F5\n\x15\x05" +
		"\x15\u02F7\n\x15\x03\x15\x07\x15\u02FA\n\x15\f\x15\x0E\x15\u02FD\v\x15" +
		"\x03\x15\x05\x15\u0300\n\x15\x03\x16\x03\x16\x07\x16\u0304\n\x16\f\x16" +
		"\x0E\x16\u0307\v\x16\x03\x16\x03\x16\x07\x16\u030B\n\x16\f\x16\x0E\x16" +
		"\u030E\v\x16\x03\x16\x07\x16\u0311\n\x16\f\x16\x0E\x16\u0314\v\x16\x03" +
		"\x16\x05\x16\u0317\n\x16\x03\x16\x07\x16\u031A\n\x16\f\x16\x0E\x16\u031D" +
		"\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\u0323\n\x17\x03\x18\x03" +
		"\x18\x07\x18\u0327\n\x18\f\x18\x0E\x18\u032A\v\x18\x03\x18\x03\x18\x07" +
		"\x18\u032E\n\x18\f\x18\x0E\x18\u0331\v\x18\x03\x18\x03\x18\x07\x18\u0335" +
		"\n\x18\f\x18\x0E\x18\u0338\v\x18\x07\x18\u033A\n\x18\f\x18\x0E\x18\u033D" +
		"\v\x18\x03\x18\x03\x18\x05\x18\u0341\n\x18\x05\x18\u0343\n\x18\x03\x18" +
		"\x07\x18\u0346\n\x18\f\x18\x0E\x18\u0349\v\x18\x03\x18\x05\x18\u034C\n" +
		"\x18\x03\x18\x07\x18\u034F\n\x18\f\x18\x0E\x18\u0352\v\x18\x03\x18\x03" +
		"\x18\x03\x19\x07\x19\u0357\n\x19\f\x19\x0E\x19\u035A\v\x19\x03\x19\x03" +
		"\x19\x07\x19\u035E\n\x19\f\x19\x0E\x19\u0361\v\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x07\x1A\u0367\n\x1A\f\x1A\x0E\x1A\u036A\v\x1A\x03\x1A\x03" +
		"\x1A\x07\x1A\u036E\n\x1A\f\x1A\x0E\x1A\u0371\v\x1A\x03\x1A\x05\x1A\u0374" +
		"\n\x1A\x03\x1A\x07\x1A\u0377\n\x1A\f\x1A\x0E\x1A\u037A\v\x1A\x03\x1A\x03" +
		"\x1A\x07\x1A\u037E\n\x1A\f\x1A\x0E\x1A\u0381\v\x1A\x03\x1A\x05\x1A\u0384" +
		"\n\x1A\x03\x1B\x03\x1B\x07\x1B\u0388\n\x1B\f\x1B\x0E\x1B\u038B\v\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u038F\n\x1B\f\x1B\x0E\x1B\u0392\v\x1B\x03\x1B\x03" +
		"\x1B\x07\x1B\u0396\n\x1B\f\x1B\x0E\x1B\u0399\v\x1B\x03\x1B\x05\x1B\u039C" +
		"\n\x1B\x03\x1B\x07\x1B\u039F\n\x1B\f\x1B\x0E\x1B\u03A2\v\x1B\x03\x1B\x03" +
		"\x1B\x07\x1B\u03A6\n\x1B\f\x1B\x0E\x1B\u03A9\v\x1B\x03\x1B\x03\x1B\x07" +
		"\x1B\u03AD\n\x1B\f\x1B\x0E\x1B\u03B0\v\x1B\x03\x1B\x03\x1B\x07\x1B\u03B4" +
		"\n\x1B\f\x1B\x0E\x1B\u03B7\v\x1B\x07\x1B\u03B9\n\x1B\f\x1B\x0E\x1B\u03BC" +
		"\v\x1B\x03\x1B\x05\x1B\u03BF\n\x1B\x03\x1B\x07\x1B\u03C2\n\x1B\f\x1B\x0E" +
		"\x1B\u03C5\v\x1B\x03\x1B\x03\x1B\x07\x1B\u03C9\n\x1B\f\x1B\x0E\x1B\u03CC" +
		"\v\x1B\x03\x1B\x03\x1B\x07\x1B\u03D0\n\x1B\f\x1B\x0E\x1B\u03D3\v\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u03D7\n\x1B\f\x1B\x0E\x1B\u03DA\v\x1B\x07\x1B\u03DC" +
		"\n\x1B\f\x1B\x0E\x1B\u03DF\v\x1B\x03\x1B\x03\x1B\x05\x1B\u03E3\n\x1B\x05" +
		"\x1B\u03E5\n\x1B\x03\x1B\x07\x1B\u03E8\n\x1B\f\x1B\x0E\x1B\u03EB\v\x1B" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u03F4" +
		"\n\x1C\x03\x1D\x03\x1D\x07\x1D\u03F8\n\x1D\f\x1D\x0E\x1D\u03FB\v\x1D\x03" +
		"\x1D\x03\x1D\x07\x1D\u03FF\n\x1D\f\x1D\x0E\x1D\u0402\v\x1D\x03\x1D\x03" +
		"\x1D\x07\x1D\u0406\n\x1D\f\x1D\x0E\x1D\u0409\v\x1D\x03\x1D\x03\x1D\x07" +
		"\x1D\u040D\n\x1D\f\x1D\x0E\x1D\u0410\v\x1D\x03\x1D\x03\x1D\x07\x1D\u0414" +
		"\n\x1D\f\x1D\x0E\x1D\u0417\v\x1D\x07\x1D\u0419\n\x1D\f\x1D\x0E\x1D\u041C" +
		"\v\x1D\x03\x1D\x05\x1D\u041F\n\x1D\x03\x1D\x07\x1D\u0422\n\x1D\f\x1D\x0E" +
		"\x1D\u0425\v\x1D\x03\x1D\x03\x1D\x07\x1D\u0429\n\x1D\f\x1D\x0E\x1D\u042C" +
		"\v\x1D\x03\x1D\x03\x1D\x07\x1D\u0430\n\x1D\f\x1D\x0E\x1D\u0433\v\x1D\x07" +
		"\x1D\u0435\n\x1D\f\x1D\x0E\x1D\u0438\v\x1D\x03\x1D\x03\x1D\x05\x1D\u043C" +
		"\n\x1D\x05\x1D\u043E\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0444" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u044A\n\x1F\f\x1F\x0E\x1F" +
		"\u044D\v\x1F\x03\x1F\x03\x1F\x07\x1F\u0451\n\x1F\f\x1F\x0E\x1F\u0454\v" +
		"\x1F\x03\x1F\x03\x1F\x07\x1F\u0458\n\x1F\f\x1F\x0E\x1F\u045B\v\x1F\x07" +
		"\x1F\u045D\n\x1F\f\x1F\x0E\x1F\u0460\v\x1F\x03\x1F\x03\x1F\x05\x1F\u0464" +
		"\n\x1F\x05\x1F\u0466\n\x1F\x03\x1F\x07\x1F\u0469\n\x1F\f\x1F\x0E\x1F\u046C" +
		"\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x03" +
		"\"\x03\"\x07\"\u047B\n\"\f\"\x0E\"\u047E\v\"\x03\"\x03\"\x07\"\u0482\n" +
		"\"\f\"\x0E\"\u0485\v\"\x03\"\x03\"\x07\"\u0489\n\"\f\"\x0E\"\u048C\v\"" +
		"\x07\"\u048E\n\"\f\"\x0E\"\u0491\v\"\x03\"\x03\"\x05\"\u0495\n\"\x03\"" +
		"\x03\"\x07\"\u0499\n\"\f\"\x0E\"\u049C\v\"\x03\"\x03\"\x07\"\u04A0\n\"" +
		"\f\"\x0E\"\u04A3\v\"\x07\"\u04A5\n\"\f\"\x0E\"\u04A8\v\"\x03\"\x03\"\x05" +
		"\"\u04AC\n\"\x03\"\x03\"\x07\"\u04B0\n\"\f\"\x0E\"\u04B3\v\"\x03\"\x03" +
		"\"\x07\"\u04B7\n\"\f\"\x0E\"\u04BA\v\"\x07\"\u04BC\n\"\f\"\x0E\"\u04BF" +
		"\v\"\x03\"\x03\"\x05\"\u04C3\n\"\x05\"\u04C5\n\"\x05\"\u04C7\n\"\x03\"" +
		"\x07\"\u04CA\n\"\f\"\x0E\"\u04CD\v\"\x03\"\x03\"\x05\"\u04D1\n\"\x03#" +
		"\x03#\x03#\x07#\u04D6\n#\f#\x0E#\u04D9\v#\x03#\x03#\x07#\u04DD\n#\f#\x0E" +
		"#\u04E0\v#\x03#\x03#\x07#\u04E4\n#\f#\x0E#\u04E7\v#\x07#\u04E9\n#\f#\x0E" +
		"#\u04EC\v#\x03#\x03#\x05#\u04F0\n#\x03#\x03#\x05#\u04F4\n#\x05#\u04F6" +
		"\n#\x03#\x07#\u04F9\n#\f#\x0E#\u04FC\v#\x03#\x03#\x05#\u0500\n#\x03$\x03" +
		"$\x03$\x03$\x03%\x03%\x07%\u0508\n%\f%\x0E%\u050B\v%\x03%\x03%\x07%\u050F" +
		"\n%\f%\x0E%\u0512\v%\x03%\x03%\x07%\u0516\n%\f%\x0E%\u0519\v%\x07%\u051B" +
		"\n%\f%\x0E%\u051E\v%\x03%\x03%\x05%\u0522\n%\x03%\x07%\u0525\n%\f%\x0E" +
		"%\u0528\v%\x03%\x03%\x03&\x07&\u052D\n&\f&\x0E&\u0530\v&\x03&\x03&\x07" +
		"&\u0534\n&\f&\x0E&\u0537\v&\x03&\x03&\x07&\u053B\n&\f&\x0E&\u053E\v&\x03" +
		"&\x03&\x07&\u0542\n&\f&\x0E&\u0545\v&\x07&\u0547\n&\f&\x0E&\u054A\v&\x03" +
		"&\x03&\x05&\u054E\n&\x05&\u0550\n&\x03&\x03&\x03\'\x03\'\x07\'\u0556\n" +
		"\'\f\'\x0E\'\u0559\v\'\x03\'\x03\'\x07\'\u055D\n\'\f\'\x0E\'\u0560\v\'" +
		"\x03\'\x03\'\x07\'\u0564\n\'\f\'\x0E\'\u0567\v\'\x03\'\x03\'\x07\'\u056B" +
		"\n\'\f\'\x0E\'\u056E\v\'\x03\'\x07\'\u0571\n\'\f\'\x0E\'\u0574\v\'\x03" +
		"\'\x07\'\u0577\n\'\f\'\x0E\'\u057A\v\'\x03\'\x03\'\x03(\x03(\x07(\u0580" +
		"\n(\f(\x0E(\u0583\v(\x03(\x03(\x07(\u0587\n(\f(\x0E(\u058A\v(\x03(\x03" +
		"(\x03)\x03)\x07)\u0590\n)\f)\x0E)\u0593\v)\x03)\x03)\x07)\u0597\n)\f)" +
		"\x0E)\u059A\v)\x03)\x03)\x07)\u059E\n)\f)\x0E)\u05A1\v)\x03)\x03)\x07" +
		")\u05A5\n)\f)\x0E)\u05A8\v)\x03)\x03)\x07)\u05AC\n)\f)\x0E)\u05AF\v)\x03" +
		")\x03)\x07)\u05B3\n)\f)\x0E)\u05B6\v)\x03)\x03)\x07)\u05BA\n)\f)\x0E)" +
		"\u05BD\v)\x03)\x07)\u05C0\n)\f)\x0E)\u05C3\v)\x03)\x03)\x07)\u05C7\n)" +
		"\f)\x0E)\u05CA\v)\x03)\x05)\u05CD\n)\x03*\x03*\x07*\u05D1\n*\f*\x0E*\u05D4" +
		"\v*\x03*\x03*\x07*\u05D8\n*\f*\x0E*\u05DB\v*\x03*\x03*\x03+\x03+\x07+" +
		"\u05E1\n+\f+\x0E+\u05E4\v+\x03+\x03+\x07+\u05E8\n+\f+\x0E+\u05EB\v+\x03" +
		"+\x03+\x03,\x03,\x07,\u05F1\n,\f,\x0E,\u05F4\v,\x03,\x03,\x03,\x07,\u05F9" +
		"\n,\f,\x0E,\u05FC\v,\x03,\x05,\u05FF\n,\x03-\x03-\x03-\x07-\u0604\n-\f" +
		"-\x0E-\u0607\v-\x03-\x03-\x03-\x07-\u060C\n-\f-\x0E-\u060F\v-\x03-\x05" +
		"-\u0612\n-\x03.\x03.\x03.\x07.\u0617\n.\f.\x0E.\u061A\v.\x03.\x03.\x07" +
		".\u061E\n.\f.\x0E.\u0621\v.\x03.\x03.\x07.\u0625\n.\f.\x0E.\u0628\v.\x07" +
		".\u062A\n.\f.\x0E.\u062D\v.\x03.\x03.\x05.\u0631\n.\x05.\u0633\n.\x03" +
		".\x07.\u0636\n.\f.\x0E.\u0639\v.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x05/\u0643\n/\x030\x030\x070\u0647\n0\f0\x0E0\u064A\v0\x030\x030\x07" +
		"0\u064E\n0\f0\x0E0\u0651\v0\x030\x030\x070\u0655\n0\f0\x0E0\u0658\v0\x07" +
		"0\u065A\n0\f0\x0E0\u065D\v0\x030\x030\x050\u0661\n0\x050\u0663\n0\x03" +
		"0\x070\u0666\n0\f0\x0E0\u0669\v0\x030\x030\x031\x031\x071\u066F\n1\f1" +
		"\x0E1\u0672\v1\x031\x031\x071\u0676\n1\f1\x0E1\u0679\v1\x031\x031\x07" +
		"1\u067D\n1\f1\x0E1\u0680\v1\x071\u0682\n1\f1\x0E1\u0685\v1\x031\x031\x05" +
		"1\u0689\n1\x051\u068B\n1\x031\x071\u068E\n1\f1\x0E1\u0691\v1\x031\x03" +
		"1\x032\x032\x072\u0697\n2\f2\x0E2\u069A\v2\x032\x032\x072\u069E\n2\f2" +
		"\x0E2\u06A1\v2\x032\x052\u06A4\n2\x033\x033\x073\u06A8\n3\f3\x0E3\u06AB" +
		"\v3\x033\x033\x073\u06AF\n3\f3\x0E3\u06B2\v3\x033\x033\x033\x033\x073" +
		"\u06B8\n3\f3\x0E3\u06BB\v3\x033\x033\x073\u06BF\n3\f3\x0E3\u06C2\v3\x03" +
		"3\x033\x073\u06C6\n3\f3\x0E3\u06C9\v3\x063\u06CB\n3\r3\x0E3\u06CC\x03" +
		"3\x073\u06D0\n3\f3\x0E3\u06D3\v3\x033\x053\u06D6\n3\x053\u06D8\n3\x05" +
		"3\u06DA\n3\x033\x073\u06DD\n3\f3\x0E3\u06E0\v3\x033\x033\x033\x02\x02" +
		"\x03\x0E4\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02\x02\n\x04\x02\x1A\x1AGG\x04\x02  &&\t\x02\x1C\x1D" +
		"\x1F\x1F!%((*+--/0\x05\x02\'\')),,\x06\x02\'\')),,..\x04\x021134\x03\x02" +
		"34\x03\x02\r\x0E\x02\u07EA\x02g\x03\x02\x02\x02\x04\xA4\x03\x02\x02\x02" +
		"\x06\xA8\x03\x02\x02\x02\b\xC6\x03\x02\x02\x02\n\xCB\x03\x02\x02\x02\f" +
		"\xF2\x03\x02\x02\x02\x0E\u011F\x03\x02\x02\x02\x10\u0196\x03\x02\x02\x02" +
		"\x12\u019A\x03\x02\x02\x02\x14\u019E\x03\x02\x02\x02\x16\u01A0\x03\x02" +
		"\x02\x02\x18\u01A2\x03\x02\x02\x02\x1A\u01A4\x03\x02\x02\x02\x1C\u01A7" +
		"\x03\x02\x02\x02\x1E\u01C3\x03\x02\x02\x02 \u01D6\x03\x02\x02\x02\"\u01FE" +
		"\x03\x02\x02\x02$\u0287\x03\x02\x02\x02&\u0289\x03\x02\x02\x02(\u02FF" +
		"\x03\x02\x02\x02*\u0301\x03\x02\x02\x02,\u0322\x03\x02\x02\x02.\u0324" +
		"\x03\x02\x02\x020\u0358\x03\x02\x02\x022\u0364\x03\x02\x02\x024\u0385" +
		"\x03\x02\x02\x026\u03F3\x03\x02\x02\x028\u03F5\x03\x02\x02\x02:\u0443" +
		"\x03\x02\x02\x02<\u0445\x03\x02\x02\x02>\u046F\x03\x02\x02\x02@\u0473" +
		"\x03\x02\x02\x02B\u0477\x03\x02\x02\x02D\u04FF\x03\x02\x02\x02F\u0501" +
		"\x03\x02\x02\x02H\u0505\x03\x02\x02\x02J\u052E\x03\x02\x02\x02L\u0553" +
		"\x03\x02\x02\x02N\u057D\x03\x02\x02\x02P\u058D\x03\x02\x02\x02R\u05CE" +
		"\x03\x02\x02\x02T\u05DE\x03\x02\x02\x02V\u05FE\x03\x02\x02\x02X\u0611" +
		"\x03\x02\x02\x02Z\u0613\x03\x02\x02\x02\\\u0642\x03\x02\x02\x02^\u0644" +
		"\x03\x02\x02\x02`\u066C\x03\x02\x02\x02b\u0694\x03\x02\x02\x02d\u06A5" +
		"\x03\x02\x02\x02fh\x07\x03\x02\x02gf\x03\x02\x02\x02gh\x03\x02\x02\x02" +
		"hl\x03\x02\x02\x02ik\x05\x04\x03\x02ji\x03\x02\x02\x02kn\x03\x02\x02\x02" +
		"lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\x86\x03\x02\x02\x02nl\x03\x02\x02" +
		"\x02os\x05\x06\x04\x02pr\x07G\x02\x02qp\x03\x02\x02\x02ru\x03\x02\x02" +
		"\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02tv\x03\x02\x02\x02us\x03\x02\x02" +
		"\x02vz\x05\x04\x03\x02wy\x07G\x02\x02xw\x03\x02\x02\x02y|\x03\x02\x02" +
		"\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02" +
		"\x02}o\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F\x80" +
		"\x03\x02\x02\x02\x80\x82\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x82\x84" +
		"\x05\x06\x04\x02\x83\x85\x05\x04\x03\x02\x84\x83\x03\x02\x02\x02\x84\x85" +
		"\x03\x02\x02\x02\x85\x87\x03\x02\x02\x02\x86\x7F\x03\x02\x02\x02\x86\x87" +
		"\x03\x02\x02\x02\x87\x9F\x03\x02\x02\x02\x88\x8C\x05\f\x07\x02\x89\x8B" +
		"\x07G\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A" +
		"\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02\x02\x02\x8E\x8C" +
		"\x03\x02\x02\x02\x8F\x93\x05\x04\x03\x02\x90\x92\x07G\x02\x02\x91\x90" +
		"\x03\x02\x02\x02\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94" +
		"\x03\x02\x02\x02\x94\x97\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96\x88" +
		"\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99" +
		"\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\x9D" +
		"\x05\f\x07\x02\x9C\x9E\x05\x04\x03\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E" +
		"\x03\x02\x02\x02\x9E\xA0\x03\x02\x02\x02\x9F\x98\x03\x02\x02\x02\x9F\xA0" +
		"\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x07\x02\x02\x03\xA2\x03" +
		"\x03\x02\x02\x02\xA3\xA5\t\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA6" +
		"\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\x05" +
		"\x03\x02\x02\x02\xA8\xC1\x07\x06\x02\x02\xA9\xAB\x07+\x02\x02\xAA\xA9" +
		"\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD" +
		"\x07\b\x02\x02\xAD\xC0\x07B\x02\x02\xAE\xB2\x07\x14\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\xAF\xB1\x07G\x02\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB4\x03\x02\x02" +
		"\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x03\x02\x02" +
		"\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB9\x05\n\x06\x02\xB6\xB8\x07G\x02\x02" +
		"\xB7\xB6\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02" +
		"\xB9\xBA\x03\x02\x02\x02\xBA\xBC\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02" +
		"\xBC\xBD\x07\x15\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xC0\x05\n\x06\x02" +
		"\xBF\xAA\x03\x02\x02\x02\xBF\xAE\x03\x02\x02\x02\xBF\xBE\x03\x02\x02\x02" +
		"\xC0\xC2\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02" +
		"\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x07\x07\x02\x02\xC4\xC5\x07H\x02\x02" +
		"\xC5\x07\x03\x02\x02\x02\xC6\xC9\x07B\x02\x02\xC7\xC8\x07\b\x02\x02\xC8" +
		"\xCA\x07B\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA" +
		"\t\x03\x02\x02\x02\xCB\xCF\x05\b\x05\x02\xCC\xCE\x07G\x02\x02\xCD\xCC" +
		"\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0" +
		"\x03\x02\x02\x02\xD0\xE2\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD6" +
		"\x07\x1B\x02\x02\xD3\xD5\x07G\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5\xD8" +
		"\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD9" +
		"\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD9\xDD\x05\b\x05\x02\xDA\xDC" +
		"\x07G\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB" +
		"\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD" +
		"\x03\x02\x02\x02\xE0\xD2\x03\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0" +
		"\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE8\x03\x02\x02\x02\xE4\xE2" +
		"\x03\x02\x02\x02\xE5\xE7\x07G\x02\x02\xE6\xE5\x03\x02\x02\x02\xE7\xEA" +
		"\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEC" +
		"\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xED\x07\x1B\x02\x02\xEC\xEB" +
		"\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\v\x03\x02\x02\x02\xEE\xF3" +
		"\x05&\x14\x02\xEF\xF3\x05<\x1F\x02\xF0\xF3\x054\x1B\x02\xF1\xF3\x058\x1D" +
		"\x02\xF2\xEE\x03\x02\x02\x02\xF2\xEF\x03\x02\x02\x02\xF2\xF0\x03\x02\x02" +
		"\x02\xF2\xF1\x03\x02\x02\x02\xF3\r\x03\x02\x02\x02\xF4\xF5\b\b\x01\x02" +
		"\xF5\xF9\x07\x12\x02\x02\xF6\xF8\x07G\x02\x02\xF7\xF6\x03\x02\x02\x02" +
		"\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02" +
		"\xFA\xFC\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\u0100\x05\x0E\b\x02" +
		"\xFD\xFF\x07G\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02" +
		"\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103\x03" +
		"\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103\u0104\x07\x13\x02\x02\u0104" +
		"\u0120\x03\x02\x02\x02\u0105\u0109\x07B\x02\x02\u0106\u0108\x07G\x02\x02" +
		"\u0107\u0106\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109\u0107\x03" +
		"\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010C\x03\x02\x02\x02\u010B" +
		"\u0109\x03\x02\x02\x02\u010C\u010D\x07 \x02\x02\u010D\u0111\x07&\x02\x02" +
		"\u010E\u0110\x07G\x02\x02\u010F\u010E\x03\x02\x02\x02\u0110\u0113\x03" +
		"\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112" +
		"\u0114\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0120\x05\x0E" +
		"\b\f\u0115\u0116\x05\x18\r\x02\u0116\u0117\x05\x0E\b\n\u0117\u0120\x03" +
		"\x02\x02\x02\u0118\u0119\x05\x1E\x10\x02\u0119\u011A\t\x03\x02\x02\u011A" +
		"\u011B\x05\x14\v\x02\u011B\u0120\x03\x02\x02\x02\u011C\u0120\x05\x1E\x10" +
		"\x02\u011D\u0120\x05\\/\x02\u011E\u0120\x05\x1C\x0F\x02\u011F\xF4\x03" +
		"\x02\x02\x02\u011F\u0105\x03\x02\x02\x02\u011F\u0115\x03\x02\x02\x02\u011F" +
		"\u0118\x03\x02\x02\x02\u011F\u011C\x03\x02\x02\x02\u011F\u011D\x03\x02" +
		"\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0180\x03\x02\x02\x02\u0121" +
		"\u0125\f\r\x02\x02\u0122\u0124\x07G\x02\x02\u0123\u0122\x03\x02\x02\x02" +
		"\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03" +
		"\x02\x02\x02\u0126\u0128\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0128" +
		"\u012C\x05\x16\f\x02\u0129\u012B\x07G\x02\x02\u012A\u0129\x03\x02\x02" +
		"\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D" +
		"\x03\x02\x02\x02\u012D\u012F\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02" +
		"\u012F\u0130\x05\x0E\b\r\u0130\u017F\x03\x02\x02\x02\u0131\u0132\f\v\x02" +
		"\x02\u0132\u0136\x07\x12\x02\x02\u0133\u0135\x07G\x02\x02\u0134\u0133" +
		"\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02" +
		"\u0136\u0137\x03\x02\x02\x02\u0137\u0149\x03\x02\x02\x02\u0138\u0136\x03" +
		"\x02\x02\x02\u0139\u013D\x05\x14\v\x02\u013A\u013C\x07G\x02\x02\u013B" +
		"\u013A\x03\x02\x02\x02\u013C\u013F\x03\x02\x02\x02\u013D\u013B\x03\x02" +
		"\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0140\x03\x02\x02\x02\u013F" +
		"\u013D\x03\x02\x02\x02\u0140\u0144\x07\x1B\x02\x02\u0141\u0143\x07G\x02" +
		"\x02\u0142\u0141\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142" +
		"\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02" +
		"\u0146\u0144\x03\x02\x02\x02\u0147\u0139\x03\x02\x02\x02\u0148\u014B\x03" +
		"\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A" +
		"\u014C\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C\u014E\x05\x14" +
		"\v\x02\u014D\u014F\x07\x1B\x02\x02\u014E\u014D\x03\x02\x02\x02\u014E\u014F" +
		"\x03\x02\x02\x02\u014F\u0153\x03\x02\x02\x02\u0150\u0152\x07G\x02\x02" +
		"\u0151\u0150\x03\x02\x02\x02\u0152\u0155\x03\x02\x02\x02\u0153\u0151\x03" +
		"\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0156\x03\x02\x02\x02\u0155" +
		"\u0153\x03\x02\x02\x02\u0156\u0157\x07\x13\x02\x02\u0157\u017F\x03\x02" +
		"\x02\x02\u0158\u0159\f\t\x02\x02\u0159\u017F\x05\x1A\x0E\x02\u015A\u015B" +
		"\f\b\x02\x02\u015B\u015F\x07\x16\x02\x02\u015C\u015E\x07G\x02\x02\u015D" +
		"\u015C\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F\u015D\x03\x02" +
		"\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0162\x03\x02\x02\x02\u0161" +
		"\u015F\x03\x02\x02\x02\u0162\u0166\x05\x0E\b\x02\u0163\u0165\x07G\x02" +
		"\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164" +
		"\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02" +
		"\u0168\u0166\x03\x02\x02\x02\u0169\u016A\x07\x17\x02\x02\u016A\u017F\x03" +
		"\x02\x02\x02\u016B\u017A\f\x07\x02\x02\u016C\u016E\x07G\x02\x02\u016D" +
		"\u016C\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02" +
		"\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0172\x03\x02\x02\x02\u0171" +
		"\u016F\x03\x02\x02\x02\u0172\u0176\x07E\x02\x02\u0173\u0175\x07G\x02\x02" +
		"\u0174\u0173\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03" +
		"\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0179\x03\x02\x02\x02\u0178" +
		"\u0176\x03\x02\x02\x02\u0179\u017B\x07B\x02\x02\u017A\u016F\x03\x02\x02" +
		"\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D" +
		"\x03\x02\x02\x02\u017D\u017F\x03\x02\x02\x02\u017E\u0121\x03\x02\x02\x02" +
		"\u017E\u0131\x03\x02\x02\x02\u017E\u0158\x03\x02\x02\x02\u017E\u015A\x03" +
		"\x02\x02\x02\u017E\u016B\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180" +
		"\u017E\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\x0F\x03\x02\x02" +
		"\x02\u0182\u0180\x03\x02\x02\x02\u0183\u0197\x05\x0E\b\x02\u0184\u0197" +
		"\x05 \x11\x02\u0185\u0197\x05P)\x02\u0186\u0197\x05J&\x02\u0187\u0197" +
		"\x05L\'\x02\u0188\u0197\x05N(\x02\u0189\u0197\x05R*\x02\u018A\u0197\x05" +
		"V,\x02\u018B\u0197\x05X-\x02\u018C\u0194\x07\x11\x02\x02\u018D\u018F\x07" +
		"G\x02\x02\u018E\u018D\x03\x02\x02\x02\u018F\u0192\x03\x02\x02\x02\u0190" +
		"\u018E\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0193\x03\x02" +
		"\x02\x02\u0192\u0190\x03\x02\x02\x02\u0193\u0195\x05\x14\v\x02\u0194\u0190" +
		"\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0197\x03\x02\x02\x02" +
		"\u0196\u0183\x03\x02\x02\x02\u0196\u0184\x03\x02\x02\x02\u0196\u0185\x03" +
		"\x02\x02\x02\u0196\u0186\x03\x02\x02\x02\u0196\u0187\x03\x02\x02\x02\u0196" +
		"\u0188\x03\x02\x02\x02\u0196\u0189\x03\x02\x02\x02\u0196\u018A\x03\x02" +
		"\x02\x02\u0196\u018B\x03\x02\x02\x02\u0196\u018C\x03\x02\x02\x02\u0197" +
		"\x11\x03\x02\x02\x02\u0198\u019B\x05\x0E\b\x02\u0199\u019B\x05J&\x02\u019A" +
		"\u0198\x03\x02\x02\x02\u019A\u0199\x03\x02\x02\x02\u019B\x13\x03\x02\x02" +
		"\x02\u019C\u019F\x05P)\x02\u019D\u019F\x05\x0E\b\x02\u019E\u019C\x03\x02" +
		"\x02\x02\u019E\u019D\x03\x02\x02\x02\u019F\x15\x03\x02\x02\x02\u01A0\u01A1" +
		"\t\x04\x02\x02\u01A1\x17\x03\x02\x02\x02\u01A2\u01A3\t\x05\x02\x02\u01A3" +
		"\x19\x03\x02\x02\x02\u01A4\u01A5\t\x06\x02\x02\u01A5\x1B\x03\x02\x02\x02" +
		"\u01A6\u01A8\x07\x18\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03" +
		"\x02\x02\x02\u01A8\u01AC\x03\x02\x02\x02\u01A9\u01AB\x07G\x02\x02\u01AA" +
		"\u01A9\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02" +
		"\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x03\x02\x02\x02\u01AE" +
		"\u01AC\x03\x02\x02\x02\u01AF\u01C0\x07B\x02\x02\u01B0\u01B2\x07G\x02\x02" +
		"\u01B1\u01B0\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03" +
		"\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5" +
		"\u01B3\x03\x02\x02\x02\u01B6\u01BA\x07\x18\x02\x02\u01B7\u01B9\x07G\x02" +
		"\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA\u01B8" +
		"\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BD\x03\x02\x02\x02" +
		"\u01BC\u01BA\x03\x02\x02\x02\u01BD\u01BF\x07B\x02\x02\u01BE\u01B3\x03" +
		"\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0" +
		"\u01C1\x03\x02\x02\x02\u01C1\x1D\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02" +
		"\x02\u01C3\u01D2\x07?\x02\x02\u01C4\u01C6\x07G\x02\x02\u01C5\u01C4\x03" +
		"\x02\x02\x02\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7" +
		"\u01C8\x03\x02\x02\x02\u01C8\u01CA\x03\x02\x02\x02\u01C9\u01C7\x03\x02" +
		"\x02\x02\u01CA\u01CE\x07E\x02\x02\u01CB\u01CD\x07G\x02\x02\u01CC\u01CB" +
		"\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01CC\x03\x02\x02\x02" +
		"\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03\x02\x02\x02\u01D0\u01CE\x03" +
		"\x02\x02\x02\u01D1\u01D3\x07B\x02\x02\u01D2\u01C7\x03\x02\x02\x02\u01D3" +
		"\u01D4\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02" +
		"\x02\x02\u01D5\x1F\x03\x02\x02\x02\u01D6\u01DA\x07\f\x02\x02\u01D7\u01D9" +
		"\x07G\x02\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02" +
		"\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01ED\x03" +
		"\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01E1\x05\"\x12\x02\u01DE" +
		"\u01E0\x07G\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01E0\u01E3\x03\x02\x02" +
		"\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E4" +
		"\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E4\u01E8\x07\x19\x02\x02" +
		"\u01E5\u01E7\x07G\x02\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7\u01EA\x03" +
		"\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9" +
		"\u01EC\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB\u01DD\x03\x02" +
		"\x02\x02\u01EC\u01EF\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED" +
		"\u01EE\x03\x02\x02\x02\u01EE\u01F0\x03\x02\x02\x02\u01EF\u01ED\x03\x02" +
		"\x02\x02\u01F0\u01F1\x05\"\x12\x02\u01F1!\x03\x02\x02\x02\u01F2\u01F3" +
		"\x07B\x02\x02\u01F3\u01F4\x07\x19\x02\x02\u01F4\u01FF\x05D#\x02\u01F5" +
		"\u01F8\x07B\x02\x02\u01F6\u01F8\x05$\x13\x02\u01F7\u01F5\x03\x02\x02\x02" +
		"\u01F7\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FC\x07" +
		" \x02\x02\u01FA\u01FD\x05\x0E\b\x02\u01FB\u01FD\x05T+\x02\u01FC\u01FA" +
		"\x03\x02\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FD\u01FF\x03\x02\x02\x02" +
		"\u01FE\u01F2\x03\x02\x02\x02\u01FE\u01F7\x03\x02\x02\x02\u01FF#\x03\x02" +
		"\x02\x02\u0200\u0204\x07\x16\x02\x02\u0201\u0203\x07G\x02\x02\u0202\u0201" +
		"\x03\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02" +
		"\u0204\u0205\x03\x02\x02\x02\u0205\u0224\x03\x02\x02\x02\u0206\u0204\x03" +
		"\x02\x02\x02\u0207\u020A\x07B\x02\x02\u0208\u020A\x05$\x13\x02\u0209\u0207" +
		"\x03\x02\x02\x02\u0209\u0208\x03\x02\x02\x02\u020A\u020E\x03\x02\x02\x02" +
		"\u020B\u020D\x07G\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D\u0210\x03" +
		"\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020F" +
		"\u0211\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0215\x07\x1B" +
		"\x02\x02\u0212\u0214\x07G\x02\x02\u0213\u0212\x03\x02\x02\x02\u0214\u0217" +
		"\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02" +
		"\u0216\u0219\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0218\u0209\x03" +
		"\x02\x02\x02\u0219\u021C\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A" +
		"\u021B\x03\x02\x02\x02\u021B\u021F\x03\x02\x02\x02\u021C\u021A\x03\x02" +
		"\x02\x02\u021D\u0220\x07B\x02\x02\u021E\u0220\x05$\x13\x02\u021F\u021D" +
		"\x03\x02\x02\x02\u021F\u021E\x03\x02\x02\x02\u0220\u0222\x03\x02\x02\x02" +
		"\u0221\u0223\x07\x1B\x02\x02\u0222\u0221\x03\x02\x02\x02\u0222\u0223\x03" +
		"\x02\x02\x02\u0223\u0225\x03\x02\x02\x02\u0224\u021A\x03\x02\x02\x02\u0224" +
		"\u0225\x03\x02\x02\x02\u0225\u0229\x03\x02\x02\x02\u0226\u0228\x07G\x02" +
		"\x02\u0227\u0226\x03\x02\x02\x02\u0228\u022B\x03\x02\x02\x02\u0229\u0227" +
		"\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022C\x03\x02\x02\x02" +
		"\u022B\u0229\x03\x02\x02\x02\u022C\u0288\x07\x17\x02\x02\u022D\u0231\x07" +
		"\x12\x02\x02\u022E\u0230\x07G\x02\x02\u022F\u022E\x03\x02\x02\x02\u0230" +
		"\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232\x03\x02" +
		"\x02\x02\u0232\u0251\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234" +
		"\u0237\x07B\x02\x02\u0235\u0237\x05$\x13\x02\u0236\u0234\x03\x02\x02\x02" +
		"\u0236\u0235\x03\x02\x02\x02\u0237\u023B\x03\x02\x02\x02\u0238\u023A\x07" +
		"G\x02\x02\u0239\u0238\x03\x02\x02\x02\u023A\u023D\x03\x02\x02\x02\u023B" +
		"\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023E\x03\x02" +
		"\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E\u0242\x07\x1B\x02\x02\u023F" +
		"\u0241\x07G\x02\x02\u0240\u023F\x03\x02\x02\x02\u0241\u0244\x03\x02\x02" +
		"\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0246" +
		"\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0236\x03\x02\x02\x02" +
		"\u0246\u0249\x03\x02\x02\x02\u0247\u0245\x03\x02\x02\x02\u0247\u0248\x03" +
		"\x02\x02\x02\u0248\u024C\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u024A" +
		"\u024D\x07B\x02\x02\u024B\u024D\x05$\x13\x02\u024C\u024A\x03\x02\x02\x02" +
		"\u024C\u024B\x03\x02\x02\x02\u024D\u024F\x03\x02\x02\x02\u024E\u0250\x07" +
		"\x1B\x02\x02\u024F\u024E\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250" +
		"\u0252\x03\x02\x02\x02\u0251\u0247\x03\x02\x02\x02\u0251\u0252\x03\x02" +
		"\x02\x02\u0252\u0256\x03\x02\x02\x02\u0253\u0255\x07G\x02\x02\u0254\u0253" +
		"\x03\x02\x02\x02\u0255\u0258\x03\x02\x02\x02\u0256\u0254\x03\x02\x02\x02" +
		"\u0256\u0257\x03\x02\x02\x02\u0257\u0259\x03\x02\x02\x02\u0258\u0256\x03" +
		"\x02\x02\x02\u0259\u0288\x07\x13\x02\x02\u025A\u025E\x07\x14\x02\x02\u025B" +
		"\u025D\x07G\x02\x02\u025C\u025B\x03\x02\x02\x02\u025D\u0260\x03\x02\x02" +
		"\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\u027E" +
		"\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0261\u0264\x07B\x02\x02" +
		"\u0262\u0264\x05$\x13\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0262\x03" +
		"\x02\x02\x02\u0264\u0268\x03\x02\x02\x02\u0265\u0267\x07G\x02\x02\u0266" +
		"\u0265\x03\x02\x02\x02\u0267\u026A\x03\x02\x02\x02\u0268\u0266\x03\x02" +
		"\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026B\x03\x02\x02\x02\u026A" +
		"\u0268\x03\x02\x02\x02\u026B\u026F\x07\x1B\x02\x02\u026C\u026E\x07G\x02" +
		"\x02\u026D\u026C\x03\x02\x02\x02\u026E\u0271\x03\x02\x02\x02\u026F\u026D" +
		"\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u0273\x03\x02\x02\x02" +
		"\u0271\u026F\x03\x02\x02\x02\u0272\u0263\x03\x02\x02\x02\u0273\u0276\x03" +
		"\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275" +
		"\u0279\x03\x02\x02\x02\u0276\u0274\x03\x02\x02\x02\u0277\u027A\x07B\x02" +
		"\x02\u0278\u027A\x05$\x13\x02\u0279\u0277\x03\x02\x02\x02\u0279\u0278" +
		"\x03\x02\x02\x02\u027A\u027C\x03\x02\x02\x02\u027B\u027D\x07\x1B\x02\x02" +
		"\u027C\u027B\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027F\x03" +
		"\x02\x02\x02\u027E\u0274\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F" +
		"\u0283\x03\x02\x02\x02\u0280\u0282\x07G\x02\x02\u0281\u0280\x03\x02\x02" +
		"\x02\u0282\u0285\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284" +
		"\x03\x02\x02\x02\u0284\u0286\x03\x02\x02\x02\u0285\u0283\x03\x02\x02\x02" +
		"\u0286\u0288\x07\x15\x02\x02\u0287\u0200\x03\x02\x02\x02\u0287\u022D\x03" +
		"\x02\x02\x02\u0287\u025A\x03\x02\x02\x02\u0288%\x03\x02\x02\x02\u0289" +
		"\u028D\t\x07\x02\x02\u028A\u028C\x07G\x02\x02\u028B\u028A\x03\x02\x02" +
		"\x02\u028C\u028F\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E" +
		"\x03\x02\x02\x02\u028E\u0290\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02" +
		"\u0290\u0294\x05\x1C\x0F\x02\u0291\u0293\x07G\x02\x02\u0292\u0291\x03" +
		"\x02\x02\x02\u0293\u0296\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294" +
		"\u0295\x03\x02\x02\x02\u0295\u0297\x03\x02\x02\x02\u0296\u0294\x03\x02" +
		"\x02\x02\u0297\u029B\x05.\x18\x02\u0298\u029A\x07G\x02\x02\u0299\u0298" +
		"\x03\x02\x02\x02\u029A\u029D\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02" +
		"\u029B\u029C\x03\x02\x02\x02\u029C\u029E\x03\x02\x02\x02\u029D\u029B\x03" +
		"\x02\x02\x02\u029E\u02A2\x050\x19\x02\u029F\u02A1\x07G\x02\x02\u02A0\u029F" +
		"\x03\x02\x02\x02\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02" +
		"\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A5\x03\x02\x02\x02\u02A4\u02A2\x03" +
		"\x02\x02\x02\u02A5\u02A6\x05J&\x02\u02A6\'\x03\x02\x02\x02\u02A7\u02AF" +
		"\x072\x02\x02\u02A8\u02AA\x07G\x02\x02\u02A9\u02A8\x03\x02\x02\x02\u02AA" +
		"\u02AD\x03\x02\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AB\u02AC\x03\x02" +
		"\x02\x02\u02AC\u02AE\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AE" +
		"\u02B0\x05\x1C\x0F\x02\u02AF\u02AB\x03\x02\x02\x02\u02AF\u02B0\x03\x02" +
		"\x02\x02\u02B0\u02B4\x03\x02\x02\x02\u02B1\u02B3\x07G\x02\x02\u02B2\u02B1" +
		"\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02" +
		"\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B7\x03\x02\x02\x02\u02B6\u02B4\x03" +
		"\x02\x02\x02\u02B7\u02BF\x05.\x18\x02\u02B8\u02BA\x07G\x02\x02\u02B9\u02B8" +
		"\x03\x02\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02" +
		"\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BE\x03\x02\x02\x02\u02BD\u02BB\x03" +
		"\x02\x02\x02\u02BE\u02C0\x050\x19\x02\u02BF\u02BB\x03\x02\x02\x02\u02BF" +
		"\u02C0\x03\x02\x02\x02\u02C0\u02C4\x03\x02\x02\x02\u02C1\u02C3\x07G\x02" +
		"\x02\u02C2\u02C1\x03\x02\x02\x02\u02C3\u02C6\x03\x02\x02\x02\u02C4\u02C2" +
		"\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C7\x03\x02\x02\x02" +
		"\u02C6\u02C4\x03\x02\x02\x02\u02C7\u02C8\x05J&\x02\u02C8\u0300\x03\x02" +
		"\x02\x02\u02C9\u02CD\t\x07\x02\x02\u02CA\u02CC\x07G\x02\x02\u02CB\u02CA" +
		"\x03\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02" +
		"\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D0\x03\x02\x02\x02\u02CF\u02CD\x03" +
		"\x02\x02\x02\u02D0\u0300\x05*\x16\x02\u02D1\u02D5\t\b\x02\x02\u02D2\u02D4" +
		"\x07G\x02\x02\u02D3\u02D2\x03\x02\x02\x02\u02D4\u02D7\x03\x02\x02\x02" +
		"\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D8\x03" +
		"\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D8\u02DC\x07\x14\x02\x02\u02D9" +
		"\u02DB\x07G\x02\x02\u02DA\u02D9\x03\x02\x02\x02\u02DB\u02DE\x03\x02\x02" +
		"\x02\u02DC\u02DA\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02F6" +
		"\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DF\u02E3\x05*\x16\x02" +
		"\u02E0\u02E2\x07G\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E2\u02E5\x03" +
		"\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4" +
		"\u02E6\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E6\u02EA\x05\x04" +
		"\x03\x02\u02E7\u02E9\x07G\x02\x02\u02E8\u02E7\x03\x02\x02\x02\u02E9\u02EC" +
		"\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02" +
		"\u02EB\u02EE\x03\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED\u02DF\x03" +
		"\x02\x02\x02\u02EE\u02F1\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02EF" +
		"\u02F0\x03\x02\x02\x02\u02F0\u02F2\x03\x02\x02\x02\u02F1\u02EF\x03\x02" +
		"\x02\x02\u02F2\u02F4\x05*\x16\x02\u02F3\u02F5\x05\x04\x03\x02\u02F4\u02F3" +
		"\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u02F7\x03\x02\x02\x02" +
		"\u02F6\u02EF\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02FB\x03" +
		"\x02\x02\x02\u02F8\u02FA\x07G\x02\x02\u02F9\u02F8\x03\x02\x02\x02\u02FA" +
		"\u02FD\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FB\u02FC\x03\x02" +
		"\x02\x02\u02FC\u02FE\x03\x02\x02\x02\u02FD\u02FB\x03\x02\x02\x02\u02FE" +
		"\u0300\x07\x15\x02\x02\u02FF\u02A7\x03\x02\x02\x02\u02FF\u02C9\x03\x02" +
		"\x02\x02\u02FF\u02D1\x03\x02\x02\x02\u0300)\x03\x02\x02\x02\u0301\u0305" +
		"\x05,\x17\x02\u0302\u0304\x07G\x02\x02\u0303\u0302\x03\x02\x02\x02\u0304" +
		"\u0307\x03\x02\x02\x02\u0305\u0303\x03\x02\x02\x02\u0305\u0306\x03\x02" +
		"\x02\x02\u0306\u0308\x03\x02\x02\x02\u0307\u0305\x03\x02\x02\x02\u0308" +
		"\u030C\x05.\x18\x02\u0309\u030B\x07G\x02\x02\u030A\u0309\x03\x02\x02\x02" +
		"\u030B\u030E\x03\x02\x02\x02\u030C\u030A\x03\x02\x02\x02\u030C\u030D\x03" +
		"\x02\x02\x02\u030D\u0316\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030F" +
		"\u0311\x07G\x02\x02\u0310\u030F\x03\x02\x02\x02\u0311\u0314\x03\x02\x02" +
		"\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0315" +
		"\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0315\u0317\x050\x19\x02" +
		"\u0316\u0312\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u031B\x03" +
		"\x02\x02\x02\u0318\u031A\x07G\x02\x02\u0319\u0318\x03\x02\x02\x02\u031A" +
		"\u031D\x03\x02\x02\x02\u031B\u0319\x03\x02\x02\x02\u031B\u031C\x03\x02" +
		"\x02\x02\u031C\u031E\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031E" +
		"\u031F\x05J&\x02\u031F+\x03\x02\x02\x02\u0320\u0323\x05\x1C\x0F\x02\u0321" +
		"\u0323\x072\x02\x02\u0322\u0320\x03\x02\x02\x02\u0322\u0321\x03\x02\x02" +
		"\x02\u0323-\x03\x02\x02\x02\u0324\u0328\x07\x12\x02\x02\u0325\u0327\x07" +
		"G\x02\x02\u0326\u0325\x03\x02\x02\x02\u0327\u032A\x03\x02\x02\x02\u0328" +
		"\u0326\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u0342\x03\x02" +
		"\x02\x02\u032A\u0328\x03\x02\x02\x02\u032B\u032F\x052\x1A\x02\u032C\u032E" +
		"\x07G\x02\x02\u032D\u032C\x03\x02\x02\x02\u032E\u0331\x03\x02\x02\x02" +
		"\u032F\u032D\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\u0332\x03" +
		"\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0332\u0336\x07\x1B\x02\x02\u0333" +
		"\u0335\x07G\x02\x02\u0334\u0333\x03\x02\x02\x02\u0335\u0338\x03\x02\x02" +
		"\x02\u0336\u0334\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u033A" +
		"\x03\x02\x02\x02\u0338\u0336\x03\x02\x02\x02\u0339\u032B\x03\x02\x02\x02" +
		"\u033A\u033D\x03\x02\x02\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033C\x03" +
		"\x02\x02\x02\u033C\u033E\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033E" +
		"\u0340\x052\x1A\x02\u033F\u0341\x07\x1B\x02\x02\u0340\u033F\x03\x02\x02" +
		"\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0343\x03\x02\x02\x02\u0342\u033B" +
		"\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343\u0347\x03\x02\x02\x02" +
		"\u0344\u0346\x07G\x02\x02\u0345\u0344\x03\x02\x02\x02\u0346\u0349\x03" +
		"\x02\x02\x02\u0347\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348" +
		"\u034B\x03\x02\x02\x02\u0349\u0347\x03\x02\x02\x02\u034A\u034C\x07\x1B" +
		"\x02\x02\u034B\u034A\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C" +
		"\u0350\x03\x02\x02\x02\u034D\u034F\x07G\x02\x02\u034E\u034D\x03\x02\x02" +
		"\x02\u034F\u0352\x03\x02\x02\x02\u0350\u034E\x03\x02\x02\x02\u0350\u0351" +
		"\x03\x02\x02\x02\u0351\u0353\x03\x02\x02\x02\u0352\u0350\x03\x02\x02\x02" +
		"\u0353\u0354\x07\x13\x02\x02\u0354/\x03\x02\x02\x02\u0355\u0357\x07G\x02" +
		"\x02\u0356\u0355\x03\x02\x02\x02\u0357\u035A\x03\x02\x02\x02\u0358\u0356" +
		"\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u035B\x03\x02\x02\x02" +
		"\u035A\u0358\x03\x02\x02\x02\u035B\u035F\x07\x1E\x02\x02\u035C\u035E\x07" +
		"G\x02\x02\u035D\u035C\x03\x02\x02\x02\u035E\u0361\x03\x02\x02\x02\u035F" +
		"\u035D\x03\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360\u0362\x03\x02" +
		"\x02\x02\u0361\u035F\x03\x02\x02\x02\u0362\u0363\x05D#\x02\u03631\x03" +
		"\x02\x02\x02\u0364\u0373\x05\x1C\x0F\x02\u0365\u0367\x07G\x02\x02\u0366";
	private static readonly _serializedATNSegment2: string =
		"\u0365\x03\x02\x02\x02\u0367\u036A\x03\x02\x02\x02\u0368\u0366\x03\x02" +
		"\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036B\x03\x02\x02\x02\u036A" +
		"\u0368\x03\x02\x02\x02\u036B\u036F\x07\x19\x02\x02\u036C\u036E\x07G\x02" +
		"\x02\u036D\u036C\x03\x02\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u036D" +
		"\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0372\x03\x02\x02\x02" +
		"\u0371\u036F\x03\x02\x02\x02\u0372\u0374\x05D#\x02\u0373\u0368\x03\x02" +
		"\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0383\x03\x02\x02\x02\u0375" +
		"\u0377\x07G\x02\x02\u0376\u0375\x03\x02\x02\x02\u0377\u037A\x03\x02\x02" +
		"\x02\u0378\u0376\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379\u037B" +
		"\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037B\u037F\x07 \x02\x02" +
		"\u037C\u037E\x07G\x02\x02\u037D\u037C\x03\x02\x02\x02\u037E\u0381\x03" +
		"\x02\x02\x02\u037F\u037D\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u0380" +
		"\u0382\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0382\u0384\x05\x0E" +
		"\b\x02\u0383\u0378\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u03843" +
		"\x03\x02\x02\x02\u0385\u0389\x075\x02\x02\u0386\u0388\x07G\x02\x02\u0387" +
		"\u0386\x03\x02\x02\x02\u0388\u038B\x03\x02\x02\x02\u0389\u0387\x03\x02" +
		"\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u038C\x03\x02\x02\x02\u038B" +
		"\u0389\x03\x02\x02\x02\u038C\u0390\x07B\x02\x02\u038D\u038F\x07G\x02\x02" +
		"\u038E\u038D\x03\x02\x02\x02\u038F\u0392\x03\x02\x02\x02\u0390\u038E\x03" +
		"\x02\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391\u039B\x03\x02\x02\x02\u0392" +
		"\u0390\x03\x02\x02\x02\u0393\u0397\x07;\x02\x02\u0394\u0396\x07G\x02\x02" +
		"\u0395\u0394\x03\x02\x02\x02\u0396\u0399\x03\x02\x02\x02\u0397\u0395\x03" +
		"\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u039A\x03\x02\x02\x02\u0399" +
		"\u0397\x03\x02\x02\x02\u039A\u039C\x07B\x02\x02\u039B\u0393\x03\x02\x02" +
		"\x02\u039B\u039C\x03\x02\x02\x02\u039C\u03A0\x03\x02\x02\x02\u039D\u039F" +
		"\x07G\x02\x02\u039E\u039D\x03\x02\x02\x02\u039F\u03A2\x03\x02\x02\x02" +
		"\u03A0\u039E\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03BE\x03" +
		"\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A3\u03A7\x07:\x02\x02\u03A4" +
		"\u03A6\x07G\x02\x02\u03A5\u03A4\x03\x02\x02\x02\u03A6\u03A9\x03\x02\x02" +
		"\x02\u03A7\u03A5\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03BA" +
		"\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03AA\u03AE\x07B\x02\x02" +
		"\u03AB\u03AD\x07G\x02\x02\u03AC\u03AB\x03\x02\x02\x02\u03AD\u03B0\x03" +
		"\x02\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF" +
		"\u03B1\x03\x02\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B1\u03B5\x07\x1B" +
		"\x02\x02\u03B2\u03B4\x07G\x02\x02\u03B3\u03B2\x03\x02\x02\x02\u03B4\u03B7" +
		"\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02" +
		"\u03B6\u03B9\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\u03AA\x03" +
		"\x02\x02\x02\u03B9\u03BC\x03\x02\x02\x02\u03BA\u03B8\x03\x02\x02\x02\u03BA" +
		"\u03BB\x03\x02\x02\x02\u03BB\u03BD\x03\x02\x02\x02\u03BC\u03BA\x03\x02" +
		"\x02\x02\u03BD\u03BF\x07B\x02\x02\u03BE\u03A3\x03\x02\x02\x02\u03BE\u03BF" +
		"\x03\x02\x02\x02\u03BF\u03C3\x03\x02\x02\x02\u03C0\u03C2\x07G\x02\x02" +
		"\u03C1\u03C0\x03\x02\x02\x02\u03C2\u03C5\x03\x02\x02\x02\u03C3\u03C1\x03" +
		"\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03C6\x03\x02\x02\x02\u03C5" +
		"\u03C3\x03\x02\x02\x02\u03C6\u03CA\x07\x14\x02\x02\u03C7\u03C9\x07G\x02" +
		"\x02\u03C8\u03C7\x03\x02\x02\x02\u03C9\u03CC\x03\x02\x02\x02\u03CA\u03C8" +
		"\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB\u03E4\x03\x02\x02\x02" +
		"\u03CC\u03CA\x03\x02\x02\x02\u03CD\u03D1\x056\x1C\x02\u03CE\u03D0\x07" +
		"G\x02\x02\u03CF\u03CE\x03\x02\x02\x02\u03D0\u03D3\x03\x02\x02\x02\u03D1" +
		"\u03CF\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\u03D4\x03\x02" +
		"\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D4\u03D8\x05\x04\x03\x02\u03D5" +
		"\u03D7\x07G\x02\x02\u03D6\u03D5\x03\x02\x02\x02\u03D7\u03DA\x03\x02\x02" +
		"\x02\u03D8\u03D6\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03DC" +
		"\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DB\u03CD\x03\x02\x02\x02" +
		"\u03DC\u03DF\x03\x02\x02\x02\u03DD\u03DB\x03\x02\x02\x02\u03DD\u03DE\x03" +
		"\x02\x02\x02\u03DE\u03E0\x03\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03E0" +
		"\u03E2\x056\x1C\x02\u03E1\u03E3\x05\x04\x03\x02\u03E2\u03E1\x03\x02\x02" +
		"\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E5\x03\x02\x02\x02\u03E4\u03DD" +
		"\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E9\x03\x02\x02\x02" +
		"\u03E6\u03E8\x07G\x02\x02\u03E7\u03E6\x03\x02\x02\x02\u03E8\u03EB\x03" +
		"\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA" +
		"\u03EC\x03\x02\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EC\u03ED\x07\x15" +
		"\x02\x02\u03ED5\x03\x02\x02\x02\u03EE\u03F4\x05> \x02\u03EF\u03F4\x05" +
		"@!\x02\u03F0\u03F4\x05<\x1F\x02\u03F1\u03F4\x05B\"\x02\u03F2\u03F4\x05" +
		"(\x15\x02\u03F3\u03EE\x03\x02\x02\x02\u03F3\u03EF\x03\x02\x02\x02\u03F3" +
		"\u03F0\x03\x02\x02\x02\u03F3\u03F1\x03\x02\x02\x02\u03F3\u03F2\x03\x02" +
		"\x02\x02\u03F47\x03\x02\x02\x02\u03F5\u03F9\x079\x02\x02\u03F6\u03F8\x07" +
		"G\x02\x02\u03F7\u03F6\x03\x02\x02\x02\u03F8\u03FB\x03\x02\x02\x02\u03F9" +
		"\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\u03FC\x03\x02" +
		"\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FC\u0400\x07B\x02\x02\u03FD\u03FF" +
		"\x07G\x02\x02\u03FE\u03FD\x03\x02\x02\x02\u03FF\u0402\x03\x02\x02\x02" +
		"\u0400\u03FE\x03\x02\x02\x02\u0400\u0401\x03\x02\x02\x02\u0401\u041E\x03" +
		"\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0403\u0407\x07;\x02\x02\u0404" +
		"\u0406\x07G\x02\x02\u0405\u0404\x03\x02\x02\x02\u0406\u0409\x03\x02\x02" +
		"\x02\u0407\u0405\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u041A" +
		"\x03\x02\x02\x02\u0409\u0407\x03\x02\x02\x02\u040A\u040E\x07B\x02\x02" +
		"\u040B\u040D\x07G\x02\x02\u040C\u040B\x03\x02\x02\x02\u040D\u0410\x03" +
		"\x02\x02\x02\u040E\u040C\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02\u040F" +
		"\u0411\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0411\u0415\x07\x1B" +
		"\x02\x02\u0412\u0414\x07G\x02\x02\u0413\u0412\x03\x02\x02\x02\u0414\u0417" +
		"\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02" +
		"\u0416\u0419\x03\x02\x02\x02\u0417\u0415\x03\x02\x02\x02\u0418\u040A\x03" +
		"\x02\x02\x02\u0419\u041C\x03\x02\x02\x02\u041A\u0418\x03\x02\x02\x02\u041A" +
		"\u041B\x03\x02\x02\x02\u041B\u041D\x03\x02\x02\x02\u041C\u041A\x03\x02" +
		"\x02\x02\u041D\u041F\x07B\x02\x02\u041E\u0403\x03\x02\x02\x02\u041E\u041F" +
		"\x03\x02\x02\x02\u041F\u0423\x03\x02\x02\x02\u0420\u0422\x07G\x02\x02" +
		"\u0421\u0420\x03\x02\x02\x02\u0422\u0425\x03\x02\x02\x02\u0423\u0421\x03" +
		"\x02\x02\x02\u0423\u0424\x03\x02\x02\x02\u0424\u043D\x03\x02\x02\x02\u0425" +
		"\u0423\x03\x02\x02\x02\u0426\u042A\x05:\x1E\x02\u0427\u0429\x07G\x02\x02" +
		"\u0428\u0427\x03\x02\x02\x02\u0429\u042C\x03\x02\x02\x02\u042A\u0428\x03" +
		"\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u042D\x03\x02\x02\x02\u042C" +
		"\u042A\x03\x02\x02\x02\u042D\u0431\x05\x04\x03\x02\u042E\u0430\x07G\x02" +
		"\x02\u042F\u042E\x03\x02\x02\x02\u0430\u0433\x03\x02\x02\x02\u0431\u042F" +
		"\x03\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0435\x03\x02\x02\x02" +
		"\u0433\u0431\x03\x02\x02\x02\u0434\u0426\x03\x02\x02\x02\u0435\u0438\x03" +
		"\x02\x02\x02\u0436\u0434\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437" +
		"\u0439\x03\x02\x02\x02\u0438\u0436\x03\x02\x02\x02\u0439\u043B\x05:\x1E" +
		"\x02\u043A\u043C\x05\x04\x03\x02\u043B\u043A\x03\x02\x02\x02\u043B\u043C" +
		"\x03\x02\x02\x02\u043C\u043E\x03\x02\x02\x02\u043D\u0436\x03\x02\x02\x02" +
		"\u043D\u043E\x03\x02\x02\x02\u043E9\x03\x02\x02\x02\u043F\u0444\x05> " +
		"\x02\u0440\u0444\x05@!\x02\u0441\u0444\x05<\x1F\x02\u0442\u0444\x05(\x15" +
		"\x02\u0443\u043F\x03\x02\x02\x02\u0443\u0440\x03\x02\x02\x02\u0443\u0441" +
		"\x03\x02\x02\x02\u0443\u0442\x03\x02\x02\x02\u0444;\x03\x02\x02\x02\u0445" +
		"\u0446\x077\x02\x02\u0446\u0447\x07B\x02\x02\u0447\u044B\x07\x14\x02\x02" +
		"\u0448\u044A\x07G\x02\x02\u0449\u0448\x03\x02\x02\x02\u044A\u044D\x03" +
		"\x02\x02\x02\u044B\u0449\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C" +
		"\u0465\x03\x02\x02\x02\u044D\u044B\x03\x02\x02\x02\u044E\u0452\x05F$\x02" +
		"\u044F\u0451\x07G\x02\x02\u0450\u044F\x03\x02\x02\x02\u0451\u0454\x03" +
		"\x02\x02\x02\u0452\u0450\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453" +
		"\u0455\x03\x02\x02\x02\u0454\u0452\x03\x02\x02\x02\u0455\u0459\x07\x1B" +
		"\x02\x02\u0456\u0458\x07G\x02\x02\u0457\u0456\x03\x02\x02\x02\u0458\u045B" +
		"\x03\x02\x02\x02\u0459\u0457\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02" +
		"\u045A\u045D\x03\x02\x02\x02\u045B\u0459\x03\x02\x02\x02\u045C\u044E\x03" +
		"\x02\x02\x02\u045D\u0460\x03\x02\x02\x02\u045E\u045C\x03\x02\x02\x02\u045E" +
		"\u045F\x03\x02\x02\x02\u045F\u0461\x03\x02\x02\x02\u0460\u045E\x03\x02" +
		"\x02\x02\u0461\u0463\x05F$\x02\u0462\u0464\x07\x1B\x02\x02\u0463\u0462" +
		"\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464\u0466\x03\x02\x02\x02" +
		"\u0465\u045E\x03\x02\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466\u046A\x03" +
		"\x02\x02\x02\u0467\u0469\x07G\x02\x02\u0468\u0467\x03\x02\x02\x02\u0469" +
		"\u046C\x03\x02\x02\x02\u046A\u0468\x03\x02\x02\x02\u046A\u046B\x03\x02" +
		"\x02\x02\u046B\u046D\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046D" +
		"\u046E\x07\x15\x02\x02\u046E=\x03\x02\x02\x02\u046F\u0470\x076\x02\x02" +
		"\u0470\u0471\x07B\x02\x02\u0471\u0472\x05H%\x02\u0472?\x03\x02\x02\x02" +
		"\u0473\u0474\x07@\x02\x02\u0474\u0475\x07B\x02\x02\u0475\u0476\x05H%\x02" +
		"\u0476A\x03\x02\x02\x02\u0477\u04D0\x07?\x02\x02\u0478\u047C\x07\x14\x02" +
		"\x02\u0479\u047B\x07G\x02\x02\u047A\u0479\x03\x02\x02\x02\u047B\u047E" +
		"\x03\x02\x02\x02\u047C\u047A\x03\x02\x02\x02\u047C\u047D\x03\x02\x02\x02" +
		"\u047D\u04C6\x03\x02\x02\x02\u047E\u047C\x03\x02\x02\x02\u047F\u0483\x05" +
		"F$\x02\u0480\u0482\x07G\x02\x02\u0481\u0480\x03\x02\x02\x02\u0482\u0485" +
		"\x03\x02\x02\x02\u0483\u0481\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02" +
		"\u0484\u0486\x03\x02\x02\x02\u0485\u0483\x03\x02\x02\x02\u0486\u048A\x07" +
		"\x1B\x02\x02\u0487\u0489\x07G\x02\x02\u0488\u0487\x03\x02\x02\x02\u0489" +
		"\u048C\x03\x02\x02\x02\u048A\u0488\x03\x02\x02\x02\u048A\u048B\x03\x02" +
		"\x02\x02\u048B\u048E\x03\x02\x02\x02\u048C\u048A\x03\x02\x02\x02\u048D" +
		"\u047F\x03\x02\x02\x02\u048E\u0491\x03\x02\x02\x02\u048F\u048D\x03\x02" +
		"\x02\x02\u048F\u0490\x03\x02\x02\x02\u0490\u0492\x03\x02\x02\x02\u0491" +
		"\u048F\x03\x02\x02\x02\u0492\u0494\x05F$\x02\u0493\u0495\x07\x1B\x02\x02" +
		"\u0494\u0493\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u04C5\x03" +
		"\x02\x02\x02\u0496\u049A\x05F$\x02\u0497\u0499\x07G\x02\x02\u0498\u0497" +
		"\x03\x02\x02\x02\u0499\u049C\x03\x02\x02\x02\u049A\u0498\x03\x02\x02\x02" +
		"\u049A\u049B\x03\x02\x02\x02\u049B\u049D\x03\x02\x02\x02\u049C\u049A\x03" +
		"\x02\x02\x02\u049D\u04A1\x07\x1A\x02\x02\u049E\u04A0\x07G\x02\x02\u049F" +
		"\u049E\x03\x02\x02\x02\u04A0\u04A3\x03\x02\x02\x02\u04A1\u049F\x03\x02" +
		"\x02\x02\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04A5\x03\x02\x02\x02\u04A3" +
		"\u04A1\x03\x02\x02\x02\u04A4\u0496\x03\x02\x02\x02\u04A5\u04A8\x03\x02" +
		"\x02\x02\u04A6\u04A4\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7" +
		"\u04A9\x03\x02\x02\x02\u04A8\u04A6\x03\x02\x02\x02\u04A9\u04AB\x05F$\x02" +
		"\u04AA\u04AC\x07\x1A\x02\x02\u04AB\u04AA\x03\x02\x02\x02\u04AB\u04AC\x03" +
		"\x02\x02\x02\u04AC\u04C5\x03\x02\x02\x02\u04AD\u04B1\x05F$\x02\u04AE\u04B0" +
		"\x07G\x02\x02\u04AF\u04AE\x03\x02\x02\x02\u04B0\u04B3\x03\x02\x02\x02" +
		"\u04B1\u04AF\x03\x02\x02\x02\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B4\x03" +
		"\x02\x02\x02\u04B3\u04B1\x03\x02\x02\x02\u04B4\u04B8\x07G\x02\x02\u04B5" +
		"\u04B7\x07G\x02\x02\u04B6\u04B5\x03\x02\x02\x02\u04B7\u04BA\x03\x02\x02" +
		"\x02\u04B8\u04B6\x03\x02\x02\x02\u04B8\u04B9\x03\x02\x02\x02\u04B9\u04BC" +
		"\x03\x02\x02\x02\u04BA\u04B8\x03\x02\x02\x02\u04BB\u04AD\x03\x02\x02\x02" +
		"\u04BC\u04BF\x03\x02\x02\x02\u04BD\u04BB\x03\x02\x02\x02\u04BD\u04BE\x03" +
		"\x02\x02\x02\u04BE\u04C0\x03\x02\x02\x02\u04BF\u04BD\x03\x02\x02\x02\u04C0" +
		"\u04C2\x05F$\x02\u04C1\u04C3\x07G\x02\x02\u04C2\u04C1\x03\x02\x02\x02" +
		"\u04C2\u04C3\x03\x02\x02\x02\u04C3\u04C5\x03\x02\x02\x02\u04C4\u048F\x03" +
		"\x02\x02\x02\u04C4\u04A6\x03\x02\x02\x02\u04C4\u04BD\x03\x02\x02\x02\u04C5" +
		"\u04C7\x03\x02\x02\x02\u04C6\u04C4\x03\x02\x02\x02\u04C6\u04C7\x03\x02" +
		"\x02\x02\u04C7\u04CB\x03\x02\x02\x02\u04C8\u04CA\x07G\x02\x02\u04C9\u04C8" +
		"\x03\x02\x02\x02\u04CA\u04CD\x03\x02\x02\x02\u04CB\u04C9\x03\x02\x02\x02" +
		"\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04CE\x03\x02\x02\x02\u04CD\u04CB\x03" +
		"\x02\x02\x02\u04CE\u04D1\x07\x15\x02\x02\u04CF\u04D1\x05F$\x02\u04D0\u0478" +
		"\x03\x02\x02\x02\u04D0\u04CF\x03\x02\x02\x02\u04D1C\x03\x02\x02\x02\u04D2" +
		"\u0500\x07B\x02\x02\u04D3\u04D7\x07\x12\x02\x02\u04D4\u04D6\x07G\x02\x02" +
		"\u04D5\u04D4\x03\x02\x02\x02\u04D6\u04D9\x03\x02\x02\x02\u04D7\u04D5\x03" +
		"\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04F5\x03\x02\x02\x02\u04D9" +
		"\u04D7\x03\x02\x02\x02\u04DA\u04DE\x07B\x02\x02\u04DB\u04DD\x07G\x02\x02" +
		"\u04DC\u04DB\x03\x02\x02\x02\u04DD\u04E0\x03\x02\x02\x02\u04DE\u04DC\x03" +
		"\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF\u04E1\x03\x02\x02\x02\u04E0" +
		"\u04DE\x03\x02\x02\x02\u04E1\u04E5\x07\x1B\x02\x02\u04E2\u04E4\x07G\x02" +
		"\x02\u04E3\u04E2\x03\x02\x02\x02\u04E4\u04E7\x03\x02\x02\x02\u04E5\u04E3" +
		"\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6\u04E9\x03\x02\x02\x02" +
		"\u04E7\u04E5\x03\x02\x02\x02\u04E8\u04DA\x03\x02\x02\x02\u04E9\u04EC\x03" +
		"\x02\x02\x02\u04EA\u04E8\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB" +
		"\u04ED\x03\x02\x02\x02\u04EC\u04EA\x03\x02\x02\x02\u04ED\u04EF\x07B\x02" +
		"\x02\u04EE\u04F0\x07\x1B\x02\x02\u04EF\u04EE\x03\x02\x02\x02\u04EF\u04F0" +
		"\x03\x02\x02\x02\u04F0\u04F4\x03\x02\x02\x02\u04F1\u04F2\x07B\x02\x02" +
		"\u04F2\u04F4\x07\x1B\x02\x02\u04F3\u04EA\x03\x02\x02\x02\u04F3\u04F1\x03" +
		"\x02\x02\x02\u04F4\u04F6\x03\x02\x02\x02\u04F5\u04F3\x03\x02\x02\x02\u04F5" +
		"\u04F6\x03\x02\x02\x02\u04F6\u04FA\x03\x02\x02\x02\u04F7\u04F9\x07G\x02" +
		"\x02\u04F8\u04F7\x03\x02\x02\x02\u04F9\u04FC\x03\x02\x02\x02\u04FA\u04F8" +
		"\x03\x02\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB\u04FD\x03\x02\x02\x02" +
		"\u04FC\u04FA\x03\x02\x02\x02\u04FD\u0500\x07\x13\x02\x02\u04FE\u0500\x05" +
		"H%\x02\u04FF\u04D2\x03\x02\x02\x02\u04FF\u04D3\x03\x02\x02\x02\u04FF\u04FE" +
		"\x03\x02\x02\x02\u0500E\x03\x02\x02\x02\u0501\u0502\x07B\x02\x02\u0502" +
		"\u0503\x07\x19\x02\x02\u0503\u0504\x05D#\x02\u0504G\x03\x02\x02\x02\u0505" +
		"\u0509\x07\x12\x02\x02\u0506\u0508\x07G\x02\x02\u0507\u0506\x03\x02\x02" +
		"\x02\u0508\u050B\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509\u050A" +
		"\x03\x02\x02\x02\u050A\u051C\x03\x02\x02\x02\u050B\u0509\x03\x02\x02\x02" +
		"\u050C\u0510\x05F$\x02\u050D\u050F\x07G\x02\x02\u050E\u050D\x03\x02\x02" +
		"\x02\u050F\u0512\x03\x02\x02\x02\u0510\u050E\x03\x02\x02\x02\u0510\u0511" +
		"\x03\x02\x02\x02\u0511\u0513\x03\x02\x02\x02\u0512\u0510\x03\x02\x02\x02" +
		"\u0513\u0517\x07\x1B\x02\x02\u0514\u0516\x07G\x02\x02\u0515\u0514\x03" +
		"\x02\x02\x02\u0516\u0519\x03\x02\x02\x02\u0517\u0515\x03\x02\x02\x02\u0517" +
		"\u0518\x03\x02\x02\x02\u0518\u051B\x03\x02\x02\x02\u0519\u0517\x03\x02" +
		"\x02\x02\u051A\u050C\x03\x02\x02\x02\u051B\u051E\x03\x02\x02\x02\u051C" +
		"\u051A\x03\x02\x02\x02\u051C\u051D\x03\x02\x02\x02\u051D\u051F\x03\x02" +
		"\x02\x02\u051E\u051C\x03\x02\x02\x02\u051F\u0521\x05F$\x02\u0520\u0522" +
		"\x07\x1B\x02\x02\u0521\u0520\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02" +
		"\u0522\u0526\x03\x02\x02\x02\u0523\u0525\x07G\x02\x02\u0524\u0523\x03" +
		"\x02\x02\x02\u0525\u0528\x03\x02\x02\x02\u0526\u0524\x03\x02\x02\x02\u0526" +
		"\u0527\x03\x02\x02\x02\u0527\u0529\x03\x02\x02\x02\u0528\u0526\x03\x02" +
		"\x02\x02\u0529\u052A\x07\x13\x02\x02\u052AI\x03\x02\x02\x02\u052B\u052D" +
		"\x07G\x02\x02\u052C\u052B\x03\x02\x02\x02\u052D\u0530\x03\x02\x02\x02" +
		"\u052E\u052C\x03\x02\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\u0531\x03" +
		"\x02\x02\x02\u0530\u052E\x03\x02\x02\x02\u0531\u0535\x07\x14\x02\x02\u0532" +
		"\u0534\x05\x04\x03\x02\u0533\u0532\x03\x02\x02\x02\u0534\u0537\x03\x02" +
		"\x02\x02\u0535\u0533\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02\u0536" +
		"\u054F\x03\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0538\u053C\x05\x10" +
		"\t\x02\u0539\u053B\x07G\x02\x02\u053A\u0539\x03\x02\x02\x02\u053B\u053E" +
		"\x03\x02\x02\x02\u053C\u053A\x03\x02\x02\x02\u053C\u053D\x03\x02\x02\x02" +
		"\u053D\u053F\x03\x02\x02\x02\u053E\u053C\x03\x02\x02\x02\u053F\u0543\x05" +
		"\x04\x03\x02\u0540\u0542\x07G\x02\x02\u0541\u0540\x03\x02\x02\x02\u0542" +
		"\u0545\x03\x02\x02\x02\u0543\u0541\x03\x02\x02\x02\u0543\u0544\x03\x02" +
		"\x02\x02\u0544\u0547\x03\x02\x02\x02\u0545\u0543\x03\x02\x02\x02\u0546" +
		"\u0538\x03\x02\x02\x02\u0547\u054A\x03\x02\x02\x02\u0548\u0546\x03\x02" +
		"\x02\x02\u0548\u0549\x03\x02\x02\x02\u0549\u054B\x03\x02\x02\x02\u054A" +
		"\u0548\x03\x02\x02\x02\u054B\u054D\x05\x10\t\x02\u054C\u054E\x05\x04\x03" +
		"\x02\u054D\u054C\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u0550" +
		"\x03\x02\x02\x02\u054F\u0548\x03\x02\x02\x02\u054F\u0550\x03\x02\x02\x02" +
		"\u0550\u0551\x03\x02\x02\x02\u0551\u0552\x07\x15\x02\x02\u0552K\x03\x02" +
		"\x02\x02\u0553\u0557\x07\x0F\x02\x02\u0554\u0556\x07G\x02\x02\u0555\u0554" +
		"\x03\x02\x02\x02\u0556\u0559\x03\x02\x02\x02\u0557\u0555\x03\x02\x02\x02" +
		"\u0557\u0558\x03\x02\x02\x02\u0558\u055A\x03\x02\x02\x02\u0559\u0557\x03" +
		"\x02\x02\x02\u055A\u055E\x05\"\x12\x02\u055B\u055D\x07G\x02\x02\u055C" +
		"\u055B\x03\x02\x02\x02\u055D\u0560\x03\x02\x02\x02\u055E\u055C\x03\x02" +
		"\x02\x02\u055E\u055F\x03\x02\x02\x02\u055F\u0561\x03\x02\x02\x02\u0560" +
		"\u055E\x03\x02\x02\x02\u0561\u0565\x07\v\x02\x02\u0562\u0564\x07G\x02" +
		"\x02\u0563\u0562\x03\x02\x02\x02\u0564\u0567\x03\x02\x02\x02\u0565\u0563" +
		"\x03\x02\x02\x02\u0565\u0566\x03\x02\x02\x02\u0566\u0568\x03\x02\x02\x02" +
		"\u0567\u0565\x03\x02\x02\x02\u0568\u056C\x05\x0E\b\x02\u0569\u056B\x07" +
		"G\x02\x02\u056A\u0569\x03\x02\x02\x02\u056B\u056E\x03\x02\x02\x02\u056C" +
		"\u056A\x03\x02\x02\x02\u056C\u056D\x03\x02\x02\x02\u056D\u0572\x03\x02" +
		"\x02\x02\u056E\u056C\x03\x02\x02\x02\u056F\u0571\x07G\x02\x02\u0570\u056F" +
		"\x03\x02\x02\x02\u0571\u0574\x03\x02\x02\x02\u0572\u0570\x03\x02\x02\x02" +
		"\u0572\u0573\x03\x02\x02\x02\u0573\u0578\x03\x02\x02\x02\u0574\u0572\x03" +
		"\x02\x02\x02\u0575\u0577\x07G\x02\x02\u0576\u0575\x03\x02\x02\x02\u0577" +
		"\u057A\x03\x02\x02\x02\u0578\u0576\x03\x02\x02\x02\u0578\u0579\x03\x02" +
		"\x02\x02\u0579\u057B\x03\x02\x02\x02\u057A\u0578\x03\x02\x02\x02\u057B" +
		"\u057C\x05\x12\n\x02\u057CM\x03\x02\x02\x02\u057D\u0581\x07\x10\x02\x02" +
		"\u057E\u0580\x07G\x02\x02\u057F\u057E\x03\x02\x02\x02\u0580\u0583\x03" +
		"\x02\x02\x02\u0581\u057F\x03\x02\x02\x02\u0581\u0582\x03\x02\x02\x02\u0582" +
		"\u0584\x03\x02\x02\x02\u0583\u0581\x03\x02\x02\x02\u0584\u0588\x05\x0E" +
		"\b\x02\u0585\u0587\x07G\x02\x02\u0586\u0585\x03\x02\x02\x02\u0587\u058A" +
		"\x03\x02\x02\x02\u0588\u0586\x03\x02\x02\x02\u0588\u0589\x03\x02\x02\x02" +
		"\u0589\u058B\x03\x02\x02\x02\u058A\u0588\x03\x02\x02\x02\u058B\u058C\x05" +
		"\x12\n\x02\u058CO\x03\x02\x02\x02\u058D\u0591\x07\t\x02\x02\u058E\u0590" +
		"\x07G\x02\x02\u058F\u058E\x03\x02\x02\x02\u0590\u0593\x03\x02\x02\x02" +
		"\u0591\u058F\x03\x02\x02\x02\u0591\u0592\x03\x02\x02\x02\u0592\u0594\x03" +
		"\x02\x02\x02\u0593\u0591\x03\x02\x02\x02\u0594\u0598\x05\x0E\b\x02\u0595" +
		"\u0597\x07G\x02\x02\u0596\u0595\x03\x02\x02\x02\u0597\u059A\x03\x02\x02" +
		"\x02\u0598\u0596\x03\x02\x02\x02\u0598\u0599\x03\x02\x02\x02\u0599\u059B" +
		"\x03\x02\x02\x02\u059A\u0598\x03\x02\x02\x02\u059B\u059F\x05\x12\n\x02" +
		"\u059C\u059E\x07G\x02\x02\u059D\u059C\x03\x02\x02\x02\u059E\u05A1\x03" +
		"\x02\x02\x02\u059F\u059D\x03\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0" +
		"\u05BB\x03\x02\x02\x02\u05A1\u059F\x03\x02\x02\x02\u05A2\u05A6\x07\n\x02" +
		"\x02\u05A3\u05A5\x07G\x02\x02\u05A4\u05A3\x03\x02\x02\x02\u05A5\u05A8" +
		"\x03\x02\x02\x02\u05A6\u05A4\x03\x02\x02\x02\u05A6\u05A7\x03\x02\x02\x02" +
		"\u05A7\u05A9\x03\x02\x02\x02\u05A8\u05A6\x03\x02\x02\x02\u05A9\u05AD\x07" +
		"\t\x02\x02\u05AA\u05AC\x07G\x02\x02\u05AB\u05AA\x03\x02\x02\x02\u05AC" +
		"\u05AF\x03\x02\x02\x02\u05AD\u05AB\x03\x02\x02\x02\u05AD\u05AE\x03\x02" +
		"\x02\x02\u05AE\u05B0\x03\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05B0" +
		"\u05B4\x05\x0E\b\x02\u05B1\u05B3\x07G\x02\x02\u05B2\u05B1\x03\x02\x02" +
		"\x02\u05B3\u05B6\x03\x02\x02\x02\u05B4\u05B2\x03\x02\x02\x02\u05B4\u05B5" +
		"\x03\x02\x02\x02\u05B5\u05B7\x03\x02\x02\x02\u05B6\u05B4\x03\x02\x02\x02" +
		"\u05B7\u05B8\x05\x12\n\x02\u05B8\u05BA\x03\x02\x02\x02\u05B9\u05A2\x03" +
		"\x02\x02\x02\u05BA\u05BD\x03\x02\x02\x02\u05BB\u05B9\x03\x02\x02\x02\u05BB" +
		"\u05BC\x03\x02\x02\x02\u05BC\u05C1\x03\x02\x02\x02\u05BD\u05BB\x03\x02" +
		"\x02\x02\u05BE\u05C0\x07G\x02\x02\u05BF\u05BE\x03\x02\x02\x02\u05C0\u05C3" +
		"\x03\x02\x02\x02\u05C1\u05BF\x03\x02\x02\x02\u05C1\u05C2\x03\x02\x02\x02" +
		"\u05C2\u05CC\x03\x02\x02\x02\u05C3\u05C1\x03\x02\x02\x02\u05C4\u05C8\x07" +
		"\n\x02\x02\u05C5\u05C7\x07G\x02\x02\u05C6\u05C5\x03\x02\x02\x02\u05C7" +
		"\u05CA\x03\x02\x02\x02\u05C8\u05C6\x03\x02\x02\x02\u05C8\u05C9\x03\x02" +
		"\x02\x02\u05C9\u05CB\x03\x02\x02\x02\u05CA\u05C8\x03\x02\x02\x02\u05CB" +
		"\u05CD\x05\x12\n\x02\u05CC\u05C4\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02" +
		"\x02\u05CDQ\x03\x02\x02\x02\u05CE\u05D2\x07<\x02\x02\u05CF\u05D1\x07G" +
		"\x02\x02\u05D0\u05CF\x03\x02\x02\x02\u05D1\u05D4\x03\x02\x02\x02\u05D2" +
		"\u05D0\x03\x02\x02\x02\u05D2\u05D3\x03\x02\x02\x02\u05D3\u05D5\x03\x02" +
		"\x02\x02\u05D4\u05D2\x03\x02\x02\x02\u05D5\u05D9\x05\x1C\x0F\x02\u05D6" +
		"\u05D8\x07G\x02\x02\u05D7\u05D6\x03\x02\x02\x02\u05D8\u05DB\x03\x02\x02" +
		"\x02\u05D9\u05D7\x03\x02\x02\x02\u05D9\u05DA\x03\x02\x02\x02\u05DA\u05DC" +
		"\x03\x02\x02\x02\u05DB\u05D9\x03\x02\x02\x02\u05DC\u05DD\x05`1\x02\u05DD" +
		"S\x03\x02\x02\x02\u05DE\u05E2\x074\x02\x02\u05DF\u05E1\x07G\x02\x02\u05E0" +
		"\u05DF\x03\x02\x02\x02\u05E1\u05E4\x03\x02\x02\x02\u05E2\u05E0\x03\x02" +
		"\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E5\x03\x02\x02\x02\u05E4" +
		"\u05E2\x03\x02\x02\x02\u05E5\u05E9\x05\x1C\x0F\x02\u05E6\u05E8\x07G\x02" +
		"\x02\u05E7\u05E6\x03\x02\x02\x02\u05E8\u05EB\x03\x02\x02\x02\u05E9\u05E7" +
		"\x03\x02\x02\x02\u05E9\u05EA\x03\x02\x02\x02\u05EA\u05EC\x03\x02\x02\x02" +
		"\u05EB\u05E9\x03\x02\x02\x02\u05EC\u05ED\x05`1\x02\u05EDU\x03\x02\x02" +
		"\x02\u05EE\u05F2\x07=\x02\x02\u05EF\u05F1\x07G\x02\x02\u05F0\u05EF\x03" +
		"\x02\x02\x02\u05F1\u05F4\x03\x02\x02\x02\u05F2\u05F0\x03\x02\x02\x02\u05F2" +
		"\u05F3\x03\x02\x02\x02\u05F3\u05F5\x03\x02\x02\x02\u05F4\u05F2\x03\x02" +
		"\x02\x02\u05F5\u05FF\x05`1\x02\u05F6\u05FA\x07=\x02\x02\u05F7\u05F9\x07" +
		"G\x02\x02\u05F8\u05F7\x03\x02\x02\x02\u05F9\u05FC\x03\x02\x02\x02\u05FA" +
		"\u05F8\x03\x02\x02\x02\u05FA\u05FB\x03\x02\x02\x02\u05FB\u05FD\x03\x02" +
		"\x02\x02\u05FC\u05FA\x03\x02\x02\x02\u05FD\u05FF\x05Z.\x02\u05FE\u05EE" +
		"\x03\x02\x02\x02\u05FE\u05F6\x03\x02\x02\x02\u05FFW\x03\x02\x02\x02\u0600" +
		"\u0612\x07>\x02\x02\u0601\u0605\x07>\x02\x02\u0602\u0604\x07G\x02\x02" +
		"\u0603\u0602\x03\x02\x02\x02\u0604\u0607\x03\x02\x02\x02\u0605\u0603\x03" +
		"\x02\x02\x02\u0605\u0606\x03\x02\x02\x02\u0606\u0608\x03\x02\x02\x02\u0607" +
		"\u0605\x03\x02\x02\x02\u0608\u0612\x05Z.\x02\u0609\u060D\x07>\x02\x02" +
		"\u060A\u060C\x07G\x02\x02\u060B\u060A\x03\x02\x02\x02\u060C\u060F\x03" +
		"\x02\x02\x02\u060D\u060B\x03\x02\x02\x02\u060D\u060E\x03\x02\x02\x02\u060E" +
		"\u0610\x03\x02\x02\x02\u060F\u060D\x03\x02\x02\x02\u0610\u0612\x05\x14" +
		"\v\x02\u0611\u0600\x03\x02\x02\x02\u0611\u0601\x03\x02\x02\x02\u0611\u0609" +
		"\x03\x02\x02\x02\u0612Y\x03\x02\x02\x02\u0613\u0614\x05\x1C\x0F\x02\u0614" +
		"\u0618\x07\x12\x02\x02\u0615\u0617\x07G\x02\x02\u0616\u0615\x03\x02\x02" +
		"\x02\u0617\u061A\x03\x02\x02\x02\u0618\u0616\x03\x02\x02\x02\u0618\u0619" +
		"\x03\x02\x02\x02\u0619\u0632\x03\x02\x02\x02\u061A\u0618\x03\x02\x02\x02" +
		"\u061B\u061F\x05\x14\v\x02\u061C\u061E\x07G\x02\x02\u061D\u061C\x03\x02" +
		"\x02\x02\u061E\u0621\x03\x02\x02\x02\u061F\u061D\x03\x02\x02\x02\u061F" +
		"\u0620\x03\x02\x02\x02\u0620\u0622\x03\x02\x02\x02\u0621\u061F\x03\x02" +
		"\x02\x02\u0622\u0626\x07\x1B\x02\x02\u0623\u0625\x07G\x02\x02\u0624\u0623" +
		"\x03\x02\x02\x02\u0625\u0628\x03\x02\x02\x02\u0626\u0624\x03\x02\x02\x02" +
		"\u0626\u0627\x03\x02\x02\x02\u0627\u062A\x03\x02\x02\x02\u0628\u0626\x03" +
		"\x02\x02\x02\u0629\u061B\x03\x02\x02\x02\u062A\u062D\x03\x02\x02\x02\u062B" +
		"\u0629\x03";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\x02\u062B\u062C\x03\x02\x02\x02\u062C\u062E\x03\x02\x02\x02\u062D" +
		"\u062B\x03\x02\x02\x02\u062E\u0630\x05\x14\v\x02\u062F\u0631\x07\x1B\x02" +
		"\x02\u0630\u062F\x03\x02\x02\x02\u0630\u0631\x03\x02\x02\x02\u0631\u0633" +
		"\x03\x02\x02\x02\u0632\u062B\x03\x02\x02\x02\u0632\u0633\x03\x02\x02\x02" +
		"\u0633\u0637\x03\x02\x02\x02\u0634\u0636\x07G\x02\x02\u0635\u0634\x03" +
		"\x02\x02\x02\u0636\u0639\x03\x02\x02\x02\u0637\u0635\x03\x02\x02\x02\u0637" +
		"\u0638\x03\x02\x02\x02\u0638\u063A\x03\x02\x02\x02\u0639\u0637\x03\x02" +
		"\x02\x02\u063A\u063B\x07\x13\x02\x02\u063B[\x03\x02\x02\x02\u063C\u0643" +
		"\x07H\x02\x02\u063D\u0643\x07A\x02\x02\u063E\u0643\t\t\x02\x02\u063F\u0643" +
		"\x05^0\x02\u0640\u0643\x05`1\x02\u0641\u0643\x05d3\x02\u0642\u063C\x03" +
		"\x02\x02\x02\u0642\u063D\x03\x02\x02\x02\u0642\u063E\x03\x02\x02\x02\u0642" +
		"\u063F\x03\x02\x02\x02\u0642\u0640\x03\x02\x02\x02\u0642\u0641\x03\x02" +
		"\x02\x02\u0643]\x03\x02\x02\x02\u0644\u0648\x07\x16\x02\x02\u0645\u0647" +
		"\x07G\x02\x02\u0646\u0645\x03\x02\x02\x02\u0647\u064A\x03\x02\x02\x02" +
		"\u0648\u0646\x03\x02\x02\x02\u0648\u0649\x03\x02\x02\x02\u0649\u0662\x03" +
		"\x02\x02\x02\u064A\u0648\x03\x02\x02\x02\u064B\u064F\x05\x14\v\x02\u064C" +
		"\u064E\x07G\x02\x02\u064D\u064C\x03\x02\x02\x02\u064E\u0651\x03\x02\x02" +
		"\x02\u064F\u064D\x03\x02\x02\x02\u064F\u0650\x03\x02\x02\x02\u0650\u0652" +
		"\x03\x02\x02\x02\u0651\u064F\x03\x02\x02\x02\u0652\u0656\x07\x1B\x02\x02" +
		"\u0653\u0655\x07G\x02\x02\u0654\u0653\x03\x02\x02\x02\u0655\u0658\x03" +
		"\x02\x02\x02\u0656\u0654\x03\x02\x02\x02\u0656\u0657\x03\x02\x02\x02\u0657" +
		"\u065A\x03\x02\x02\x02\u0658\u0656\x03\x02\x02\x02\u0659\u064B\x03\x02" +
		"\x02\x02\u065A\u065D\x03\x02\x02\x02\u065B\u0659\x03\x02\x02\x02\u065B" +
		"\u065C\x03\x02\x02\x02\u065C\u065E\x03\x02\x02\x02\u065D\u065B\x03\x02" +
		"\x02\x02\u065E\u0660\x05\x14\v\x02\u065F\u0661\x07\x1B\x02\x02\u0660\u065F" +
		"\x03\x02\x02\x02\u0660\u0661\x03\x02\x02\x02\u0661\u0663\x03\x02\x02\x02" +
		"\u0662\u065B\x03\x02\x02\x02\u0662\u0663\x03\x02\x02\x02\u0663\u0667\x03" +
		"\x02\x02\x02\u0664\u0666\x07G\x02\x02\u0665\u0664\x03\x02\x02\x02\u0666" +
		"\u0669\x03\x02\x02\x02\u0667\u0665\x03\x02\x02\x02\u0667\u0668\x03\x02" +
		"\x02\x02\u0668\u066A\x03\x02\x02\x02\u0669\u0667\x03\x02\x02\x02\u066A" +
		"\u066B\x07\x17\x02\x02\u066B_\x03\x02\x02\x02\u066C\u0670\x07\x14\x02" +
		"\x02\u066D\u066F\x07G\x02\x02\u066E\u066D\x03\x02\x02\x02\u066F\u0672" +
		"\x03\x02\x02\x02\u0670\u066E\x03\x02\x02\x02\u0670\u0671\x03\x02\x02\x02" +
		"\u0671\u068A\x03\x02\x02\x02\u0672\u0670\x03\x02\x02\x02\u0673\u0677\x05" +
		"b2\x02\u0674\u0676\x07G\x02\x02\u0675\u0674\x03\x02\x02\x02\u0676\u0679" +
		"\x03\x02\x02\x02\u0677\u0675\x03\x02\x02\x02\u0677\u0678\x03\x02\x02\x02" +
		"\u0678\u067A\x03\x02\x02\x02\u0679\u0677\x03\x02\x02\x02\u067A\u067E\x07" +
		"\x1B\x02\x02\u067B\u067D\x07G\x02\x02\u067C\u067B\x03\x02\x02\x02\u067D" +
		"\u0680\x03\x02\x02\x02\u067E\u067C\x03\x02\x02\x02\u067E\u067F\x03\x02" +
		"\x02\x02\u067F\u0682\x03\x02\x02\x02\u0680\u067E\x03\x02\x02\x02\u0681" +
		"\u0673\x03\x02\x02\x02\u0682\u0685\x03\x02\x02\x02\u0683\u0681\x03\x02" +
		"\x02\x02\u0683\u0684\x03\x02\x02\x02\u0684\u0686\x03\x02\x02\x02\u0685" +
		"\u0683\x03\x02\x02\x02\u0686\u0688\x05b2\x02\u0687\u0689\x07\x1B\x02\x02" +
		"\u0688\u0687\x03\x02\x02\x02\u0688\u0689\x03\x02\x02\x02\u0689\u068B\x03" +
		"\x02\x02\x02\u068A\u0683\x03\x02\x02\x02\u068A\u068B\x03\x02\x02\x02\u068B" +
		"\u068F\x03\x02\x02\x02\u068C\u068E\x07G\x02\x02\u068D\u068C\x03\x02\x02" +
		"\x02\u068E\u0691\x03\x02\x02\x02\u068F\u068D\x03\x02\x02\x02\u068F\u0690" +
		"\x03\x02\x02\x02\u0690\u0692\x03\x02\x02\x02\u0691\u068F\x03\x02\x02\x02" +
		"\u0692\u0693\x07\x15\x02\x02\u0693a\x03\x02\x02\x02\u0694\u06A3\x07B\x02" +
		"\x02\u0695\u0697\x07G\x02\x02\u0696\u0695\x03\x02\x02\x02\u0697\u069A" +
		"\x03\x02\x02\x02\u0698\u0696\x03\x02\x02\x02\u0698\u0699\x03\x02\x02\x02" +
		"\u0699\u069B\x03\x02\x02\x02\u069A\u0698\x03\x02\x02\x02\u069B\u069F\x07" +
		"\x19\x02\x02\u069C\u069E\x07G\x02\x02\u069D\u069C\x03\x02\x02\x02\u069E" +
		"\u06A1\x03\x02\x02\x02\u069F\u069D\x03\x02\x02\x02\u069F\u06A0\x03\x02" +
		"\x02\x02\u06A0\u06A2\x03\x02\x02\x02\u06A1\u069F\x03\x02\x02\x02\u06A2" +
		"\u06A4\x05\x14\v\x02\u06A3\u0698\x03\x02\x02\x02\u06A3\u06A4\x03\x02\x02" +
		"\x02\u06A4c\x03\x02\x02\x02\u06A5\u06A9\x07\x12\x02\x02\u06A6\u06A8\x07" +
		"G\x02\x02\u06A7\u06A6\x03\x02\x02\x02\u06A8\u06AB\x03\x02\x02\x02\u06A9" +
		"\u06A7\x03\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06D9\x03\x02" +
		"\x02\x02\u06AB\u06A9\x03\x02\x02\x02\u06AC\u06B0\x05\x14\v\x02\u06AD\u06AF" +
		"\x07G\x02\x02\u06AE\u06AD\x03\x02\x02\x02\u06AF\u06B2\x03\x02\x02\x02" +
		"\u06B0\u06AE\x03\x02\x02\x02\u06B0\u06B1\x03\x02\x02\x02\u06B1\u06B3\x03" +
		"\x02\x02\x02\u06B2\u06B0\x03\x02\x02\x02\u06B3\u06B4\x07\x1B\x02\x02\u06B4" +
		"\u06D8\x03\x02\x02\x02\u06B5\u06B9\x05\x14\v\x02\u06B6\u06B8\x07G\x02" +
		"\x02\u06B7\u06B6\x03\x02\x02\x02\u06B8\u06BB\x03\x02\x02\x02\u06B9\u06B7" +
		"\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u06CA\x03\x02\x02\x02" +
		"\u06BB\u06B9\x03\x02\x02\x02\u06BC\u06C0\x07\x1B\x02\x02\u06BD\u06BF\x07" +
		"G\x02\x02\u06BE\u06BD\x03\x02\x02\x02\u06BF\u06C2\x03\x02\x02\x02\u06C0" +
		"\u06BE\x03\x02\x02\x02\u06C0\u06C1\x03\x02\x02\x02\u06C1\u06C3\x03\x02" +
		"\x02\x02\u06C2\u06C0\x03\x02\x02\x02\u06C3\u06C7\x05\x14\v\x02\u06C4\u06C6" +
		"\x07G\x02\x02\u06C5\u06C4\x03\x02\x02\x02\u06C6\u06C9\x03\x02\x02\x02" +
		"\u06C7\u06C5\x03\x02\x02\x02\u06C7\u06C8\x03\x02\x02\x02\u06C8\u06CB\x03" +
		"\x02\x02\x02\u06C9\u06C7\x03\x02\x02\x02\u06CA\u06BC\x03\x02\x02\x02\u06CB" +
		"\u06CC\x03\x02\x02\x02\u06CC\u06CA\x03\x02\x02\x02\u06CC\u06CD\x03\x02" +
		"\x02\x02\u06CD\u06D1\x03\x02\x02\x02\u06CE\u06D0\x07G\x02\x02\u06CF\u06CE" +
		"\x03\x02\x02\x02\u06D0\u06D3\x03\x02\x02\x02\u06D1\u06CF\x03\x02\x02\x02" +
		"\u06D1\u06D2\x03\x02\x02\x02\u06D2\u06D5\x03\x02\x02\x02\u06D3\u06D1\x03" +
		"\x02\x02\x02\u06D4\u06D6\x07\x1B\x02\x02\u06D5\u06D4\x03\x02\x02\x02\u06D5" +
		"\u06D6\x03\x02\x02\x02\u06D6\u06D8\x03\x02\x02\x02\u06D7\u06AC\x03\x02" +
		"\x02\x02\u06D7\u06B5\x03\x02\x02\x02\u06D8\u06DA\x03\x02\x02\x02\u06D9" +
		"\u06D7\x03\x02\x02\x02\u06D9\u06DA\x03\x02\x02\x02\u06DA\u06DE\x03\x02" +
		"\x02\x02\u06DB\u06DD\x07G\x02\x02\u06DC\u06DB\x03\x02\x02\x02\u06DD\u06E0" +
		"\x03\x02\x02\x02\u06DE\u06DC\x03\x02\x02\x02\u06DE\u06DF\x03\x02\x02\x02" +
		"\u06DF\u06E1\x03\x02\x02\x02\u06E0\u06DE\x03\x02\x02\x02\u06E1\u06E2\x07" +
		"\x13\x02\x02\u06E2e\x03\x02\x02\x02\u011Aglsz\x7F\x84\x86\x8C\x93\x98" +
		"\x9D\x9F\xA6\xAA\xB2\xB9\xBF\xC1\xC9\xCF\xD6\xDD\xE2\xE8\xEC\xF2\xF9\u0100" +
		"\u0109\u0111\u011F\u0125\u012C\u0136\u013D\u0144\u0149\u014E\u0153\u015F" +
		"\u0166\u016F\u0176\u017C\u017E\u0180\u0190\u0194\u0196\u019A\u019E\u01A7" +
		"\u01AC\u01B3\u01BA\u01C0\u01C7\u01CE\u01D4\u01DA\u01E1\u01E8\u01ED\u01F7" +
		"\u01FC\u01FE\u0204\u0209\u020E\u0215\u021A\u021F\u0222\u0224\u0229\u0231" +
		"\u0236\u023B\u0242\u0247\u024C\u024F\u0251\u0256\u025E\u0263\u0268\u026F" +
		"\u0274\u0279\u027C\u027E\u0283\u0287\u028D\u0294\u029B\u02A2\u02AB\u02AF" +
		"\u02B4\u02BB\u02BF\u02C4\u02CD\u02D5\u02DC\u02E3\u02EA\u02EF\u02F4\u02F6" +
		"\u02FB\u02FF\u0305\u030C\u0312\u0316\u031B\u0322\u0328\u032F\u0336\u033B" +
		"\u0340\u0342\u0347\u034B\u0350\u0358\u035F\u0368\u036F\u0373\u0378\u037F" +
		"\u0383\u0389\u0390\u0397\u039B\u03A0\u03A7\u03AE\u03B5\u03BA\u03BE\u03C3" +
		"\u03CA\u03D1\u03D8\u03DD\u03E2\u03E4\u03E9\u03F3\u03F9\u0400\u0407\u040E" +
		"\u0415\u041A\u041E\u0423\u042A\u0431\u0436\u043B\u043D\u0443\u044B\u0452" +
		"\u0459\u045E\u0463\u0465\u046A\u047C\u0483\u048A\u048F\u0494\u049A\u04A1" +
		"\u04A6\u04AB\u04B1\u04B8\u04BD\u04C2\u04C4\u04C6\u04CB\u04D0\u04D7\u04DE" +
		"\u04E5\u04EA\u04EF\u04F3\u04F5\u04FA\u04FF\u0509\u0510\u0517\u051C\u0521" +
		"\u0526\u052E\u0535\u053C\u0543\u0548\u054D\u054F\u0557\u055E\u0565\u056C" +
		"\u0572\u0578\u0581\u0588\u0591\u0598\u059F\u05A6\u05AD\u05B4\u05BB\u05C1" +
		"\u05C8\u05CC\u05D2\u05D9\u05E2\u05E9\u05F2\u05FA\u05FE\u0605\u060D\u0611" +
		"\u0618\u061F\u0626\u062B\u0630\u0632\u0637\u0642\u0648\u064F\u0656\u065B" +
		"\u0660\u0662\u0667\u0670\u0677\u067E\u0683\u0688\u068A\u068F\u0698\u069F" +
		"\u06A3\u06A9\u06B0\u06B9\u06C0\u06C7\u06CC\u06D1\u06D5\u06D7\u06D9\u06DE";
	public static readonly _serializedATN: string = Utils.join(
		[
			CWScriptParser._serializedATNSegment0,
			CWScriptParser._serializedATNSegment1,
			CWScriptParser._serializedATNSegment2,
			CWScriptParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CWScriptParser.__ATN) {
			CWScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CWScriptParser._serializedATN));
		}

		return CWScriptParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CWScriptParser.EOF, 0); }
	public SHEBANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SHEBANG, 0); }
	public cmdsep(): CmdsepContext[];
	public cmdsep(i: number): CmdsepContext;
	public cmdsep(i?: number): CmdsepContext | CmdsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CmdsepContext);
		} else {
			return this.getRuleContext(i, CmdsepContext);
		}
	}
	public importDef(): ImportDefContext[];
	public importDef(i: number): ImportDefContext;
	public importDef(i?: number): ImportDefContext | ImportDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDefContext);
		} else {
			return this.getRuleContext(i, ImportDefContext);
		}
	}
	public root(): RootContext[];
	public root(i: number): RootContext;
	public root(i?: number): RootContext | RootContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RootContext);
		} else {
			return this.getRuleContext(i, RootContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_program; }
}


export class CmdsepContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public SCOLON(): TerminalNode[];
	public SCOLON(i: number): TerminalNode;
	public SCOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.SCOLON);
		} else {
			return this.getToken(CWScriptParser.SCOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_cmdsep; }
}


export class ImportDefContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(CWScriptParser.IMPORT, 0); }
	public FROM(): TerminalNode { return this.getToken(CWScriptParser.FROM, 0); }
	public String(): TerminalNode { return this.getToken(CWScriptParser.String, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.AS, 0); }
	public Ident(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.Ident, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public namedImports(): NamedImportsContext | undefined {
		return this.tryGetRuleContext(0, NamedImportsContext);
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.STAR, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_importDef; }
}


export class NamedImportContext extends ParserRuleContext {
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.Ident);
		} else {
			return this.getToken(CWScriptParser.Ident, i);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_namedImport; }
}


export class NamedImportsContext extends ParserRuleContext {
	public namedImport(): NamedImportContext[];
	public namedImport(i: number): NamedImportContext;
	public namedImport(i?: number): NamedImportContext | NamedImportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedImportContext);
		} else {
			return this.getRuleContext(i, NamedImportContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_namedImports; }
}


export class RootContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_root; }
	public copyFrom(ctx: RootContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionDefRootContext extends RootContext {
	public globalFnDef(): GlobalFnDefContext {
		return this.getRuleContext(0, GlobalFnDefContext);
	}
	constructor(ctx: RootContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StructureDefRootContext extends RootContext {
	public structureDef(): StructureDefContext {
		return this.getRuleContext(0, StructureDefContext);
	}
	constructor(ctx: RootContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ContractDefRootContext extends RootContext {
	public contractDef(): ContractDefContext {
		return this.getRuleContext(0, ContractDefContext);
	}
	constructor(ctx: RootContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InterfaceDefRootContext extends RootContext {
	public interfaceDef(): InterfaceDefContext {
		return this.getRuleContext(0, InterfaceDefContext);
	}
	constructor(ctx: RootContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class GroupExprContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BinaryOpExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public binaryOp(): BinaryOpContext {
		return this.getRuleContext(0, BinaryOpContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignExprContext extends ExprContext {
	public Ident(): TerminalNode { return this.getToken(CWScriptParser.Ident, 0); }
	public EQ1(): TerminalNode { return this.getToken(CWScriptParser.EQ1, 0); }
	public ASSIGNOP(): TerminalNode { return this.getToken(CWScriptParser.ASSIGNOP, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CallParenExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public rval(): RvalContext[];
	public rval(i: number): RvalContext;
	public rval(i?: number): RvalContext | RvalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RvalContext);
		} else {
			return this.getRuleContext(i, RvalContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryPreOpExprContext extends ExprContext {
	public unaryPreOp(): UnaryPreOpContext {
		return this.getRuleContext(0, UnaryPreOpContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnaryPostOpExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public unaryPostOp(): UnaryPostOpContext {
		return this.getRuleContext(0, UnaryPostOpContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SubscriptExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PropExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DOT1(): TerminalNode[];
	public DOT1(i: number): TerminalNode;
	public DOT1(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.DOT1);
		} else {
			return this.getToken(CWScriptParser.DOT1, i);
		}
	}
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.Ident);
		} else {
			return this.getToken(CWScriptParser.Ident, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StateWriteExprContext extends ExprContext {
	public stateIdent(): StateIdentContext {
		return this.getRuleContext(0, StateIdentContext);
	}
	public rval(): RvalContext {
		return this.getRuleContext(0, RvalContext);
	}
	public EQ1(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ1, 0); }
	public ASSIGNOP(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ASSIGNOP, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StateReadExprContext extends ExprContext {
	public stateIdent(): StateIdentContext {
		return this.getRuleContext(0, StateIdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralExprContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IdentExprContext extends ExprContext {
	public nsIdent(): NsIdentContext {
		return this.getRuleContext(0, NsIdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExprxContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_exprx; }
	public copyFrom(ctx: ExprxContext): void {
		super.copyFrom(ctx);
	}
}
export class ExprExprxContext extends ExprxContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LetExprxContext extends ExprxContext {
	public let(): LetContext {
		return this.getRuleContext(0, LetContext);
	}
	constructor(ctx: ExprxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IfExprxContext extends ExprxContext {
	public ifStmt(): IfStmtContext {
		return this.getRuleContext(0, IfStmtContext);
	}
	constructor(ctx: ExprxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BlockExprxContext extends ExprxContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: ExprxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ForLoopExprContext extends ExprxContext {
	public forLoop(): ForLoopContext {
		return this.getRuleContext(0, ForLoopContext);
	}
	constructor(ctx: ExprxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class WhileLoopExprContext extends ExprxContext {
	public whileLoop(): WhileLoopContext {
		return this.getRuleContext(0, WhileLoopContext);
	}
	constructor(ctx: ExprxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SendExprxContext extends ExprxContext {
	public sendStmt(): SendStmtContext {
		return this.getRuleContext(0, SendStmtContext);
	}
	constructor(ctx: ExprxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LogExprxContext extends ExprxContext {
	public logStmt(): LogStmtContext {
		return this.getRuleContext(0, LogStmtContext);
	}
	constructor(ctx: ExprxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FailExprxContext extends ExprxContext {
	public failStmt(): FailStmtContext {
		return this.getRuleContext(0, FailStmtContext);
	}
	constructor(ctx: ExprxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnExprContext extends ExprxContext {
	public RETURN(): TerminalNode { return this.getToken(CWScriptParser.RETURN, 0); }
	public rval(): RvalContext | undefined {
		return this.tryGetRuleContext(0, RvalContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(ctx: ExprxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ScopeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_scope; }
	public copyFrom(ctx: ScopeContext): void {
		super.copyFrom(ctx);
	}
}
export class ExprScopeContext extends ScopeContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ScopeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BlockScopeContext extends ScopeContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: ScopeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class RvalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_rval; }
	public copyFrom(ctx: RvalContext): void {
		super.copyFrom(ctx);
	}
}
export class IfRValContext extends RvalContext {
	public ifStmt(): IfStmtContext {
		return this.getRuleContext(0, IfStmtContext);
	}
	constructor(ctx: RvalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExprRValContext extends RvalContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: RvalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class BinaryOpContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS, 0); }
	public DASH(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DASH, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.SLASH, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.STAR, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PERCENT, 0); }
	public EQ2(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ2, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.NEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.GTE, 0); }
	public AMP2(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.AMP2, 0); }
	public PIPE2(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PIPE2, 0); }
	public QUESTION2(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUESTION2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_binaryOp; }
}


export class UnaryPreOpContext extends ParserRuleContext {
	public PLUS2(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS2, 0); }
	public DASH2(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DASH2, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_unaryPreOp; }
}


export class UnaryPostOpContext extends ParserRuleContext {
	public PLUS2(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS2, 0); }
	public DASH2(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DASH2, 0); }
	public QUESTION1(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUESTION1, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_unaryPostOp; }
}


export class NsIdentContext extends ParserRuleContext {
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.Ident);
		} else {
			return this.getToken(CWScriptParser.Ident, i);
		}
	}
	public COLON2(): TerminalNode[];
	public COLON2(i: number): TerminalNode;
	public COLON2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COLON2);
		} else {
			return this.getToken(CWScriptParser.COLON2, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_nsIdent; }
}


export class StateIdentContext extends ParserRuleContext {
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public DOT1(): TerminalNode[];
	public DOT1(i: number): TerminalNode;
	public DOT1(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.DOT1);
		} else {
			return this.getToken(CWScriptParser.DOT1, i);
		}
	}
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.Ident);
		} else {
			return this.getToken(CWScriptParser.Ident, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateIdent; }
}


export class LetContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(CWScriptParser.LET, 0); }
	public varDecl(): VarDeclContext[];
	public varDecl(i: number): VarDeclContext;
	public varDecl(i?: number): VarDeclContext | VarDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarDeclContext);
		} else {
			return this.getRuleContext(i, VarDeclContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COLON);
		} else {
			return this.getToken(CWScriptParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_let; }
}


export class VarDeclContext extends ParserRuleContext {
	public Ident(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.Ident, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public typeDecl(): TypeDeclContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclContext);
	}
	public EQ1(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ1, 0); }
	public destructuring(): DestructuringContext | undefined {
		return this.tryGetRuleContext(0, DestructuringContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public queryStmt(): QueryStmtContext | undefined {
		return this.tryGetRuleContext(0, QueryStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_varDecl; }
}


export class DestructuringContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_destructuring; }
	public copyFrom(ctx: DestructuringContext): void {
		super.copyFrom(ctx);
	}
}
export class ArrayDestructuringContext extends DestructuringContext {
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.Ident);
		} else {
			return this.getToken(CWScriptParser.Ident, i);
		}
	}
	public destructuring(): DestructuringContext[];
	public destructuring(i: number): DestructuringContext;
	public destructuring(i?: number): DestructuringContext | DestructuringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DestructuringContext);
		} else {
			return this.getRuleContext(i, DestructuringContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: DestructuringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class TupleDestructuringContext extends DestructuringContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.Ident);
		} else {
			return this.getToken(CWScriptParser.Ident, i);
		}
	}
	public destructuring(): DestructuringContext[];
	public destructuring(i: number): DestructuringContext;
	public destructuring(i?: number): DestructuringContext | DestructuringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DestructuringContext);
		} else {
			return this.getRuleContext(i, DestructuringContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: DestructuringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectDestructuringContext extends DestructuringContext {
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.Ident);
		} else {
			return this.getToken(CWScriptParser.Ident, i);
		}
	}
	public destructuring(): DestructuringContext[];
	public destructuring(i: number): DestructuringContext;
	public destructuring(i?: number): DestructuringContext | DestructuringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DestructuringContext);
		} else {
			return this.getRuleContext(i, DestructuringContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: DestructuringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class GlobalFnDefContext extends ParserRuleContext {
	public _kind!: Token;
	public _name!: NsIdentContext;
	public fnSigArgs(): FnSigArgsContext {
		return this.getRuleContext(0, FnSigArgsContext);
	}
	public fnSigRet(): FnSigRetContext {
		return this.getRuleContext(0, FnSigRetContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public nsIdent(): NsIdentContext {
		return this.getRuleContext(0, NsIdentContext);
	}
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXEC, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUERY, 0); }
	public FN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FN, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_globalFnDef; }
}


export class MethodDefContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_methodDef; }
	public copyFrom(ctx: MethodDefContext): void {
		super.copyFrom(ctx);
	}
}
export class InstantiateMethodDefContext extends MethodDefContext {
	public INSTANTIATE(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
	public fnSigArgs(): FnSigArgsContext {
		return this.getRuleContext(0, FnSigArgsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public nsIdent(): NsIdentContext | undefined {
		return this.tryGetRuleContext(0, NsIdentContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public fnSigRet(): FnSigRetContext | undefined {
		return this.tryGetRuleContext(0, FnSigRetContext);
	}
	constructor(ctx: MethodDefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SingleMethodDefContext extends MethodDefContext {
	public _kind!: Token;
	public blockFnDef(): BlockFnDefContext {
		return this.getRuleContext(0, BlockFnDefContext);
	}
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXEC, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUERY, 0); }
	public FN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FN, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(ctx: MethodDefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BlockMethodDefContext extends MethodDefContext {
	public _kind!: Token;
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXEC, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUERY, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public blockFnDef(): BlockFnDefContext[];
	public blockFnDef(i: number): BlockFnDefContext;
	public blockFnDef(i?: number): BlockFnDefContext | BlockFnDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockFnDefContext);
		} else {
			return this.getRuleContext(i, BlockFnDefContext);
		}
	}
	public cmdsep(): CmdsepContext[];
	public cmdsep(i: number): CmdsepContext;
	public cmdsep(i?: number): CmdsepContext | CmdsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CmdsepContext);
		} else {
			return this.getRuleContext(i, CmdsepContext);
		}
	}
	constructor(ctx: MethodDefContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class BlockFnDefContext extends ParserRuleContext {
	public fnName(): FnNameContext {
		return this.getRuleContext(0, FnNameContext);
	}
	public fnSigArgs(): FnSigArgsContext {
		return this.getRuleContext(0, FnSigArgsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public fnSigRet(): FnSigRetContext | undefined {
		return this.tryGetRuleContext(0, FnSigRetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_blockFnDef; }
}


export class FnNameContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnName; }
	public copyFrom(ctx: FnNameContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentFnNameContext extends FnNameContext {
	public nsIdent(): NsIdentContext {
		return this.getRuleContext(0, NsIdentContext);
	}
	constructor(ctx: FnNameContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstantiateFnNameContext extends FnNameContext {
	public INSTANTIATE(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
	constructor(ctx: FnNameContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class FnSigArgsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public fnArg(): FnArgContext[];
	public fnArg(i: number): FnArgContext;
	public fnArg(i?: number): FnArgContext | FnArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FnArgContext);
		} else {
			return this.getRuleContext(i, FnArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnSigArgs; }
}


export class FnSigRetContext extends ParserRuleContext {
	public SLIM_ARROW(): TerminalNode { return this.getToken(CWScriptParser.SLIM_ARROW, 0); }
	public typeDecl(): TypeDeclContext {
		return this.getRuleContext(0, TypeDeclContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnSigRet; }
}


export class FnArgContext extends ParserRuleContext {
	public nsIdent(): NsIdentContext {
		return this.getRuleContext(0, NsIdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public typeDecl(): TypeDeclContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclContext);
	}
	public EQ1(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ1, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnArg; }
}


export class ContractDefContext extends ParserRuleContext {
	public _contractName!: Token;
	public _baseContract!: Token;
	public _Ident!: Token;
	public _baseInterface: Token[] = [];
	public CONTRACT(): TerminalNode { return this.getToken(CWScriptParser.CONTRACT, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.Ident);
		} else {
			return this.getToken(CWScriptParser.Ident, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
	public contractBody(): ContractBodyContext[];
	public contractBody(i: number): ContractBodyContext;
	public contractBody(i?: number): ContractBodyContext | ContractBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractBodyContext);
		} else {
			return this.getRuleContext(i, ContractBodyContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	public cmdsep(): CmdsepContext[];
	public cmdsep(i: number): CmdsepContext;
	public cmdsep(i?: number): CmdsepContext | CmdsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CmdsepContext);
		} else {
			return this.getRuleContext(i, CmdsepContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_contractDef; }
}


export class ContractBodyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_contractBody; }
	public copyFrom(ctx: ContractBodyContext): void {
		super.copyFrom(ctx);
	}
}
export class EventContractBodyContext extends ContractBodyContext {
	public eventDef(): EventDefContext {
		return this.getRuleContext(0, EventDefContext);
	}
	constructor(ctx: ContractBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ErrorContractBodyContext extends ContractBodyContext {
	public errorDef(): ErrorDefContext {
		return this.getRuleContext(0, ErrorDefContext);
	}
	constructor(ctx: ContractBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StructureContractBodyContext extends ContractBodyContext {
	public structureDef(): StructureDefContext {
		return this.getRuleContext(0, StructureDefContext);
	}
	constructor(ctx: ContractBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StateContractBodyContext extends ContractBodyContext {
	public stateDef(): StateDefContext {
		return this.getRuleContext(0, StateDefContext);
	}
	constructor(ctx: ContractBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodContractBodyContext extends ContractBodyContext {
	public methodDef(): MethodDefContext {
		return this.getRuleContext(0, MethodDefContext);
	}
	constructor(ctx: ContractBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class InterfaceDefContext extends ParserRuleContext {
	public _interfaceName!: Token;
	public _Ident!: Token;
	public _baseInterface: Token[] = [];
	public INTERFACE(): TerminalNode { return this.getToken(CWScriptParser.INTERFACE, 0); }
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.Ident);
		} else {
			return this.getToken(CWScriptParser.Ident, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public interfaceBody(): InterfaceBodyContext[];
	public interfaceBody(i: number): InterfaceBodyContext;
	public interfaceBody(i?: number): InterfaceBodyContext | InterfaceBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceBodyContext);
		} else {
			return this.getRuleContext(i, InterfaceBodyContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	public cmdsep(): CmdsepContext[];
	public cmdsep(i: number): CmdsepContext;
	public cmdsep(i?: number): CmdsepContext | CmdsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CmdsepContext);
		} else {
			return this.getRuleContext(i, CmdsepContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_interfaceDef; }
}


export class InterfaceBodyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_interfaceBody; }
	public copyFrom(ctx: InterfaceBodyContext): void {
		super.copyFrom(ctx);
	}
}
export class EventInterfaceBodyContext extends InterfaceBodyContext {
	public eventDef(): EventDefContext {
		return this.getRuleContext(0, EventDefContext);
	}
	constructor(ctx: InterfaceBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ErrorInterfaceBodyContext extends InterfaceBodyContext {
	public errorDef(): ErrorDefContext {
		return this.getRuleContext(0, ErrorDefContext);
	}
	constructor(ctx: InterfaceBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StructureInterfaceBodyContext extends InterfaceBodyContext {
	public structureDef(): StructureDefContext {
		return this.getRuleContext(0, StructureDefContext);
	}
	constructor(ctx: InterfaceBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodInterfaceBodyContext extends InterfaceBodyContext {
	public methodDef(): MethodDefContext {
		return this.getRuleContext(0, MethodDefContext);
	}
	constructor(ctx: InterfaceBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class StructureDefContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(CWScriptParser.STRUCT, 0); }
	public Ident(): TerminalNode { return this.getToken(CWScriptParser.Ident, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public typedIdent(): TypedIdentContext[];
	public typedIdent(i: number): TypedIdentContext;
	public typedIdent(i?: number): TypedIdentContext | TypedIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypedIdentContext);
		} else {
			return this.getRuleContext(i, TypedIdentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structureDef; }
}


export class EventDefContext extends ParserRuleContext {
	public EVENT(): TerminalNode { return this.getToken(CWScriptParser.EVENT, 0); }
	public Ident(): TerminalNode { return this.getToken(CWScriptParser.Ident, 0); }
	public namedTupleType(): NamedTupleTypeContext {
		return this.getRuleContext(0, NamedTupleTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_eventDef; }
}


export class ErrorDefContext extends ParserRuleContext {
	public ERROR(): TerminalNode { return this.getToken(CWScriptParser.ERROR, 0); }
	public Ident(): TerminalNode { return this.getToken(CWScriptParser.Ident, 0); }
	public namedTupleType(): NamedTupleTypeContext {
		return this.getRuleContext(0, NamedTupleTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_errorDef; }
}


export class StateDefContext extends ParserRuleContext {
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	public typedIdent(): TypedIdentContext[];
	public typedIdent(i: number): TypedIdentContext;
	public typedIdent(i?: number): TypedIdentContext | TypedIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypedIdentContext);
		} else {
			return this.getRuleContext(i, TypedIdentContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	public SCOLON(): TerminalNode[];
	public SCOLON(i: number): TerminalNode;
	public SCOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.SCOLON);
		} else {
			return this.getToken(CWScriptParser.SCOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateDef; }
}


export class TypeDeclContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeDecl; }
	public copyFrom(ctx: TypeDeclContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentTypeDeclContext extends TypeDeclContext {
	public Ident(): TerminalNode { return this.getToken(CWScriptParser.Ident, 0); }
	constructor(ctx: TypeDeclContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class TupleTypeDeclContext extends TypeDeclContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public Ident(): TerminalNode[];
	public Ident(i: number): TerminalNode;
	public Ident(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.Ident);
		} else {
			return this.getToken(CWScriptParser.Ident, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: TypeDeclContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NamedTupleTypeDeclContext extends TypeDeclContext {
	public namedTupleType(): NamedTupleTypeContext {
		return this.getRuleContext(0, NamedTupleTypeContext);
	}
	constructor(ctx: TypeDeclContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class TypedIdentContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(CWScriptParser.Ident, 0); }
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public typeDecl(): TypeDeclContext {
		return this.getRuleContext(0, TypeDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typedIdent; }
}


export class NamedTupleTypeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public typedIdent(): TypedIdentContext[];
	public typedIdent(i: number): TypedIdentContext;
	public typedIdent(i?: number): TypedIdentContext | TypedIdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypedIdentContext);
		} else {
			return this.getRuleContext(i, TypedIdentContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_namedTupleType; }
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public cmdsep(): CmdsepContext[];
	public cmdsep(i: number): CmdsepContext;
	public cmdsep(i?: number): CmdsepContext | CmdsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CmdsepContext);
		} else {
			return this.getRuleContext(i, CmdsepContext);
		}
	}
	public exprx(): ExprxContext[];
	public exprx(i: number): ExprxContext;
	public exprx(i?: number): ExprxContext | ExprxContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprxContext);
		} else {
			return this.getRuleContext(i, ExprxContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_block; }
}


export class ForLoopContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(CWScriptParser.FOR, 0); }
	public varDecl(): VarDeclContext {
		return this.getRuleContext(0, VarDeclContext);
	}
	public IN(): TerminalNode { return this.getToken(CWScriptParser.IN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_forLoop; }
}


export class WhileLoopContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(CWScriptParser.WHILE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_whileLoop; }
}


export class IfStmtContext extends ParserRuleContext {
	public _expr!: ExprContext;
	public _condition: ExprContext[] = [];
	public _ifBranch!: ScopeContext;
	public _scope!: ScopeContext;
	public _elseifBranch: ScopeContext[] = [];
	public _elseBranch!: ScopeContext;
	public IF(): TerminalNode[];
	public IF(i: number): TerminalNode;
	public IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.IF);
		} else {
			return this.getToken(CWScriptParser.IF, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public scope(): ScopeContext[];
	public scope(i: number): ScopeContext;
	public scope(i?: number): ScopeContext | ScopeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScopeContext);
		} else {
			return this.getRuleContext(i, ScopeContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public ELSE(): TerminalNode[];
	public ELSE(i: number): TerminalNode;
	public ELSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.ELSE);
		} else {
			return this.getToken(CWScriptParser.ELSE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_ifStmt; }
}


export class SendStmtContext extends ParserRuleContext {
	public SEND(): TerminalNode { return this.getToken(CWScriptParser.SEND, 0); }
	public nsIdent(): NsIdentContext {
		return this.getRuleContext(0, NsIdentContext);
	}
	public map(): MapContext {
		return this.getRuleContext(0, MapContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_sendStmt; }
}


export class QueryStmtContext extends ParserRuleContext {
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public nsIdent(): NsIdentContext {
		return this.getRuleContext(0, NsIdentContext);
	}
	public map(): MapContext {
		return this.getRuleContext(0, MapContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryStmt; }
}


export class LogStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_logStmt; }
	public copyFrom(ctx: LogStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class AttributesLogStmtContext extends LogStmtContext {
	public LOG(): TerminalNode { return this.getToken(CWScriptParser.LOG, 0); }
	public map(): MapContext {
		return this.getRuleContext(0, MapContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(ctx: LogStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EventLogStmtContext extends LogStmtContext {
	public LOG(): TerminalNode { return this.getToken(CWScriptParser.LOG, 0); }
	public createEventOrError(): CreateEventOrErrorContext {
		return this.getRuleContext(0, CreateEventOrErrorContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(ctx: LogStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class FailStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_failStmt; }
	public copyFrom(ctx: FailStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class EmptyFailStmtContext extends FailStmtContext {
	public FAIL(): TerminalNode { return this.getToken(CWScriptParser.FAIL, 0); }
	constructor(ctx: FailStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ErrorFailStmtContext extends FailStmtContext {
	public FAIL(): TerminalNode { return this.getToken(CWScriptParser.FAIL, 0); }
	public createEventOrError(): CreateEventOrErrorContext {
		return this.getRuleContext(0, CreateEventOrErrorContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(ctx: FailStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MessageFailStmtContext extends FailStmtContext {
	public FAIL(): TerminalNode { return this.getToken(CWScriptParser.FAIL, 0); }
	public rval(): RvalContext {
		return this.getRuleContext(0, RvalContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(ctx: FailStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CreateEventOrErrorContext extends ParserRuleContext {
	public nsIdent(): NsIdentContext {
		return this.getRuleContext(0, NsIdentContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public rval(): RvalContext[];
	public rval(i: number): RvalContext;
	public rval(i?: number): RvalContext | RvalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RvalContext);
		} else {
			return this.getRuleContext(i, RvalContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_createEventOrError; }
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class StringLiteralContext extends LiteralContext {
	public String(): TerminalNode { return this.getToken(CWScriptParser.String, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NumberLiteralContext extends LiteralContext {
	public Number(): TerminalNode { return this.getToken(CWScriptParser.Number, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BooleanLiteralContext extends LiteralContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FALSE, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayLiteralContext extends LiteralContext {
	public array(): ArrayContext {
		return this.getRuleContext(0, ArrayContext);
	}
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MapLiteralContext extends LiteralContext {
	public map(): MapContext {
		return this.getRuleContext(0, MapContext);
	}
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class TupleLiteralContext extends LiteralContext {
	public tuple(): TupleContext {
		return this.getRuleContext(0, TupleContext);
	}
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ArrayContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public rval(): RvalContext[];
	public rval(i: number): RvalContext;
	public rval(i?: number): RvalContext | RvalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RvalContext);
		} else {
			return this.getRuleContext(i, RvalContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_array; }
}


export class MapContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public mapField(): MapFieldContext[];
	public mapField(i: number): MapFieldContext;
	public mapField(i?: number): MapFieldContext | MapFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapFieldContext);
		} else {
			return this.getRuleContext(i, MapFieldContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_map; }
}


export class MapFieldContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(CWScriptParser.Ident, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public rval(): RvalContext | undefined {
		return this.tryGetRuleContext(0, RvalContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_mapField; }
}


export class TupleContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.NL);
		} else {
			return this.getToken(CWScriptParser.NL, i);
		}
	}
	public rval(): RvalContext[];
	public rval(i: number): RvalContext;
	public rval(i?: number): RvalContext | RvalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RvalContext);
		} else {
			return this.getRuleContext(i, RvalContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_tuple; }
}


