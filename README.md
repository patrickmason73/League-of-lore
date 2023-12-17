## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm

## Setup

- Run 'bundle install'
- Run 'npm install --prefix client'

You can use the following commands to run the application locally:

- `sudo service postgresql start`: Start PostgreSQL database server
- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)
- `rails db:seed`: seed the database

## Introduction

This is an app that hosts a database of League Of Legends Characters. Characters can be sorted by their region, or alphabetically. Characters can also be searched for by name in the 'Search' tab. Users can make an account, once logged in, a user can comment under a character's lore. They can also use the 'General Forum' tab to make posts about anything League Of Legends related, users can also comment on posts from other users. User comments on Characters, as well as their posts and general account info will be displayed on their account page once logged in.