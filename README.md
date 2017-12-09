# Project Proposal

- Link to live demo and/or instructions on how to use and run code -

## Project description
*Hemophilia App* is a Progressive Web App (PWA) that allows hemophilia patients to log and review their bleeds and infusions while on or offline. *Hemophilia App*'s design is device-agnostic, so users have a consistent experience on desktop and mobile. In addition, users can save the web app to their smartphone home screen to mimic a native app experience. Users can choose to share their bleeds and infusions with interested parties (i.e. parents, doctors, etc.). Users can set their infusion schedule and *Hemophilia App* will remind them to infuse.

*Hemophilia App* is built for hemophilia patients to consolidate infusion and bleed information.

## Functionality & MVP
- [ ] Hosted on Heroku
- [ ] Can save to home screen
Users will be able to:
- [ ] Log in/Log out
- [ ] Schedule a reminder to infuse
- [ ] Log an infusion (including date, dose, and whether it was in response to a bleed)
- [ ] See a calendar view of infusions

### Bonus Features
- [ ] See a heatmap view of bleeds
- [ ] Notify interested parties of an infusion

## Stack
- PostgreSQL
- Node.js
- Sequelize (?)
- Express.js (?)
- React/Redux

## Implementation Details
- Progressive Web App (Service Workers)
- **JSON Web Tokens**: user authentication
- Responsive Web Design
- **Socket.io**: to alert shared users after an infusion or bleed

## To Dos
### Weekend 1
- Objective: All members will use the weekend to familiarize themselves with the new elements of the stack (Node.js, Express, PWA, JSON Web Tokens). 
- Goals:
  - [ ] completed Project Proposal
  - [ ] understanding of stack
  - [ ] JWT user authentication
  - [ ] Initial host on Heroku
  
### Phase One: Login
- [ ] User can create account
- [ ] User can log into account

#### Monday
- Objective: Users should be able to login
- [ ] Create App Shell
- [ ] Users table in DB
- [ ] Send user info via Express/Node to frontend
- [ ] Login React Component
- [ ] Signup React Component

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



