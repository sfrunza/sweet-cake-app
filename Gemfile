source 'https://rubygems.org'

ruby "2.5.1"
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

group :test do
  gem 'coveralls', require: false
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.5'
# Use postgresql as the database for Active Record

# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
gem 'carrierwave', '~> 1.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'
gem 'mail_form'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do

end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
end

group :production do
  gem 'pg', '>= 0.18', '< 2.0'
  gem 'foreman', '~> 0.82.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'pry-rails', group: [:development, :test]
gem 'jquery-rails'
gem 'rspec-rails', group: [:development, :test]
gem 'capybara', group: [:development, :test]
gem 'launchy', group: [:development, :test]
gem 'factory_bot', group: [:development, :test]
gem 'valid_attribute', group: [:development, :test]
gem 'shoulda-matchers', group: [:development, :test], require: false
gem 'devise'
gem 'foundation-rails', '~> 5.0'
gem 'webpacker', '~> 3.2'
gem 'activeadmin', github: 'activeadmin'
gem 'inherited_resources', git: 'https://github.com/activeadmin/inherited_resources'
