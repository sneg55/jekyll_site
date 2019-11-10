source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 4.0.0"
# This is the default theme for new Jekyll sites. You may change this to anything you like.
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
#  gem "jekyll-feed", "~> 0.12"
  gem 'jekyll-paginate-v2'
  
  #problem with this plugin for lazyloading markdown images: 
  # Bundler could not find compatible versions for gem "jekyll":
  # In Gemfile:
  #   jekyll (~> 4.0.0)

  #   jekyll-lazy-load-image was resolved to 0.3.0, which depends on
  #     jekyll (~> 3.8)

  # install jekyll-lazy-load-image from local folder solve the problem
  gem 'jekyll-lazy-load-image', require: 'jekyll-lazy-load-image/auto-execution', :path => "./gems/jekyll-lazy-load-image-master" #, :git => "https://github.com/Kharabet/jekyll-lazy-load-image.git"
end
gem 'jekyll-youtube', group: :jekyll_plugins

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end
gem "liquid-c"

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
