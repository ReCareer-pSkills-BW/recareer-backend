const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  token
    ? jwt.verify(token, secret, (err, decoded) => {
        err ? res.status(401).json(err) : (req.decoded = decoded);
        next();
      })
    : res
        .status(401)
        .json({ msg: `No token provided on authorization header` });
};
