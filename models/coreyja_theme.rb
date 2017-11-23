# frozen_string_literal: true

require 'rouge'
# Rouge theme for the Coreyja Site used for Syntax Highlighting
class CoreyjaTheme < Rouge::CSSTheme
  name 'coreyja'

  palette black: '#000000'
  palette bright_green: '#99cc00'
  palette bright_pink: '#ff5374'
  palette carmine: '#96376a'
  palette dark: '#49483e'
  palette dark_grey: '#888888'
  palette dark_red: '#942828'
  palette dimgrey: '#75715e'
  palette dimgreen: '#324932'
  palette dimred: '#401010'
  palette emperor: '#555555'
  palette grey: '#999999'
  palette light_grey: '#aaaaaa'
  palette light_violet: '#aa66cc'
  palette soft_cyan: '#33b5e5'
  palette soft_yellow: '#e6db74'
  palette very_dark: '#1e0010'
  palette orange: '#ffbb33'
  palette white: '#ffffff'

  style Comment,
        Comment::Multiline,
        Comment::Single,                  fg: :dimgrey, italic: true
  style Comment::Preproc,                 fg: :dimgrey, bold: true
  style Comment::Special,                 fg: :dimgrey, italic: true, bold: true
  style Error,                            fg: :carmine, bg: :very_dark
  style Generic::Inserted,                fg: :white, bg: :dimgreen
  style Generic::Deleted,                 fg: :white, bg: :dimred
  style Generic::Emph,                    fg: :black, italic: true
  style Generic::Error,
        Generic::Traceback,               fg: :dark_red
  style Generic::Heading,                 fg: :grey
  style Generic::Output,                  fg: :dark_grey
  style Generic::Prompt,                  fg: :emperor
  style Generic::Strong,                  bold: true
  style Generic::Subheading,              fg: :light_grey
  style Keyword,
        Keyword::Constant,
        Keyword::Declaration,
        Keyword::Type, fg: :soft_cyan, bold: true
  style Keyword::Reserved,
        Keyword::Pseudo, fg: :bright_pink, bold: true
  style Keyword::Namespace,
        Operator::Word,
        Operator, fg: :orange, bold: true
  style Literal::Number::Float,
        Literal::Number::Hex,
        Literal::Number::Integer::Long,
        Literal::Number::Integer,
        Literal::Number::Oct,
        Literal::Number,
        Literal::String::Escape, fg: :light_violet
  style Literal::String::Backtick,
        Literal::String::Char,
        Literal::String::Doc,
        Literal::String::Double,
        Literal::String::Heredoc,
        Literal::String::Interpol,
        Literal::String::Other,
        Literal::String::Regex,
        Literal::String::Single,
        Literal::String::Symbol,
        Literal::String, fg: :orange
  style Name::Attribute, fg: :bright_green
  style Name::Class,
        Name::Decorator,
        Name::Exception,
        Name::Function, fg: :bright_green, bold: true
  style Name::Constant, fg: :bright_pink
  style Name::Builtin::Pseudo,
        Name::Builtin,
        Name::Entity,
        Name::Namespace,
        Name::Variable::Class,
        Name::Variable::Global,
        Name::Variable::Instance,
        Name::Variable,
        Text::Whitespace, fg: :grey
  style Name::Label,                      fg: :grey, bold: true
  style Name::Tag,                        fg: :bright_pink
  style Text,                             fg: :grey, bg: :white
end
