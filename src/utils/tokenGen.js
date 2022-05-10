// module imports
import jwt from 'jsonwebtoken'

// file imports
import { config } from '../../config/index.js';

/**
 * Endpoint to generate tokens for API use
 */
(function() {
  try {
    const token = jwt.sign({text: 'user allowed'}, config.jwtSecret, { expiresIn: config.jwtExpire });
  } catch (err) {
    console.log(err);
  }
})();