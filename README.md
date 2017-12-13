# Project Proposal
PokeLog is a Progressive Web App (PWA) that allows hemophilia patients to log and review their bleeds and infusions while on or offline. PokeLog's design is device-agnostic, so users have a consistent experience on desktop and mobile. In addition, users can save the web app to their smartphone home screen to mimic a native app experience. Users can set their infusion schedule and PokeLog will remind them to infuse. As a bonus feature, users can choose to share their bleeds and infusions with interested parties (i.e. parents, doctors, etc.). 

PokeLog is built for hemophilia patients to consolidate infusion and bleed information.

[See it live](poke-log.herokuapp.com)

## Team Members
PokeLog is built by [Matthew Buckner](https://github.com/bucknermr), [Ashley Johnson](https://github.com/ashvalejohn), and [Nicholas Williams](https://github.com/nwilliams770).

## Functionality & MVP
- [ ] Hosted on Heroku

Users will be able to:
- [x] Log in/Log out
- [ ] Schedule a reminder to infuse
- [ ] Log an infusion (including date, dose, and whether it was in response to a bleed)
- [ ] See a calendar view of infusions
- [ ] Save the app to their home screen and log infusions while offline

### Bonus Features
- [ ] See a heatmap view of bleeds
- [ ] Notify interested parties of an infusion

## Stack
- PostgreSQL
- Sequelize
- Node.js
- Express
- React/Redux

## Implementation Details
- Progressive Web App (Service Workers)
- Passport.js: user authentication
- Responsive Web Design
- Socket.io: to alert shared users after an infusion or bleed

## To Dos
### Weekend 1
- Objective: All members will use the weekend to familiarize themselves with the new elements of the stack (Node.js, Express, PWA, JSON Web Tokens). 
- Goals:
  - [x] completed Project Proposal
  - [x] understanding of stack
  - [x] completed wireframes
  - [x] setup Node/Express backend
  
### Phase One: Login
- [ ] User can create account
- [ ] User can log into account
- [ ] Initial host on Heroku

#### Monday
- Objective: Users should be able to login
- [x] Create App Shell
- [x] Users table in DB
- [x] Send user info via Express/Node to frontend
- [x] Login React Component
- [x] Signup React Component

### Phase Two: Infusion Log & User Settings
- [ ] User can read/update dosage
- [ ] User can read/update shared users
- [ ] User can create an infusion
- [ ] User can update an infusion
- [ ] Implement Service Worker

#### Tuesday
- Objective: Complete log component
- [ ] Responsive design
- [ ] Log React Component (form, submit)
- [ ] Infusion table in DB
- [ ] Send infusion data to DB

#### Wednesday
- Objective: Integrate service worker for infusion log
- Objective: Allow user to update settings
- [ ] Send infusion data to service worker
- [ ] Send infusion data from service worker to DB
- [ ] Settings React Component
- [ ] Send user settings data to DB
- [ ] Send user settings data to service worker
- [ ] Send user settings data from service worker to DB

### Phase Three: Review Infusion (Index Views)
- [ ] User can see calendar view of past infusions (infusion index)
- [ ] User can see heatmap view of past bleeds (bleed index) **BONUS?**

#### Thursday
- Objective: Built calendar component
- [ ] Responsive design
- [ ] Calendar React Component
- [ ] Send infusion data from DB
- [ ] Send infusion data for current month from service worker

#### Friday
- Objective: Build heatmap component
- [ ] Responsive design 
- [ ] Heatmap React Component
- [ ] Send bleed data from DB
- [ ] Indicate that heatmap only available online

### Phase Four: Notifications
- [ ] Remind user to infuse
- [ ] Notify shared users of infusion

#### Saturday
- Objective: Send push notification to patient
- [ ] Schedule push notifications

### Sunday
- Objective: Send notification to share users (LOL)
- Objective: Final polish
- Objective: Production README

### Monday
- 9:00 am: 🕊🍻✨


## Wireframes
### App Shell
![App Shell](http://res.cloudinary.com/ashvalejohn/image/upload/bo_1px_solid_rgb:000000,r_5/v1512873077/MobileAppShell_bbrjgh.png)

### Log a Poke (Landing Page)
![Log a Poke](http://res.cloudinary.com/ashvalejohn/image/upload/bo_1px_solid_rgb:000000,r_5/v1512873077/MobileLog_p2ouom.png)

### Poke Log (Calendar View)
![Poke Log](http://res.cloudinary.com/ashvalejohn/image/upload/bo_1px_solid_rgb:000000,r_5/v1512873077/MobileCalendar_flwcdd.png)

### Settings
![Settings](http://res.cloudinary.com/ashvalejohn/image/upload/bo_1px_solid_rgb:000000,r_5/v1512873077/MobileSettings_rls5af.png)