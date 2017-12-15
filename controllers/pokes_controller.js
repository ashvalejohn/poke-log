const sequelize = require('sequelize');
const Poke = require('../models/index').Poke;

const PokesController = {
  create: ({ body, user }, res, next) => {
    console.log('in create.......');
    if (user) {
      if (!user.dosage) { return res.status(422).json(
        ["We need a dosage in order to log your pokes. Please set a dosage in settings."]
      );} else {

        const poke = Object.assign(
          {}, body.poke, { UserId: user.id, dose: user.dosage }
        );
        Poke.create(poke)
        .then(newPoke => { res.json(require('../views/poke')(newPoke)); })
        .catch(({ original }) => {
          console.log(original);
          res.status(500).json(
            { errors: ['Something went wrong while logging this poke'] }
          );
        });
      }
    } else {
      console.log('not a user!');
      res.status(401)
        .json({ errors: ["Can't log a poke without being logged in!"] });
    }
  },

  index: (req, res, next) => {
    req.user.getPokes({where: {
      date: { $like: req.body.query + '%' }
    }}).then(pokes => {
      res.json(require('../views/pokes')(pokes));
    });
  }
};

module.exports = PokesController;
