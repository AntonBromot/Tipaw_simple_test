import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import database from './db';
import routes from './routes';
import { PORT } from './constants';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

database();
for (let route in routes) app.use(`/${route}`, routes[route]);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`) );
