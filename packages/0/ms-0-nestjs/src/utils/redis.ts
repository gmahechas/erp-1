import * as connectRedis from 'connect-redis';
import * as session from 'express-session';
import * as redis from 'redis';
import { logger } from '@gmahechas/common-erp';

const RedisStore = connectRedis(session);
const client = redis.createClient({
  host: '10.1.0.229',
  prefix: 'erp_',
});

client.on('error', () => logger.error('Error connecting to redis'));
client.on('connect', () => logger.debug('Connected to redis successfully'));

export default session({
  store: new RedisStore({ client }),
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
