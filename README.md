# Poke Log
PokeLog is a single-page app that allows hemophilia patients to log and review their infusions (called pokes) and joint bleeds.

PokeLog is built with:
  - Node.js
  - Express.js
  - React
  - Redux

PokeLog's design is responsive and device-agnostic, so users have a consistent experience on desktop and mobile. 

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
 PokeLog features a PostgreSQL database connected using [Sequelize](http://docs.sequelizejs.com/). User authentication is implemented with [Passport.js](http://www.passportjs.org/) using the `passport-local` strategy. Using a non-OAuth solution will allow us to convert PokeLog into Progressive Web App in the future. PokeLog's frontend is built with React, using Redux for state management. 

 ## Features
 ### Log A Poke
![Log an infusion](http://res.cloudinary.com/ashvalejohn/image/upload/c_scale,w_400/v1513477013/log-poke_bufikb.gif)

 ### Review Pokes and Infusions
 The Poke Log calendar is built using CSS, the JavaScript Date object and SVG icons. The `<Calendar />` component produces `<CalendarDays />` components for each day of the week. The `<CalendarDays />` component determines which days are part of the current month and contain poke information. 
 
![Review infusions and bleeds](http://res.cloudinary.com/ashvalejohn/image/upload/c_scale,h_400/v1513477481/calendar-log_xffzk9.png)

The `<Calendar />` is rendered using the following CSS, to ensure that each week contains seven days:

```css
.day{
  flex-basis: calc(100% / 7);
  display: flex;
  flex-direction: column;
  &:not(:nth-of-type(7n)){
    border-right: 1px solid $blue;
  }
  &:not(:nth-of-type(n + 36)){
    border-bottom: 1px solid $blue;
  }
}
```

 ## Future Features
 We all had a great time working together as a team on this project. Some features we'd like to implement in the future are:
 - Allow user to set up an infusion schedule that will send them push notifications when they are due for an infusion.
 - Allow user to share their infusion logs with parents, significant others, or physicians. 
 - Creating a bleeds heat map, showing the using a detailed history of their joint bleeds.
 - Adapt PokeLog to meet the criteria of a Progressive Web Application (PWA), allowing users to log pokes while offline. 
