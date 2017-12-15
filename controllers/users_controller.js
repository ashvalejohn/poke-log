const UsersController = {
  create: ({id, email, name, dosage}, res) => {
    res.json({ id, email, name, dosage });
  },
  update: ({ user, body }, res) => {
    if (user) {

      const userSettings = {};
      Object.keys(body.user).forEach(key => {
        if (body.user[key]) { userSettings[key] = body.user[key]; }
      });
      user.updateAttributes(userSettings)
        .then( updatedUser => {
          res.json(require('../views/currentUser')(updatedUser));
        })
        .catch( errors => {
          console.log(errors);
          res.status(500).json(["Something went wrong when updating settings"]);
        }
      );
    }
    else {
      res.status(401).json(["Can't update settings if not logged in"]);
    }
  }
};

module.exports = UsersController;
