const SessionsController = {
  create: (req, res) => {
    res.json({ id: req.user.id, email: req.user.email });
  }
};

module.exports = SessionsController;
