---
path: '/building-ruby-cli-gem'
date: '2016-06-27'
title: "Building a Ruby CLI Gem"
published: true
---

For final project #1 at the flatiron school we were required to build a Ruby Gem using information scraped directly from a website or API. My fellow students picked topics like food recipes, baseball scores and book lists. All smart ideas in terms of building a professional portfolio. I took a bit of a different approach...

A few of us in the program have been having some fun playing Blizzard's new class-based shooter, Overwatch. One of my fellow students suggested that one of us scrape Overwatch statistics off the web for a Ruby gem. I liked the idea and volunteered myself for the task. I'm on the cusp of turning 30 years old but I still love computer games with the passion of an adolescent Korean PC banger. So when it came to choosing between adult topics or displaying the kill-to-death ratios of time-jumping teenage girls and turret-constructing Swedish dwarves, the choice was a no-brainer.

The requirements for this project were the following:

1. Package as a gem.
2. Provide a CLI on gem installation.
3. CLI must provide data from an external source, whether scraped or via a public API.
4. Data provided must go at least a level deep, generally by showing the user a list of available data and then being able to drill into a specific item.


<h2>Goals</h2>

Since Overwatch is still new there are only a couple of sites serving Overwatch statistics. Blizzard hasn't released an official Overwatch API yet like they have for some of their other games. The two biggest sites offering statistics are masteroverwatch.com and overwatchtracker.com. The former has some nice stats on all of the game's 21 heroes and the data can be sorted by popularity, kill/death ratio and damage/minute. Now that I had the idea and a scrapeable website, it was time to plan out the project.

Goals for Gem:
<ul>
<li>Scrape data for all 21 Overwatch heroes and implement functionality to sort data by specific conditions (winrate, popularity, k/d ratio, etc). (Fulfills project req #3)</li>
<li>Scrape individual hero pages and give user ability to select a hero to learn more about that hero. (Fulfills project req #4)</li>
</ul>
<br>
<br>

<h2>Creating the Gem – Bundler</h2>

I created the gem using bundler which is a gem itself. First, install bundler via `gem install bundler`. Second, build the gem with `bundle gem name_of_your_gem`. That's it!!! This will create a file structure with a /bin folder and a /lib folder.
<br>
<br>
<br>

<h2>Project Structure</h2>

Inside bin/overwatchstats is one line `OverwatchStats::CLI.new.start` that creates a new instance of the CLI class and then calls the #start instance method on that new object. No need to clutter up the launching file. All of the legwork takes place inside the /lib directory. The following three files make up the bulk of my program:

Inside /lib:<br>
cli.rb<br>
hero.rb<br>
statscraper.rb<br>

<h3>cli.rb</h3>

This is where I coded the nuts and bolts behind the user interface. When you run the program with `bin/overwatchstats` a new instance of the CLI class is created and the `#start` instance method is called. The main stats are initially displayed alphabetically via the `#display_stats_alphabetically` instance method. Then the `#menu` method is called which asks for a user input via `gets.strip`. I decided to use a simple if/else statement but a case statement or loop could've been easily implemented. The menu gives the user various sorting options for how they'd like to view the statistics. The stats can be sorted by winrate, popularity, damagemin, kdratio and alphabetically. Each of these options call instance methods on the new instance of the CLI class. The user can also pick individual heroes in the CLI, which calls a class method from the Hero class. These methods scrape the unique websites/urls of each hero when they are called.

Displaying data was pretty easy. However, displaying data in a visually appealing manner was not. Due to strings being different lengths, I wasn't able to line up the columns at first. One way to solve this issue would have been to utilize the `terminal-table` gem which places all data into pre-formatted tables. This was the route I was going to go. However ,when I checked Slack the following day, I received a message from one of my fellow students, <a href="https://github.com/beingy">BeingY</a>. He said he fixed my UI issue with the columns by creating a method that checked the width of each string within each cell and sized the width of each cell appropriately based on the length of the string. Wow! It's also important to note that his contribution was completely spontaneous and voluntary. He did it because he thought it was a cool challenge and wanted to figure it out. When you help other developers solve a problem, not out of self-interest but in the spirit of collaboration, other people will want to help you with your projects. I'm convinced that this collaborative, mutual-aid mindset is the attitude that will get you hired.

And with that, I had beautifully displayed data columns...
{% include image.html url="/assets/img/img_blog/columns.png" description="Columns!" %}


<h3>statscraper.rb</h3>

Here I created a class called StatsScraper and there is one main method within this class. I wrote a class method #self.scrape_all_stats that scrapes the data for all the heroes off the MasterOverwatch “heroes” page. I decided that I wanted to scrape the data just one time and then sort it using my program. So once the data is scraped I am able play with the data in various ways. I then iterated through each hero contained in an html <div> tag using #each and assigned a hero_name, hero_winrate, hero_popularity, hero_damagemin and hero_kd. I put these variable into a hash and assigned the above variables as values of various keys. With each iteration a hash is created and then its shoveled into an empty array that was created at the beginning of the method.

The hero chart is scraped alphabetically from the site based on the hero name. This method doesn't utilize class objects, it just puts all the info directly into an array filled with hashes. Each hero is one hash. I then sorted the information by any hash key I wanted with `.sort_by {|hash| hash[:any_key_you_want]}.reverse`. The #reverse method is utilized heres to display all the numbers in descending order from highest to lowest. Number 1 should have the highest kills/deaths ratio and number 21 should have the lowest.

<h3>hero.rb</h3>

In order to meet the requirement of drilling a level deeper into my program, I decided that the user should be able to select individual heroes to see more information on them. For this class I wanted to demonstrate my understanding of class objects and instance variables, along with my knowledge of scraping. So I decided to create a Hero class. Heroes have certain characteristics: name, lore, maximum hp, maximum ammo, etc. When #self.scrapehero is called, it requires an argument of a page_url. When that url is fed in an instance of the Hero class is created and instance variables (@name, @lore, etc) are assigned values via NokoGiri scraping. Each of the individual hero pages were identical, so all I needed to do was create one method for this and just feed in the different URL's.

I then toyed around with the idea of scraping all of the heroes at once and then shovelling them all into an array. Initially, I created a method that did a mass scrape using an array of URL's and then searched through an array of all heroes that were then created. When the user selected one of the Hero class objects in the CLI menu it would search through all the Hero objects that were just scraped. That was way too time consuming for my program. When one hero was selected it would take up to 10 seconds for the information to display because all 21 pages were being scraped and then my program had to search through them all to see if there was a matching parameter. To solve this I created individual hero methods and scraped each URL individually. This cut about 95% of the load time and streamlined the program.

<h2>Final Thoughts</h2>

This was the first time the training wheels came all the way off. I found it satisfying to find out that I have gained fluency in Ruby. I felt confident enough to code the majority of the program on my own. When there are roadblocks, I feel like I have all the tools at my disposal to figure out how to traverse these hurdles. Check out my repository for the gem <a href="https://github.com/joelbitar1986/OverwatchStats"> here.</a>
