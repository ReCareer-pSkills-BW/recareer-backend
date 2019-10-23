const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    // Checking...
    jwt.verify(token, 'SOMESECRETFROMENV', (err, decodedToken) => {
      if (err) {
        // Bad Token
        res.status(400).json({ message: 'Bad Credentials' });
      } else {
        // Good Token
        req.username.username;
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'Bad Credentials: No Token' });
  }
};
