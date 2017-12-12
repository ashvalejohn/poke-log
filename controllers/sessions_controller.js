const SessionsController = {
  create: (req, res) => {
    console.log(req.session.passport);
    res.json({ id: req.user.id, email: req.user.email });
  },
  destroy: (req, res) => {
    console.log('logging out......');

    const { id, email } = req.user;
    console.log('req.user', req.user.id, req.user.email);
    // req.logout();
    console.log('logged-out');
    // res.json({ id, email, signedIn: false });
    res.send('blahblahblah');
  }
};

module.exports = SessionsController;
