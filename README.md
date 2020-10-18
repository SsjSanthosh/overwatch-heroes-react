## Overwatch heroes - A hero showcase

![Project thumbnail](https://raw.githubusercontent.com/SsjSanthosh/overwatch-heroes-react/master/screenshots/thumbnail.png)

An application to showcase all the 32 heroes from the Overwatch game. This react draws in data from my own django API you can find here! [here](https://github.com/SsjSanthosh/overwatch-heroes)

## Table of Contents

- [Project Status](#project-status)
- [Description](#description)
- [Tech/Framework Used](#techframework-used)
- [Demo/Screenshots](#demoscreenshots)
- [Installation](#installation)

## Project Status

I want to take this app forward and include more information about the game, perhaps even add competitive stats.

## Description

A react app to help showcase the data from the backend API. Separate tabs for each hero's abilities
, ultimates, weapons and profile. You can filter the heroes based on their role.

This is just the frontend of the app, please check out the backend API [here](https://github.com/SsjSanthosh/overwatch-heroes)

#### Note - The heroku app might take a while to spin up from sleep (free tier), should only happen once.

## Tech/Framework Used

- React
- Redux
- Sass

## Demo/Screenshots

![All heroes](https://raw.githubusercontent.com/SsjSanthosh/overwatch-heroes-react/master/screenshots/no-filter.png)
_No filter, all heroes_

![Filter tank](https://raw.githubusercontent.com/SsjSanthosh/overwatch-heroes-react/master/screenshots/filter-tank.png)
_Filter tank_

![Filter support](https://raw.githubusercontent.com/SsjSanthosh/overwatch-heroes-react/master/screenshots/filter-support.png)
_Filter support_

![Filter damage](https://raw.githubusercontent.com/SsjSanthosh/overwatch-heroes-react/master/screenshots/filter-damage.png)
_Filter damage_

![Showcase](https://raw.githubusercontent.com/SsjSanthosh/overwatch-heroes-react/master/screenshots/showcase.png)

## Installation

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

- `npm install`
- Create a .env file and set the following environment variables
  - `REACT_APP_BASE_API_PATH = https://overwatch-heroes-api.herokuapp.com/`
  - Or clone the repo, and point to the localhost server.

To Start Server:

`npm start`

To Visit App:

`localhost:3000/`
