import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import { model } from "mongoose";
const User = model("users");
import { secretOrKey } from "./keys";

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey;

export default (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      //  payload instance  =  {
      //   id: '612b94ae29381e71ba2c30bd',
      //   name: 'Athul',
      //   avatar: '//www.gravatar.com/avatar/0b14d1f48cc32b3fa6d238690db863f7?s=200&r=pg&d=mm',
      //   iat: 1630256925, (iat stands for issued at)
      //   exp: 1630260525  (exp stands for expires at)
      // }
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
            // or you could create a new account
          }
        })
        .catch((err) => console.log(err));
    })
  );
};
