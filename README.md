# Let's Build A Dribbble Clone With Ruby on Rails

![Let's Build A Dribbble Clone](https://i.imgur.com/iGbk81i.jpg)

Welcome to a five part mini-series where I teach you how to build a Dribbble clone in Ruby on Rails. This series is our most thorough build yet!

[Dribbble](https://dribble.com) is an active design community where designers of all varieties post their "shots" of whatever it is they are working on. What was originally intended to become more of "show your progress" type of site has become more of a portfolio for up and coming designers as well as seasoned pros. 

Our Dribbble clone will introduce some new concepts as well as others I covered in previous builds. If you landed here and are brand new to Ruby on Rails, I invite you to check out my other series below for some foundational principles behind the framework.

- [An Introduction to Ruby on Rails](https://web-crunch.com/lets-build-with-ruby-on-rails-introduction/)
- [Installing Ruby on Rails on your machine](https://web-crunch.com/lets-build-with-ruby-on-rails-installation/)
- [Build a basic blog with comments using Ruby on Rails](https://web-crunch.com/lets-build-with-ruby-on-rails-blog-with-comments/)
- [Build a Twitter clone with Ruby on Rails](https://web-crunch.com/lets-build-with-ruby-on-rails-a-twitter-clone/)

### What we will be building in depth

Our app will have the following features:

- The ability to create, edit, and destroy "shots" as well as like and unlike individual shots.
- User roles and authentication
- Drag and drop functionality
- Commenting functionality
- View counts/analytics
- A custom responsive shot grid UI using CSS Grid

There's a lot under the hood of this build so I went ahead and created this public repo on Github for you to follow along/reference. For time sake you'll notice in some of the following videos that I copied and pasted some general styles and mark up


### What won't be featured in the build

- Independent user profiles
- Search
- Tagging
- Custom color palette generation as Dribbble currently does.

There's a ton we could do to extend the clone but since it's an "example" type of application I decided to forgo extending it dramatically for now. In the future I may add to this series and extend it further but I mostly invite you to do that same on your own to see how you could mimic the real app even more.

### Getting started

Assuming you have rails and ruby installed on your machine ([learn how to here](https://web-crunch.com/lets-build-with-ruby-on-rails-installation/)) you are ready to begin. From your favorite working directory using your favorite command line tool run the following:

```bash
$ rails new dribbble_clone
```

This should scaffold a new rails project and create the folder called `dribbble_clone`. 

To kick things off I've added all the gems from this project to my `Gemfile`. You can reference the repo if you haven't already to grab the same versions I've used here.

#### The Gem List

Our gem list has grown since the previous build. You'll find the larger your app becomes the more gems you'll need. 

- [CarrierWave](https://github.com/carrierwaveuploader/carrierwave) + [Mini Magick](https://github.com/minimagick/minimagick) - For image uploads and optimization
- [Devise](https://github.com/plataformatec/devise) - User authentication and roles
- [Guard](https://github.com/guard/guard) - Doing work to files as they change - A task runner of sorts
- [Guard Livereload](https://github.com/guard/guard-livereload) - Reloads the browser when files change combined with the Live Reload extension on your favorite browser.
- [Better Errors](https://github.com/charliesome/better_errors) - Displays better errors during development. 
- [Simple Form](https://github.com/plataformatec/simple_form) - Simpler forms in Rails
- [Bulma Rails](https://github.com/joshuajansen/bulma-rails) - My favorite CSS framework as of late based on Flexbox.
- [Impressionist](https://github.com/charlotte-ruby/impressionist) - We use this to get view counts on shots
- [Gravatar Image Tag](https://github.com/mdeering/gravatar_image_tag) - Easy way to grab a user's gravatar image based on their account email
- [Acts As Votable](https://github.com/ryanto/acts_as_votable) - Like and unlike shots

I'll defer to the videos for a guide in getting our project all set up with each individual gem. The bulk of Part 1 is devoted to this process. We customize Devise a bit to add a "name" field for new users who register. Again reference the repo to see what that entails.

[Continue reading/watching on web-crunch.com](https://web-crunch.com/lets-build-dribbble-clone-with-ruby-on-rails)