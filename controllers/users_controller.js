const UsersController = {
  create: ({id, email, name, dosage}, res) => {
    res.json({ id, email, name, dosage });
  },
  update: ({ user, body }, res) => {
    if (user) {
      console.log('blah');
    }
  }
};

module.exports = UsersController;
