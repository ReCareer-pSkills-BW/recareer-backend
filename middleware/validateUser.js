const validateUser = (req, res, next) => {
    const body = req.body;
    const { name } = req.body;
    console.dir(body, name);
  
    !body
      ? res.status(400).json({ err: `Please include user info` })
      : !name
      ? res.status(400).json({ err: `Please include user name` })
      : next();
  };
  
  module.exports = validateUser