const UsersController = {
  create: (req, res) => {
    // debugger;
    console.log('CREATE A USER');
    console.log('REQ:', req);
    console.log('res:', res);
    res.json({ id: req.user.id, email: req.user.email });
  }
};

module.exports = UsersController;
