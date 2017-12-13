const sequelize = require('sequelize');
const Poke = require('../models/index').Poke;

const PokesController = {
  create: (req, res, next) => {
    console.log('CREATING POKE');
    console.log(req.body);
    Poke.create(req.body);
    console.log('JBUILDER ------------------------------------');
    console.log(require('../views/poke')(req.body));
    res.json(require('../views/poke')(req.body));
  }
};


// const SessionsController = {
//   create: ({id, email, name, dosage}, res) => {
//     res.json({ id, email, name, dosage });
//   },
//   destroy: (req, res) => {
//     const { id, email, name, dosage } = req.user;
//     req.logout();
//     res.json({ id, email, name, dosage, signedIn: false });
//   }
// };

module.exports = PokesController;
