const UsersController = {
  create: ({id, email, name, dosage}, res) => {
    res.json({ id, email, name, dosage });
  }
};

module.exports = UsersController;
