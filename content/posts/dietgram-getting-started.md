---
title: Getting Started on Dietgram
date: '2022-04-29'
tags: ['mobile-app', 'dietgram']
draft: false
summary: The initial steps for getting my next app, Dietgram, off the ground.
---

# Getting Started On Dietgram

## What is Dietgram?

Dietgram is an app idea I've been tossing around since before the pandemic. It started with a discussion I had with my then trainer when we were discussing tracking diets. I was complaining about not having the discipline/desire to track everything as I'm eating it. His response was to take pictures of everything I ate. Then I could go back and write my food down when I had the time.

That's an app idea.

Since then, I've put together an app using Angular and Ionic that lived on my machine, but I never went beyond that. Lately, both my wife and I have been attempting to do better with our diets, and we need an app that fits with our lives. So I'm revisiting this project with our requirements in mind.

## The Basics

Before we get to cool features, first we need the bare app. This app needs to:

- take a picture of your food
- have food display in a "feed"
- add your food details.

That's it, we can go to print with that.

## The next set of features

Now that we have the core of the app, what are the other needs?

- Ability to enter macros (calories, carbs, etc)
- Portion size (1/4 lb of chicken)
- Create a database of food items. This way we can populate things as we repeat meals
- Copy meals, copy days. Part of dieting ends up being copy/paste

And of course, the stretch goals:

- using google images to identify food.
- TBD

## Tech Stack

The only question about the tech stack is whether to use CRA or Next. My experience with this blog makes Next a tempting option, but I don't think I want to take the time on learning more about the framework on this app.

The Stack

- React (via CRA)
- Redux (Redux Toolkit)
- Capacitor (for cross platform functionality)
- Ionic (for app specific components)
- Tailwind
- PrimeReact for certain components
- Supabase
- Cloud run

## The Process

Maybe I should start with design first, but I think I can do a rough and dirty app prior to doing any hard thinking. After the rough app is built, then I'll go back and do some rough designs and flesh out the rest of the app workflow.

## Other Thoughts

- not sure on the dietgram name, but it's the working title
- maybe just a PWA, but it might be interesting to release to the app stores as well.
