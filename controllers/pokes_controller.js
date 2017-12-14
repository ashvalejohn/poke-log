const sequelize = require('sequelize');
const Poke = require('../models/index').Poke;

const PokesController = {
  create: ({ body, user }, res, next) => {
    if (user) {
      
      const poke = Object.assign(
        {}, body.poke, { userId: user.id, dose: user.dosage }
      );

      Poke.create(poke)
          .then(newPoke => { res.json(require('../views/poke')(newPoke)); })
          .catch(({ original }) => {
            console.log(original);
            res.status(500).json(
              { errors: ['Something went wrong while logging this poke'] }
            );
      });
    } else {
      res.status(401)
        .json({ errors: ["Can't log a poke without being logged in!"] });
    }
  }
};

module.exports = PokesController;
