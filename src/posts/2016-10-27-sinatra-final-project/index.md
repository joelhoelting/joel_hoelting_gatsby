---
path: '/2016-10-27-sinatra-final-project'
date: '2016-10-27'
title: "Building a Sinatra App w/ TDD"
published: true
---

For final project #2 at the Flatiron School we were required to build an MVC web application using Activerecord with Sinatra. Sinatra and Rails do similar things when it comes to developing web apps. If they were brothers, Sinatra would be the younger and less complex of the two. It has about 10,000 lines of code versus the 180,000 lines of code in the Rails codebase. Sinatra is still fairly robust and well-suited for building smaller scale web applications. It can be stretched far and is extremely intuitive. Definitely a great framework to learn before diving into Rails.

***Project Requirements***
<ol>
   <li>Build an MVC Sinatra Application.</li>
   <li>Use ActiveRecord with Sinatra.</li>
   <li>Use Multiple Models.</li>
   <li>Use at least one has_many relationship</li>
   <li>Must have user accounts. The user that created a given piece of content should be the only person who can modify that content</li>
   <li>You should validate user input to ensure that bad data isn't created</li>
</ol>

<h3>Topic</h3>

I decided to build a forum for Freegans in NYC. Freeganism is a practice and ideology of limited participation in the conventional economy and minimal consumption of resources. Freegans are colloquially called "dumpster-divers" because they will sift through trash to find food that has been discarded but is still in good condition.

<h3>Models</h3>

I drew out an outline before starting this project. As your applications get more complex, it is of the utmost importance that you write down your plans and ideas for the project before you start writing any code. Write outlines, map out associations, draw diagrams, make charts, etc. It's unlikely that you are going to spontaneously build anything of substance without planning or organizing beforehand. After spending a day organizing my project, I decided that my application would have three Models with the following associations:

**User**<br>
has many reports

**Report**<br>
belongs to users<br>
belongs to boroughs

**Borough**<br>
has many reports

*Goal*: a user can post a report, alerting the freegan community of their success, and that report will belong to the user and one of the five boroughs. For example, when calling `@user1.reports`, I would expect to see all reports belonging to that user. Similarly, when calling `@brooklyn.reports`, I would expect to see all the reports belonging to Brooklyn. Reports have an SQL table column for `user_id` and `borough_id` in order to connect all of the data together. These three models and their associations fulfill requirements #3 and #4 of the project.

<h3>Creating and Storing a User</h3>

New user creation is fairly straightforward. There is a view for a signup page that has a form with two input fields (for username and password) and a submit button. Those parameters are then used to create a new user using ActiveRecord's #create method. The code to create a new user looks like this:

{% highlight ruby%}
@user = User.create(username: params[:username], password: params[:password])
session[:user_id] = @user.id
redirect to "/#{@user.slug}"
{% endhighlight %}

Parameters from the signup form are passed in as arguments to create a new user. The user id is stored in the session hash, which verifies the user at various times and the session hash is cleared when signing out.

I fulfill requirement #5 (the user that created a given piece of content should be the only person who can modify that content), with the following code:

{% highlight ruby %}
get '/reports/:slug' do
  @report = Report.find_by_slug(params[:slug])
  if logged_in?
    @user = User.find(session[:user_id])
  end
  if (session[:user_id] == @report.user_id)
    erb :'/reports/show_edit_delete'
  else
    erb :'/reports/show'
  end
end
{% endhighlight %}

Although all reports are viewable by everyone, I did not want just anyone to be able to edit or delete any of the reports. I wanted only the creator of a report to be able to edit or delete a report they created. To accomplish this, I check to make sure the currently logged in user has the same id as the report they are viewing.

{% highlight ruby %}
session[:user_id] == @report.user_id
{% endhighlight %}

If so, they are redirected to a special view with an edit and delete button. Otherwise they are directed to the report show page, which is the same page sans edit and delete buttons.
{% highlight ruby %}
if (session[:user_id] == @report.user_id)
  erb :'/reports/show_edit_delete'
else
  erb :'/reports/show'
end
{% endhighlight %}

<h3>Test-Driven Development</h3>

I decided early on that I wanted to build this site using Test-Driven Development. At this point in the curriculum I have become adept at passing Rspec tests and I have a fairly good understanding of how to read them. Writing them has always been an intimidating prospect but I decided this was the perfect opportunity to learn.

The philosophy behind TDD is that you first write out your expectations for the code you are writing. Once the expectation is there you write the code to fullfill it.

An example of one of my expectations:
{% highlight ruby %}
it 'rejects username less than 6 characters and shows one-time error message' do
  params = {
    :username => "mike",
    :password => "kittens123"
  }
  post '/signup', params
  expect(last_response.location).to include('/signup')
  follow_redirect!
  expect(last_response.body).to include("Username must be six or more characters")
end
{% endhighlight %}

My expecation is that if a user signs up with a short username, they will be redirected back to the signup page. They will also receive a warning message letting them know that their username choice is too short.


Another example:

{% highlight ruby %}
it 'password must contain one number and one non-alphanumeric character' do
  params = {
    :username => "alexscott",
    :password => "rain1"
  }
  post '/signup', params
  follow_redirect!
  expect(last_request.url).to eq("http://example.org/signup")
  expect(last_response.body).to include("minimum six characters, 1 number and 1 special character")
end
{% endhighlight %}

Here I want the password to contain both a number and a special character. I expect that a password without them will redirect the user and provide a warning message.

After writing each expectation I wrote the code that would fulfill it. This is the code that fulfills the two expectations above:

{% highlight ruby%}
post '/signup' do
    if params[:username].length < 6
      flash[:failure] = "Username Must be Six or More Characters"
      redirect '/signup'
    elsif (/[^\w]{1}/ =~ params[:password]).nil? || (/\d{1}/ =~ params[:password]).nil?
      flash[:failure] = "Password Must Contain One Number and One Special Character"
      redirect '/signup'
    else
      @user = User.create(username: params[:username], password: params[:password])
      session[:user_id] = @user.id
      redirect to "/#{@user.slug}"
    end
  end
{% endhighlight %}

Coding this way allowed me to spend more time thinking about what I wanted my program to do. I am also happy that I spent the time learning how to write tests because it is a skill that is in high demand.

<h3>Deployment</h3>

Deploying a Ruby app was not as easy as I thought it would be. The current standard for deploying Ruby-based applications is through a service called Heroku. Initially I tried to deploy my app using a service called a 'A Small Orange' on one of their shared servers. This became difficult quickly when I realized I didn't have root access to the server and couldn't create a Ruby friendly environment for my application. With that experience under my belt, I decided to host my application on a web-server through [Digital Ocean](https://www.digitalocean.com/). Digital Ocean rents you server with a custom ip address and super user access. With some basic command-line knowledge, setting up a ruby-friendly environment should be a breeze. After installing Ruby via RVM, I installed Apache as my HTTP web server along with a web app server called [Passenger Phusion](https://www.phusionpassenger.com/) which allows Ruby and Apache to play nicely together.

<h3>Conclusion</h3>

Building my first dynamic web application was highly fulfilling. I had been struggling with Sinatra at many points but things finally came together at the end. I now feel comfortable using a variety of languages and frameworks and have fresh confidence moving into the rails portion of the course.

Check out my project: <a href="http://www.freeganforum.com">www.freeganforum.com</a>

GitHub Repository: [https://github.com/joelbitar1986/ny-freegan-forum](https://github.com/joelbitar1986/ny-freegan-forum)
