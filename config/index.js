const {
  PORT,
  JWT_SECRET,
  JWT_EXPIRE
} = process.env;

export const config = {
  port: PORT || 3000,
  jwtSecret: JWT_SECRET,
  jwtExpire: JWT_EXPIRE,
};