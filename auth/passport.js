const TwitchStrategy = require('passport-twitch-new').Strategy;

module.exports = function(passport) {
    passport.use(new TwitchStrategy({
        clientID: process.env.TWITCH_CLIENT_ID,
        clientSecret: process.env.TWITCH_CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL,
        tokenURL: '',
        scope: 'user_read'
    },
    function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });
}