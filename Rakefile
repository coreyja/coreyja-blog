# frozen_string_literal: true
require 'rubocop/rake_task'
require 'scss_lint/rake_task'

RuboCop::RakeTask.new
SCSSLint::RakeTask.new

task default: %w(test)

task test: %w(rubocop scss_lint)

namespace :post do
  desc 'Create a new post template'
  task :new, [:title] do |_, args|
    TIMESTAMP_SYNTAX = '%Y%m%d%H%M%S%L'.freeze

    file_name = "source/blog/#{Time.now.getutc.strftime(TIMESTAMP_SYNTAX)}-#{args[:title]}.html.md"

    file_contents = <<~MARKDOWN
      ---
      title:  #{args[:title]}
      author: Brandi Sanders
      date:   #{Time.now.strftime('%F')}
      tags: tag
      ---

      Some copy here Lorem ipsum the sum is golden brown and the sky is full of candy.
    MARKDOWN

    File.write(file_name,  file_contents)
  end
end
