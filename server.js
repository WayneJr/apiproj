// module imports
import express from "express";
import jwt from "jsonwebtoken";

// file imports 
import { config } from './config/index.js';
import { protect } from "./src/middleware/auth.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send('Hello world');
});


app.post('/result', protect, (req, res, next) => {

    return res.status(200).json({
      success: true,
      data: req.body
    });

})


app.listen(config.port, () => console.log(`listening on port: ${ config.port }`));

