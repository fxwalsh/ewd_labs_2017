import express from 'express';
import contacts from './contacts';

const router = express.Router();

router.get('/contacts', (req, res) => {
  res.send({ contacts: contacts });
});

export default router;
