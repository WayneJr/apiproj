// module imports
import express from "express";

// file imports 
import { config } from './config/index.js';

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello world');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(config.port, () => console.log(`listening on port: ${ config.port }`));

