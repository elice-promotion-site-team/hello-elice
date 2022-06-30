import { Request } from 'express';
import { Strategy } from 'passport-jwt';
import { secret } from '../../utils/jwt';

const cookieExtractor = (req: Request) => {
  const { token } = req.cookies;
  return token;
};

const opts = {
  secretOrKey: secret,
  jwtFromRequest: cookieExtractor,
};

export const jwt = new Strategy(opts, (user, done) => {
  done(null, user);
});
