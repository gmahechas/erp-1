import express from 'express';

import { json } from 'body-parser';
import middlewares from './middlewares';
import routes from './routes';

const app = express();

app.use(json());
app.use(middlewares);
app.use(routes);

export default app;