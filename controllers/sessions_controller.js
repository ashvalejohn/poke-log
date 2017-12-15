const SessionsController = {
  create: ({id, email, name, dosage}, res) => {
    res.json({ id, email, name, dosage });
  },
  destroy: ({ user, logout }, res) => {
    if (user) {
      const { id, email, name, dosage } = user;
      logout();
      res.json({ id, email, name, dosage });
    } else {
      res.status(422).json(["Can't logout when not logged in"]);
    }
  }
};

module.exports = SessionsController;
