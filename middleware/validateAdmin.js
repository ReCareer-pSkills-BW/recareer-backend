const validateAdmin = (req, res, next) => {
  const body = req.body;
  const { first_name, last_name, provider_name } = req.body;
  console.dir(body);

  !body
    ? res.status(400).json({ err: `Please provide user data` })
    : !first_name || !last_name || !provider_name
    ? res.status(400).json({ err: `Please provide missing user data` })
    : next();
};

module.exports = validateAdmin;
