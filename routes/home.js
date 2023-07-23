const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../auth/auth');

router.get('/', ensureAuthenticated,(req,res) =>{
  res.redirect('/home');
});

router.get('/home', ensureAuthenticated, (req, res) => {
  console.log(req.user)
  res.render('home', {
    user: req.user
  });
});

router.get('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

module.exports = router;