# frozen_string_literal: true

module ColorHelpers
  COLORS = {
    red: 'ff4444',
    green: '99cc00',
    blue: '33b5e5',
    purple: 'aa66cc',
    orange: 'ffbb33'
  }.freeze

  def color_hex(color)
    "\##{COLORS[color.to_sym]}"
  end

  def theme_color
    current_article&.data&.color || :purple
  end

  def theme_color_hex
    color_hex theme_color
  end
end
