---
path: '/rails-devise-and-omniauth'
date: '2017-01-13'
title: "Implement Devise and Omniauth in Rails"
published: true
---

How to add Devise and Omniauth to your new Rails application:

#### Step 1: Generate Your Rails Application
`rails new MyApplication`

#### Step 2: Add the devise gem to your Gemfile
`gem 'devise'`

`bundle install`

#### Step 3: Install Devise and a Devise User
`rails generate devise:install`

`rails generate devise User`

I also want to add two additional columns (or attributes) to my Users table. I want to add user attributes for a provider and a uid. This is data we will receive from our Omniauth provider and will be saved to the database.<br>

`rails g migration AddColumnsToUsers provider uid`

The above command will create two columns that are strings by default.

Now run the pending migrations with `rake db:migrate`

####Step 4: Create View Partials (Optional)

Now we will create two partials to render in our main application.html.erb. One is a navbar that will display links dependent on whether the current user is logged in. The other partial renders flash messages if they exist.

`app/views/layouts/_messages.html.erb:`

```html
<%= content_tag(:div, flash[:error], :id => "flash_error") if flash[:error] %>
<%= content_tag(:div, flash[:notice], :id => "flash_notice") if flash[:notice] %>
<%= content_tag(:div, flash[:alert], :id => "flash_alert") if flash[:alert] %>
```

`app/views/layouts/_navigation.html.erb:`

```html
<% if current_user %>
  <li>Hello,<%= current_user.email %></li>
  <li><%= link_to "Log Out", destroy_user_session_path, :method => "delete" %></li>
<% else %>
  <li><%= link_to "Sign In", new_user_session_path %></li>
  <li><%= link_to "Sign Up", new_user_registration_path %></li>
<% end %>
```

And finally call the partials in app/views/layouts/application.html.erb:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>MyApplication</title>
  </head>
  <body>
    <%= render 'layouts/messages' %>
    <%= render 'layouts/navigation' %>
    <%= yield %>
  </body>
</html>
```

#### Step 5: Implement Omniauth

Head over to the <a href="https://github.com/omniauth/omniauth">Omniauth gem on Github</a> and read the documentation to familiarize yourself with how it works. There is also a <a href="https://github.com/omniauth/omniauth/wiki/List-of-Strategies">community maintained list</a> of providers that your app can use to login/create new users via Omniauth. They range from well-known services like Google to obscure providers that you've probably never heard of before.

Once you choose a provider, read the documentation on its github page and find out how to connect your app to the provider. Amazon and Facebook have developer pages that allow you to connect your app. You will give the provider a callback URL within your app so they know where to send the user data. Most importantly, they will provide you with an **AppID** and a **SecretID** which you will add to your App. Read the documentation of your selected provider for more info on the details.

For this tutorial, I chose Amazon as the provider.

Now we need to add some more devise features to the Devise User Model. We will also create a class method for finding or creating a new user based on the hash we receive from our Oauth provider callback.

Add the following code to /app/models/user.rb:

```ruby
class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
     :omniauthable, :omniauth_providers => [:amazon]
     #substitute your provider here

  def self.from_omniauth(auth)
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.email = auth.info.email
        user.password = Devise.friendly_token[0,20]
      end
  end
end
```

Now add your **AppID** and **SecretID** to /config/initializers/devise.rb:

```ruby
config.omniauth :amazon, APPID, SECRETID
```

In /config/routes.rb, specify which controller will handle callbacks:

```ruby
devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
```

Finally, create a callbacks controller and a method for your provider:

```ruby
class CallbacksController < Devise::OmniauthCallbacksController
    def amazon
        @user = User.from_omniauth(request.env["omniauth.auth"])
        sign_in_and_redirect @user
    end
end
```

On the login and signup pages you should now see an option to sign-in/sign-up via your provider. I have a recorded a video tutorial of the process if you are a visual learner:

<iframe style="display: block; margin: 0 auto;" width="420" height="315" src="http://www.youtube.com/embed/8DdlW-lzowA" frameborder="0" allowfullscreen>
</iframe>
