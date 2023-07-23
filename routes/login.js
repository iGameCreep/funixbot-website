const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/auth/twitch',
  passport.authenticate('twitch')
);

router.get('/auth/twitch/callback',
  passport.authenticate('twitch', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/home');
  }
);

module.exports = router;