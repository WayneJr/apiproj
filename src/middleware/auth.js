import jwt from "jsonwebtoken";

import { config } from "../../config/index.js";

export const protect = async function (req, res, next) {
  
  // Declare the token
  let token;

  // Check the headers to find out if the token exists
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]; // Split the bearer token and get the main token
  }

  if (!token) {
    return res.send('You need to have a token');
  }

  console.log(token);
  try {
    const decodedToken = jwt.verify(token, config.jwtSecret);
    next();
  } catch(err) {
    return res.send('Token invalid')
  }

}