## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm

## Setup

- Run 'bundle install'
- Run 'npm install --prefix client'

You can use the following commands to run the application locally:

- `sudo service postgresql start`: Start PostgreSQL database server
- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on [http://localhost:4000](http://localhost:4000)
- `rails db:seed`: seed the database

## Introduction

This is an app that hosts a database of League Of Legends Characters. I've played this game for many years and have always found the lore details of all the different characters to be quite intriguing. There aren't many good forums around anymore for League Of Legends players to discuss lore and character design which aren't drowned out by professional esports comments or gameplay complaints. 

## Usage

The app starts on the Home tab, which shows all characters and can be sorted by their region or alphabetically. Characters can also be searched for by name in the 'Search' tab. Users can make an account, once logged in, a user can comment under a character's lore. They can also use the 'General Forum' tab to make posts about anything League Of Legends related, users can also comment on posts from other users. User comments on Characters, as well as their posts and general account info will be displayed on their account page once logged in. Users may change their display name in their account page. 

The hope was for the home page to be used as a place for users to comment mainly on character lore, since that is all that is listed along with regions and character art. While the general forum tab can be posts about anything League Of Legends related. I felt this might add a little bit of organization for those who don't care about lore and wish to discuss other aspects of the game. Below is an example walkthrough of the app:

![GIF]

All character data was collected from the [League Of Legends Official Website](https://www.leagueoflegends.com/)