const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../db/user');
const Article = require('../db/queries');

router.get('/', (req, res, next) => {
  res.json({
    message: '🔐'
  });
});

router.post('/signup', (req, res, next) => {
  if(valid(req.body)) {
    User.getOneByEmail(req.body.email)
      .then((user) => {
        if(!user) {
          bcrypt.genSalt(8, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
              const user = {
                name: req.body.name,
                email: req.body.email,
                password: hash,
                created_at: new Date()
              };

              User.create(user)
                .then((id) => {
                  res.json({
                    user,
                    message: 'user has been created!!!!'
                  });
                });
            });
          });
        } else {
          next(new Error('Email is taken'));
        }
      });
    } else {
      next(new Error('invalid entry!'))
    }
});

router.post('/login', (req, res, next) => {
  if (valid(req.body)) {
    User.getOneByEmail(req.body.email)
      .then((user) => {
        console.log(user);
        if (user) {
          bcrypt.compare(req.body.password, user.password)
            .then((result) => {
              if(result) {
                res.json({
                    message: "logged in!!!!!!!!"
                });
              } else {
                next(new Error('Invalid Login'));
              }
            });
        } else {
          next(new Error('Invalid Login'));
        }
      });
  } else {
    next(new Error('Invalid Login'));
  }
});

/// Validate User entry

function valid(user) {
  const emailRegEx = user.email.match(/@/);
  const validEmail = typeof user.email == 'string' &&
    user.email.trim() != '' && emailRegEx[0] == "@";
  const validPassword = typeof user.password == 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length > 5;
  return validEmail && validPassword;
}

module.exports = router;
