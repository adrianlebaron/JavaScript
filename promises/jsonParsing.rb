# JSON Parsing Guide for API Development video
# https://bottega.devcamp.com/full-stack-development-javascript-python/guide/1094

# Dish
# https://rails.devcamp.com/ruby-gem-walkthroughs/api-management-gems/dish-gem

# Dish

# Learn how to integrate the Dish gem for parsing JSON data and giving a more standardized process for using the data in an application.
# MARK COMPLETE
# DOWNLOAD VIDEO
# What dish Provides
# Dish is a great gem that I use on a regular basis, I bring it into applications that need to parse JSON API data. Essentially it converts hashes to plain Ruby objects. This means that you can use the familiar dot syntax on JSON data with minimal effort. Im personally not a fan of litering my codebase with hash parser such as object_name['parent']['child'] when I instead could use syntax such as object_name.parent.child.

# Drawbacks
# The only main drawback I see is that Dish hasnt been updated in quite a while, however it still works great for all of the applications that I integrate it into.

# Implementation / Dish Example
# To get started Im going to build an application that calls a JSON API and instead of using a local database to query and return the records were going to use the API data. This is a common pattern in microservice type applications so I thought it would be a good example. In fact I just dish this morning when I built a feature for a client that had an employee database hosted on an ActiveDirectory server and they wanted the ability to view all of the employees on their Ruby on Rails Intranet application.

# To get started lets create a basic application:

# rails new dish-gem-tutorial -T
# After running rake db:create && rake db:migrate lets install the gems well need for this demo in the Gemfile:

# gem 'httparty', '~> 0.13.7'
# gem "dish", require: "dish/ext"
# We need the httparty gem since were going to be calling an outside service, Ill cover HTTP party in another demo later on. Run bundle and then create a plain old Ruby class file post_tool.rb:

# app/models/post_tool.rb

class ApiTool
  def initialize
    @posts = api_response
  end

  def api_response
    HTTParty.get('http://edutechional-resty.herokuapp.com/posts.json')
  end

  def return_posts
    @posts.to_dish
  end
end
# This is a basic Ruby class that has the job of calling the API and returning the result set. Going method by method:

# initialize - the class initializer method calls the api_response method and stores the result in an instance variable @posts

# api_response - this uses the HTTParty get method to call the API and return the response

# return_posts - this method calls the to_dish method on the @posts instance variable. This is the key component for converting the API response to data we can work with like a normal Ruby object

# Now lets create a controller that will call this API class posts_controller.rb:

# app/controllers/posts_controller.rb

class PostsController < ApplicationController
  def index
    post_api_call = ApiTool.new
    @posts = post_api_call.return_posts
  end
end
# As youll see this is a pretty standard Rails index method, with a few key differences. Its creating a new instance of PostTool and it stores it in a local variable (side note: I didnt use a class method because I thought this was more readable). From there we simply call our return_posts method and store everyhing in the index methods @posts instance variable so it can be made available to the view.

# Now lets draw a route for this action:

# config/routes.rb

# get 'posts', to: "posts#index"
# Lastly we need to create a directory for posts and a view template file app/views/posts/index.html.erb and fill it with some code to confirm that everything is working:

# <!-- app/views/posts/index.html.erb -->

<% @posts.each do |post| %>
  <p><%= link_to post.title, post.url %></p>
  <p><%= post.description %></p>
<% end %>
# Now this is t she cool part with Dish, notice how this ERB code looks pretty much identical to a normal Rails view template? We're taking in an instance variable, iterating over it and calling each of the attributes with dot syntax (e.g. post.title, post.url, etc.). If you weren't using the Dish gem you'd have to either build a parser to do this in the model file or gasp parse it on the fly in the view (please don't do that... ever).

# If you startup the Rails server and navigate to localhost:3000/posts you'll see that the app is working and our API results are shown on the screen in the same way as if we were calling them from the database!

# large

# The only thing I want to fix is the link, notice how if you click on the title it takes you to the JSON URL from the API? Let's create a view helper method to fix this:

# # app/helpers/application_helper.rb

module ApplicationHelper
  def remove_json(json_url)
    json_url.gsub('.json', '')
  end
end
# This view helper method simply removes the .json text from the URL string, we can update the view code like this:

# <!-- app/views/posts/index.html.erb -->

<% @posts.each do |post| %>
  <p><%= link_to post.title, remove_json(post.url) %></p>
  <p><%= post.description %></p>
<% end %>
# Refreshing the page will show that the link is now going to the user friendly URL, nice work!