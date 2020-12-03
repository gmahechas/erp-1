import * as connectRedis from 'connect-redis';
import * as session from 'express-session';
import * as redis from 'redis';

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  host: '10.1.0.229',
  prefix: 'erp_',
});

export default session({
  store: new RedisStore({ client: redisClient }),
  name: 'qid',
  secret: 'aslkdfjoiq12312',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
});
