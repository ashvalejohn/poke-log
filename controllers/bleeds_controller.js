const User = require('../models/index').User;
let Op = require('sequelize').Op;

const bleedsController = {
  index: ({ user }, res, next) => {
    if (user) {
      user.getPokes({
        where: {
          bleed: {
            [Op.ne]: ""
          }
        }
      }).then(pokes => {
        res.json(require('../views/bleeds')(pokes));
      }).catch(err => {
        console.log(err);
        res.status(500).json(["Something went wrong while fetching bleeds"]);
      });
    } else {
      res.status(401).json(["Can't view heat map without being logged in"]);
    }
  }
};

module.exports = bleedsController;
