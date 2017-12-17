# Poke Log
PokeLog is a single-page app that allows hemophilia patients to log and review their infusions and joint bleeds.

PokeLog is built with:
  - Node.js
  - Express.js
  - React
  - Redux

PokeLog's design is device-agnostic, so users have a consistent experience on desktop and mobile. 

[See it live](https://poke-log.herokuapp.com/)

## Team Members
PokeLog is built by [Matthew Buckner](https://github.com/bucknermr), [Ashley Johnson](https://github.com/ashvalejohn), and [Nicholas Williams](https://github.com/nwilliams770).

## MVP
- Hosted on Heroku
- Users can:
  - Create an account
  - Log infusions and bleeds
  - Review infusions and bleed
  - Update their name and dosage information

## Implementation Details
 PokeLog features a PostgreSQL database connected using [Sequelize](http://docs.sequelizejs.com/). User authentication is implemented with [Passport.js](http://www.passportjs.org/) using the Passport local strategy. PokeLog's frontend is built with React, using Redux for state management. 

 ## Features
 ### Log A Poke
![Log a poke](http://res.cloudinary.com/ashvalejohn/image/upload/c_scale,w_400/v1513477013/log-poke_bufikb.gif)
 ### Review Pokes and Infusions

 ### Update Settings

 ## Future Features
 We all had a great time working together as a team on this project. Some future features we'd like to implement in the future are:

 - Allow user to set up an infusion schedule that will send them push notifications when they are due for an infusion.

 - Allow user to share their infusion logs with parents, significant others, or physicians. 

- Creating a bleeds heat map, showing the using a detailed history of their joint bleeds.

- Adapt PokeLog to meet the criteria of a Progressive Web Application (PWA), allowing users to log pokes while offline. 
