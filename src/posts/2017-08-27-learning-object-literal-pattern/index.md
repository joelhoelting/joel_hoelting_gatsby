---
path: '/building-single-page-app-in-rails'
date: '2017-08-27'
title: "Building a Single Page App in Rails"
published: true
---

Link to the Game: <a href="http://www.whosaidit.co">Who Said It?</a><br><br>
I recently built my first single page web application using a rails back-end and a jQuery front-end written in a modular, object-literal pattern. This project was the amalgamation of all of the technologies I've learned over the past year while enrolled in the Flatiron School.

<h2>The Idea</h2>
During a browsing session I stumbled upon this website: <a href="http://www.trumpormrburns.com/">(Trump or Burns)</a>. It's one of those 'Who Said It?' games where the user has to decide whether Donald Trump or Mr. Burns said a certain quote. Deciding who said each quote is a funny challenge given that both of Trump and Mr. Burns are greedy and lacking any moral compass. Foundationally I liked the idea but I wanted to expand it into something more dynamic and complex. I envisioned the user choosing two characters from a pool of 12 real and fictious characters (66 possible character combinations). The game would select 10 random quotes from the two characters total quotes and then display one quote at a time. The user would then guess 'Who Said It?' and would get a score at the end of the game. Each completed game would be saved for statistical analysis in the future.

<h2>The Back End</h2>

This project was about utilizing and working with the technologies I've learned this past year and getting some hands-on time with Ruby on Rails and object-oriented programming. I also knew I was going to take a radical departure from the project requirements by making this a single page application without any user authentication/authorization system.

My goal was to instantiate and save characters, quotes and games into the rails database and then display data on the front end. I wanted to save a completed game, including which characters were chosen by the user and what quotes were displayed to the user during that game. With this data I would be able to extract statistics from the SQL database later on(ex. most selected characters, least/most challenging matchup, etc.)

<h3>Model Associations</h3>
**Game**<br>
has_many :game_logs<br>
has_many :characters, through: :game_logs<br>
has_many :quotes, through: :characters<br>

**Character**<br>
has_many :game_logs<br>
has_many :games, through: :game_logs<br>
has_many :quotes<br>

**Quote**<br>
belongs_to :character<br>

**GameLog** (join table to allow `game.characters` and `character.games`)<br>
belongs_to :game<br>
belongs_to :character<br>

Games and Characters have many of eachother and Quotes belong to a character. Therefore, a Game has many Quotes through a character. GameLog is a join table that allows me to see the characters from a game and see all games that a character has appeared in. I need these relationships when it comes to analyzing game stats.

<h3>Using Serialize Array</h3>
As the associations were currently set up, a game with two characters would have all the quotes from both the characters. In other words, `@game.quotes` would return upwards of 70 quotes (each character has approx. 35 quotes). I wanted to have ten quotes per game, selected randomly from the pool of all of the quotes between the two characters. I also wanted to be able to look in the database and see what quotes a user had in their game.

This presented a challenge for me but I learned about <a href="https://apidock.com/rails/ActiveRecord/Base/serialize/class">ActiveRecord Serialize</a> which allows you to save an attribute as an array in the database.

{% highlight ruby %}

class Game < ApplicationRecord
  has_many :game_logs
  has_many :characters, through: :game_logs
  has_many :quotes, through: :characters
  serialize :ten_quote_ids, Array
  serialize :state, Array

  def game_quotes
    if ten_quote_ids.length == 10
      quotes.where(id: ten_quote_ids)
    else
      ten_quotes = quotes.order('RANDOM()').limit(10)
      update ten_quote_ids: ten_quotes.map(&:id)
      ten_quotes
    end
  end
end

{% endhighlight %}

Here I check whether a game instance has ten quote ids. If not then I grab ten quotes and map only the ids. Then I update the value of the ten_quote_ids attribute, which is an array of ids in this case. I could have stored instances of quotes themselves but if the quotes in the database changed then those changes would not be reflected in the array. Instead I store the ids and call the records when I need them.

Using this method I can see exactly which quotes a user had in their game. This will be helpful for my future goal of analyzing game data.

<h3>Seeding the Database</h3>

I manually added quotes for my game using JSON and then imported the JSON into the database which creates a character and quote instances for that character.

<br>
donald_trump.json
{% highlight json %}

{
  "quotes": [
    {
      "content": "You know, it really doesn’t matter what they write as long as you’ve got a young and beautiful piece of ass. But she’s got to be young and beautiful.",
      "source": "http://www.cosmopolitan.com/politics/news/a44629/donald-trump-insults-women/"
    },
    {
      "content": "The point is, you can never be too greedy.",
      "source": "https://www.theodysseyonline.com/20-actual-trump-quotes"
    }
  ]
}

{% endhighlight %}

Then I built a JSON importer to pull in the quote data and create Ruby objects with the proper associations.<br>

<br>
seeds.rb

{% highlight ruby %}

def character_import(filename, name, description)
  character = Character.create(
    name: name,
    description: description
  )

  json = ActiveSupport::JSON.decode(File.read("db/seeds/quotes/#{filename}.json"))
  json.each do |key, value|
    value.each do |quote|
      Quote.create(content: quote["content"], source: quote["source"], character_id: character.id)
    end
  end
end

character_import("donald_trump", "Donald Trump", "Eats pizza with a fork and knife. Likely harbinger of the apocalypse.")

{% endhighlight %}

<h3>Utilizing Rails API Endpoints</h3>

In a traditional rails application, a URL is visited and the controller will provide view-specific logic (ex. @posts = Post.all) for that page. In order to keep this application single-page (no redirects) I used <a href="https://github.com/rails-api/active_model_serializers">Active Model Serializers</a> which converts a Ruby instance into JSON and renders it for the view to utilize.

`games_controller.rb`

{% highlight ruby %}

def index
  @games = Game.all
  render json: @games
end

{% endhighlight %}

I created a character selection UI within a `form_tag` helper that iterated over `Character.all`. Inside each character iteration I added a hidden input field with the object's data attributes.

{% highlight html %}

<input type="hidden" name="<%= object.name %>" value="<%= object.id %>" id="<%= object.id %>">

{% endhighlight %}

Upon clicking on a character, a class of `.selected` is added (jQuery) to detect the user's selection. After two choices are made from the character selection screen, I grab the user's choices and shoot an AJAX POST request to the rails back end.

{% highlight javascript %}

var url = "games/create"
var character1 = $('.selected :input')[0];
var character2 = $('.selected :input')[1];

var object = {
  'authenticity_token': AUTH_TOKEN,
  'characters' : [
  {
    'name': character1.name,
    'id': character1.id
  },
  {
    'name': character2.name,
    'id': character2.id
  }]
}

$.ajax({
  type: "POST",
  url: url,
  data: object,
  success: function(data) {
  	// Do something with the data
  }
});

{% endhighlight %}

The beauty of this strategy is that we get a response object back from my rails back end asynchronously and without any redirects. After the controller receives the AJAX POST response, it finds the two characters inside the SQL database, creates a new game instance, associates characters with that game and then renders it via JSON.

{% highlight ruby %}

class GamesController < ApplicationController
  def create
    @character1 = Character.find_by(character_params["0"])
    @character2 = Character.find_by(character_params["1"])
    @game = Game.create
    @game.characters = [@character1, @character2]
    render json: @game, status: 201
  end
end

{% endhighlight %}

A similar process occurs at the end of the game. On the front-end, a game state keeps track of whether users answer correctly or incorrectly. If the user chooses correctly, a `true` value is pushed into the game state. Otherwise it gets a `false` value.

Once the game is over another AJAX POST request is made, the game is marked 'completed' and then saved into the Rails database.

<h2>The Front End</h2>

At the beginning of development on this project I had about 3 months of javascript experience. I had always been able to get my code to work but I usually just spewed out code without thinking about its structure. Typically this resulted in one obese javascript file wrapped in an on-load function, devoid of structure or organization. When you are in the early stages of learning a programming language getting the thing to just work can be empowering. But I decided that this project would be a good place to start asking how and why I was writing code, rather than just getting the damn thing to work.

<h3>Modularizing the Javascript</h3>

After some further exploration I decided to modularize my javascript using the object-literal pattern. With this pattern, each module is tasked with doing a specfic task or carrying out behavior for a specific portion of the application. Within each module there are a number of tasks that are performed internally.

I see two main benefits to the modular pattern:

1. Organization: The module is only tasked with doing things that belong in a specific part of the application. Using this style I can build a module for each section of my application. It is also internally organized. If I need to locate event handlers or cached DOM elements I know exactly where to find them.

2. Self-Enclosed Logic: This module is wrapped in an immediately invoked functional expression (IIFE) to prevent variables from escaping into the global scope.

My welcome screen module:

{% highlight javascript %}

(function() {

  var welcomeModule = {
    init: function() {
      this.cacheDom();
      this.onLoad();
      this.bindEvents();
    },
    cacheDom: function() {
      // Welcome Screen Assignments
      this.$welcomeScreen = $('#welcome-screen');
      this.$playButton = this.$welcomeScreen.find('button');
      // Character Screen Assignment
      this.$characterScreen = $('#character-screen');
    },
    bindEvents: function() {
      // On Click, Hide Welcome Screen and Show Character Screen
      this.$playButton.on('click', this.swapWelcome.bind(this));
    },
    unbindEvents: function() {
      this.$playButton.unbind();
    },
    onLoad: function() {
      this.$characterScreen.hide().removeClass('hide');
    },
    swapWelcome: function() {
      // Hide Welcome Screen and Show Character Screen
      this.$welcomeScreen.hide();
      this.$characterScreen.fadeIn();
      // Unbind all events to avoid memory leaks
      this.unbindEvents();
    }
  }
  welcomeModule.init();

})()

{% endhighlight %}

Please watch this excellent tutorial on CommonJS/Modular syntax: <a href="https://www.youtube.com/watch?v=HkFlM73G-hk">Video Tutorial</a>

<h3>Communicating between Modules with ES6 and Browserify</h3>

One of the major challenges I ran into was getting the modules to interact with one another. ES6 introduces the ability to export and import modules across files. Because of this I needed something to compile my ES6 code (import/export functionality) into ES5 code. I found myself juggling between two choices: 1) Webpack or 2) <a href="https://github.com/browserify-rails/browserify-rails">Browserify Rails</a>, a library that adds CommonJS module support to the Rails Asset Pipeline via Browserify.

Although I had some initial success with webpack, there is a steep learning curve in terms of intial configuration and setup. I figured I would postpone my relationship with Webpack until I start developing React applications. The verdict: I chose the Browserify Rails gem for convenience.

Exporting a module is as simple as exporting it:

{% highlight javascript %}

module.exports = welcomeModule

{% endhighlight %}

To import a module inside another module is as simple as assigning a variable and then requiring the relevant file:

{% highlight javascript %}

const welcomeModule = require('./welcomeModule');

{% endhighlight %}

<h3>Handlebars.js</h3>

Writing HTML inside of javascript is pretty ugly and bad coding practice. HTML should stay inside of HTML files, Javascript shoud remain inside of javascript files and Ruby code should exist within Ruby files. In computer science this principle is known as Separation of Concerns (SOC).

Templating languages like Handlebars, Mustache and Lodash remove the frustration of writing HTML inside of Javascript. Instead you create HTML templates and then render them using JSON.

Create an HTML element where to insert the rendered template:

{% highlight html %}

<div id="game-pictures">
</div>

{% endhighlight %}

Create the template:

{% highlight javascript %}

<script id="game-quote-template" type="text/x-handlebars-template">
  <p>content</p>
</script>

{% endhighlight %}
(note: 'content' should be wrapped in brackets here)

Render a template with JSON received from database:

{% highlight javascript %}

this.$gameQuotes = this.$gameScreen.find('#game-quotes');

var quoteTemplate = Handlebars.compile($('#game-quote-template').html());
var quote = quoteTemplate(this.game.quotes[this.counter]);
this.$gameQuotes.html(quote);

{% endhighlight %}

I have a counter in my game in order to render a different quote each time the counter increments.

End Result:

{% highlight html %}

<div id="game-quotes">
  <p>"You wouldn't know cool if I locked you in the freezer!"</p>
</div>

{% endhighlight %}

<h2>Handwritten Title Animation w/ SVG and CSS3</h2>
I've been spending a lot of time implementing SVG (Scalable Vector Graphics) on the web and tinkering with Illustrator. With SVG and CSS you can easily transform SVG components inside the DOM. For the landing page of my application I decided that I wanted to create a kitchy handwritten effect. To achieve the effect, I grouped each letter of the title along with a stroke on a layer below the letter. The stroke was drawn on a path in the direction that I imagined a pencil or pen would be writing the words. I applied a mask to the groups to fill in the letter using the stroke without spilling outside the letter outlines. In CSS3 you can animate the stroke of a line using `stroke-dashoffset` and `stroke-dasharray`.

This is the animation for the first half of the W in 'Who Said It?':

{% highlight css %}

@keyframes whosaidit {
  100% {
    stroke-dashoffset: 0;
  }
}

#clip_w1 {
  stroke: #fff;
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  stroke-width:24;
  animation: whosaidit .8s linear forwards;
}

{% endhighlight %}
