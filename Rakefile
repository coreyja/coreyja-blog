# frozen_string_literal: true
require 'rubocop/rake_task'
require 'scss_lint/rake_task'

RuboCop::RakeTask.new
SCSSLint::RakeTask.new

task default: %w(test)

task test: %w(rubocop scss_lint)
