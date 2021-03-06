const bCrypt = require('bcrypt-nodejs');


module.exports = (passport, User) => {

  const LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findById(id).then(user => {
      cb(null, user);
    }).catch(err => {
      console.log(err);
      return cb(err);
    });
  });


  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'user[email]',
      passwordField: 'user[password]',
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
          return done(null, false, { message: ['That email is already taken'] });
        } else {
          const userPassword = generateHash(password);
          const data = {
            email,
            password: userPassword,
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
      usernameField: 'user[email]',
      passwordField: 'user[password]',
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
          return done(null, false, { message: ['Invalid email']});
        } else if (!isValidPassword(password, user.password)) {
          return done(null, false, { message: ['Invalid password']});
        } else {
          const userInfo = user.get();
          return done(null, userInfo);
        }
      }).catch(err => {
        console.log(err);
        return done(null, false, { message: ['Something went wrong!']});
      });
    }
  ));

};
