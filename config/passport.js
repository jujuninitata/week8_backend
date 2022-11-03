const passport = require("passport")
const {Strategy} = require("passport-google-oauth2")
passport.use (new Strategy(
    {
        clientID:"866414401429-1c0bb5b7lu2u3ipvtitnhessvbqj63g5.apps.googleusercontent.com",
        clientSecret :"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",
        callbackURL :"http://localhost:8000/api/v1/auth/google",
        passReqToCallback:true
    },
    (request, accessToken, refreshToken, profile, done) => {
        return done(null, profile)
    },
    passport.serializeUser((user,done) => {
        return done(null,user)
    }),
    passport.deserializeUser((user,done) => {
        return done(null,user);
    })
))