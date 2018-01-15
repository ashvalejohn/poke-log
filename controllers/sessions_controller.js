const SessionsController = {
  create: ({id, email, name, dosage}, res) => {
    res.json({ id, email, name, dosage });
  },
  destroy: ({ user, logout, session }, res) => {
    console.log('session.........', session);
    if (user) {
      const { id, email, name, dosage } = user;
      session.destroy();
      res.json({ id, email, name, dosage });
    } else {
      res.status(422).json(["Can't logout when not logged in"]);
    }
  }
};

module.exports = SessionsController;
