lexer grammar CWScriptLexer;

channels {
	comment,
	shebang
}

SHEBANG: '#!' ~([\r\n]) NL -> channel(shebang);
Comment: '//' (~([\r\n]))* NL -> channel(comment);
BlockComment: '/*' (BlockComment | (.)*?) '*/' -> channel(comment);
IMPORT: 'import';
FROM: 'from';
AS: 'as';
IF: 'if';
ELSE: 'else';
IN: 'in';
LET: 'let';
TRUE: 'true';
FALSE: 'false';
FOR: 'for';
WHILE: 'while';
RETURN: 'return';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACK: '[';
RBRACK: ']';
COLON2: '::';
COLON: ':';
SCOLON: ';';
COMMA: ',';
AMP2: '&&';
PIPE2: '||';
SLIM_ARROW: '->';
EQ2: '==';
EQ1: '=';
NEQ: '!=';
LTE: '<=';
LT: '<';
GTE: '>=';
GT: '>';
ASSIGNOP: (PLUS | DASH | STAR | SLASH) '=';
PLUS2: '++';
PLUS: '+';
DASH2: '--';
DASH: '-';
STAR: '*';
BANG: '!';
QUESTION2: '??';
QUESTION1: '?';
SLASH: '/';
PERCENT: '%';
FN: 'fn';
INSTANTIATE: 'instantiate';
EXEC: 'exec';
QUERY: 'query';
CONTRACT: 'contract';
EVENT: 'event';
STRUCT: 'struct';
ENUM: 'enum';
INTERFACE: 'interface';
IMPLEMENTS: 'implements';
EXTENDS: 'extends';
SEND: 'send';
LOG: 'log';
FAIL: 'fail';
STATE: 'state';
ERROR: 'error';
fragment Bin: ([01])+;
fragment Oct: ([0-7])+;
fragment Dec: ([0-9])+;
fragment Hex: ([0-9A-Fa-f])+;
fragment Sign: [+-];
Number: ((Sign)? Dec ('.' Dec)? ('e' (Sign)? Dec)? | (Sign)? '.' Dec ('e' Dec)? | (Sign)? '0x' Hex | (Sign)? Oct '_8' | (Sign)? Bin '_2');
Ident: [A-Za-z_] ([A-Za-z_0-9])*;
DOT3: '...';
DOT2: '..';
DOT1: '.';
WS: ([ \t])+ -> skip;
NL: ([\r\n])+;
String: ('\'' ((EscapeSequence | .))*? '\'' | '"' ((EscapeSequence | .))*? '"');
EscapeSequence: '\\' (.);


