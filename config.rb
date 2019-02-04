# frozen_string_literal: true

## Set the Time Zone
Time.zone = 'America/New_York'

## Set the URL
set :url_root, 'https://coreyja.com'

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
page 'error.html'
page 'resume.html', layout: :base

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

set :markdown_engine, :kramdown
activate :syntax, line_numbers: true
###
# Helpers
###

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.prefix = 'blog'

  blog.permalink = '{year}/{month}/{day}/{title}.html'
  # Matcher for blog source files
  blog.sources = '{timestamp}-{title}.html'
  blog.taglink = 'tags/{tag}.html'
  blog.layout = 'blog_post_layout'
  blog.year_link = '{year}.html'
  blog.month_link = '{year}/{month}.html'
  blog.day_link = '{year}/{month}/{day}.html'
  blog.default_extension = '.md'

  blog.tag_template = 'tag.html'
  blog.calendar_template = 'calendar.html'

  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
  activate :gzip
end

activate :s3_sync do |s3_sync|
  s3_sync.region                     = 'us-east-1' # The AWS region for your bucket.
  s3_sync.delete                     = true
  s3_sync.after_build                = false # We do not chain after the build step by default.
  s3_sync.prefer_gzip                = true
  s3_sync.path_style                 = true
  s3_sync.reduced_redundancy_storage = false
  s3_sync.acl                        = 'public-read'
  s3_sync.encryption                 = false
  s3_sync.prefix                     = ''
  s3_sync.version_bucket             = false
  s3_sync.index_document             = 'index.html'
  s3_sync.error_document             = '404.html'
end

activate :cloudfront do |cf|
  cf.access_key_id = ENV['AWS_ACCESS_KEY_ID']
  cf.secret_access_key = ENV['AWS_SECRET_ACCESS_KEY']
  cf.distribution_id = ENV['AWS_DISTRIBUTION_ID']
  cf.filter = /\.html$/i
end

app.config[:asset_extensions] += %w[.json]
activate :asset_hash do |opts|
  opts.sources += %w[.json]
  # opts.ignore = [/.*\.woff/, /.*\.woff2/]
end

activate :autoprefixer do |config|
  config.browsers = ['last 3 versions']
end

activate :search_engine_sitemap

activate :robots,
         rules: [
           { user_agent: '*', allow: %w[/] }
         ],
         sitemap: 'https://coreyja.com/sitemap.xml'
