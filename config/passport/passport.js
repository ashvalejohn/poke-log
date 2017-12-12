const bCrypt = require('bcrypt-nodejs');


module.exports = (passport, User) => {

  const LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser((user, cb) => {
    console.log('trying to serialize.......');
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    // User.findById(id, (err, user) => {
    //   if (err) { return cb(err); }
    //   cb(null, user);
    // });
    User.findById(id).then(user => {
      console.log('found????');
      cb(null, user);
    }).catch(err => {
      console.log(err);
      return cb(err);
    });
  });


  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
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
              return done(null, false);
            } else {
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));


  passport.use('local-signin', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {

      const isValidPassword = (pw, pwHash) => {
        return bCrypt.compareSync(pw, pwHash);
      };

      User.findOne({
        where: {
          email: email
        }
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'Invalid email'});
        } else if (!isValidPassword(password, user.password)) {
          return done(null, false, { message: 'Invalid password'});
        } else {
          const userInfo = user.get();
          console.log('sending user info...');
          console.log(userInfo);
          return done(null, userInfo);
        }
      }).catch(err => {
        console.log(err);
        return done(null, false, { message: 'Something went wrong!'});
      });
    }
  ));

};
