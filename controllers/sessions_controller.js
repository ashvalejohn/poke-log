const SessionsController = {
  create: ({id, email, name, dosage}, res) => {
    res.json({ id, email, name, dosage });
  },
  destroy: (req, res) => {
    const { id, email, name, dosage } = req.user;
    req.logout();
    res.json({ id, email, name, dosage, signedIn: false });
  }
};

module.exports = SessionsController;
