import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {
  getItems, getItem, notFound
} from './controllers/index.js';
import makeCallback from './express-callback/index.js';

dotenv.config();

const apiRoot = process.env.API_ROOT;
const app = express();
app.use(bodyParser.json());
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
});

app.get(`${apiRoot}/items`, makeCallback(getItems));
app.get(`${apiRoot}/items/:id`, makeCallback(getItem));
app.use(makeCallback(notFound))

// listen for requests
app.listen(process.env.API_PORT, () => {
  console.log('Server is listening on port: ', process.env.API_PORT);
});


export default app;