const jwt = 'jsonwebtoken';
const secret = process.env.SECRET || 'C00kies!AREfor3Ating^_^erfiehjnqoeunfnjwe';

module.exports = { genToken };

function genToken(admin) {
  const payload = {
    subject: admin.id,
    username: admin.username
  };
  const options = { expiresIn: '8h' };
  const token = jwt.sign(payload, secret, options);
  const token_type = 'Basic';

  return { admin, token_type, token };
}
