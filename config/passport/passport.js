const bCrypt = require('bcrypt-nodejs');


module.exports = (passport, user) => {

  const User = user;
  const LocalStrategy = require('passport-local').Strategy;

  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      console.log('TOP');
      console.log('asdgkjasdglkhjas');
      console.log(req, email, password);
      console.log(done);
      const generateHash = (pw) => {
        return bCrypt.hashSync(pw, bCrypt.genSaltSync(8));
      };

      User.findOne({
        where: {
          email: email
        }
      }).then((foundUser) => {
        if (foundUser) {
          return done(null, false, { message: 'That email is already taken' });
        } else {
          const userPassword = generateHash(password);
          const data = {
            email,
            password: userPassword,
            name: req.body.name,
            dosage: parseInt(req.body.dosage)
          };

          User.create(data).then((newUser, created) => {
            if (!newUser) {
              // what's happening here?
              return done(null, false);
            } else {
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));

};
