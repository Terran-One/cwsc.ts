import { Lexer } from '@terran-one/ldtk';

const lexer = Lexer.create('CWScriptLexer', $ => {
  const {T, l} = $;

  return {
    SHEBANG: $.rule('#!', $.not([l`\r\n`]), T.NL).channel('shebang'),
    Comment: $.rule('//', $.not([l`\r\n`]).star, T.NL).channel('comment'),
    BlockComment: $.rule('/*', $.or(T.BlockComment, $.any.star.lazy), '*/').channel('comment'),

    // contract, LBRACE, RBRACE, LPAREN, RPAREN
    IMPORT: 'import',
    FROM: 'from',
    AS: 'as',
    IF: 'if',
    ELSE: 'else',
    IN: 'in',
    LET: 'let',
    TRUE: 'true',
    FALSE: 'false',
    FOR: 'for',
    WHILE: 'while',
    RETURN: 'return',

    LPAREN: '(',
    RPAREN: ')',
    LBRACE: '{',
    RBRACE: '}',
    LBRACK: '[',
    RBRACK: ']',
    COLON2: '::',
    COLON: ':',
    SCOLON: ';',
    COMMA: ',',
    AMP2: '&&',
    PIPE2: '||',
    SLIM_ARROW: '->',
    EQ2: '==',
    EQ1: '=',
    NEQ: '!=',
    LTE: '<=',
    LT: '<',
    GTE: '>=',
    GT: '>',
    ASSIGNOP: $($.or(T.PLUS, T.DASH, T.STAR, T.SLASH), '='),
    PLUS2: '++',
    PLUS: '+',
    DASH2: '--',
    DASH: '-',
    STAR: '*',
    BANG: '!',
    QUESTION2: '??',
    QUESTION1: '?',
    SLASH: '/',
    PERCENT: '%',

    FN: 'fn',
    INSTANTIATE: 'instantiate',
    EXEC: 'exec',
    QUERY: 'query',
    CONTRACT: 'contract',
    EVENT: 'event',
    STRUCT: 'struct',
    ENUM: 'enum',
    INTERFACE: 'interface',
    IMPLEMENTS: 'implements',
    EXTENDS: 'extends',
    SEND: 'send',
    LOG: 'log',
    FAIL: 'fail',
    STATE: 'state',
    ERROR: 'error',

    Bin: $.frag($(['01']).plus),
    Oct: $.frag($(['0-7']).plus),
    Dec: $.frag($(['0-9']).plus),
    Hex: $.frag($(['0-9A-Fa-f']).plus),
    Sign: $.frag(['+-']),
    Number: $.or(
      $(T.Sign.optional, T.Dec, $('.', T.Dec).optional, $('e', T.Sign.optional, T.Dec).optional),
      $(T.Sign.optional, '.', T.Dec, $('e', T.Dec).optional),
      $(T.Sign.optional, '0x', T.Hex),
      $(T.Sign.optional, T.Oct, '_8'),
      $(T.Sign.optional, T.Bin, '_2'),
    ),
    Ident: $(['A-Za-z_'], $(['A-Za-z_0-9']).star),
    DOT3: '...',
    DOT2: '..',
    DOT1: '.',

    WS: $.rule($([l` \t`]).plus).skip,
    NL: $([l`\r\n`]).plus,

    String: $.or(
      $("'", $.or(T.EscapeSequence, $.any).star.lazy, "'"),
      $('"', $.or(T.EscapeSequence, $.any).star.lazy, '"'),
    ),
    EscapeSequence: $(
      '\\',
      $.or(
        // TODO: unicode? hex? what is supported by target language (Rust?)???
        // fallback: just any character may follow
        $.any,
      ),
    ),
  }
})
.build();

export default lexer;
