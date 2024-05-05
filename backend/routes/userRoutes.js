import express from 'express';
import { login, register } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/me', async (req, res) => {
  try {
    return res.status(200).json({ ...req.user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
