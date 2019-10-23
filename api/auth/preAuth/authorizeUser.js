const jwt = 'jsonwebtoken';
const secret = process.env.SECRET || 'C00kies!AREfor3Ating^_^';

function genToken(admin) {
  const payload = {
    subject: admin.id,
    username: admin.username
  };
  const options = { expiresIn: '8h' };
  const token = jwt.sign(payload, secret, options);
  const token_type = 'Basic';

  admin.password && delete admin.password;
  admin.usename && delete admin.username;

  return { admin, token_type, token_type };
}
