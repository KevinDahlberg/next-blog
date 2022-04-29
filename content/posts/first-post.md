---
title: First Post
date: '2022-04-28'
tags: []
draft: false
summary: First post about setting up this blog
---

# First Post (put better title here)

## Deciding on the framework

The choice was between Gatsby and Next

Gatsby Pros:

- plugins
- seems like it's good for blogs, positioned as WordPress competitor

Gatsby Cons:

- GraphQl
- Learning curve

Next Pros:

- Possible ask from future clients, worth learning
- Popular

Next Cons:

- Learning another framework isn't ideal

### Why not just use CRA?

- wanted to jump into Jamstack, and CRA doesn't give that out of the box

### Choice... Next.js

## Posts Format

- Going to start writing them in Markdown. Might transition to a CMS at a later date
- Goal is to get up and running as quick as possible.

## The rest of the stack...

- Tailwind CSS
- Cloudflare for CI and deployment
- ???

## Steps for installation:

1. Created next project
2. Connected project to github repo (public for now, might go private if secrets happen)
3. Added typescript (because I forgot to do it ini the initial create project)
4. [Add tailwind](https://tailwindcss.com/docs/guides/nextjs)

Some additional housekeeping steps:

1. [Added husky](https://typicode.github.io/husky/#/?id=automatic-recommended)
2. Added pre-commit and commit-msg hooks with commitlint (conventional commits) and pretty-quick (prettier)
3. Installed dependencies and added commitlint.config.js for step 2 to work
4. Added prettier with .prettierrc and .prettierignore
5. added .nvmrc with node 16

Repository is ready for development...

---

## Goals

- build this as quick as possible
- have something that I can post content to that is super flexible and extendable
- use this blog/website as a way to document development

## Pages 0.1

- Home Page (Display list of posts)
- About Page
- Individual posts page

## Home Page

- needs to have toolbar on top
- Main content area with feed of posts
- If I can think of anything to put there, I may add a sidebar to the right

Started building homepage, hit a block when I had to add a feed of posts.

- I want to store them as markdown. How the hell do I do that.
- Probably a template out there, or somebody else has done it.

Found a [nextjs-starter-blog repo](https://github.com/timlrx/tailwind-nextjs-starter-blog). We'll see if that has what I need.

Looks like I need to do a few things:

- My content is going into the "content" folder.
- functions to pull in all files
- using fancy syntax at the top of the MD file (not sure what it's called yet...)
- bring over file parsing from starter repo. there's lots going on there.

After bringing over what I think is enough from the other repo, I set up the home page. The new challenge is getting it responsive. I'm taking advantage of the grids in tailwind for the layout.

After bringing in the posts via one of the fancy functions that reads the files from the computer, I'm displaying my posts in cards. I also now have a layout component with a footer and header.

## About Page

- I'll be using the layout component as a wrapper for this (with header and footer)
- Create a content layout component that centers the content in the screen with expanding left and right sides.
- The content itself will be a markdown file in `content/pages/about`. I should be able to bring in the content in a similar way as blog posts.

## Blog

- Used some of the same formatting as the about page
- looks like I needed to use the `getStaticPaths` method from next to get it the `slug` portion of the route working.
- once that mess was fixed, I was able to display this post as a blog page.

---

Putting this together took a bit longer than expected. I was hoping handling the markdown would be something as simple as a fetch call. Once I got the ball rolling it wasn't as bad to figure out. Very minimal blog for the time being, but it does what I need it to do.
