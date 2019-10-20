const validateAdmin = (req, res, next) => {
  const body = req.body;
  const { username, password } = req.body;
  console.dir(body);

  !body
    ? res.status(400).json({ err: `Please provide credentials` })
    : !username || !password
    ? res.status(400).json({ err: `Please provide username and password` })
    : next();
};

module.exports = validateAdmin;
