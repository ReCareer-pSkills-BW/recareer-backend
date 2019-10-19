import { getById } from '../data/dbConfig';

const validateUserId = (req, res, next) => {
  const id = req.params.id;
  getById(id)
    .then(user => {
      !user
        ? res.status(404).json({ err: `This user does not exist` })
        : (req.user = user);
      next();
    })
    .catch(err => {
      res.status(500).json({ err: `Cannot retrieve user ID`, err });
    });
};

export default validateUserId;