const express = require('express');
const passport = require('passport');
const session = require('express-session');

require('dotenv').config();

const app = express();
const port = 3000;

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('./public'));
app.use(express.static('./themes'));
app.set('view engine', 'ejs');

require('./auth/passport')(passport);

app.use('/', require('./routes/home'));
app.use('/', require('./routes/commands'));

app.use('/', require('./routes/login'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
