import express from 'express';
import { createUser } from './handle_Router/create_users.js'

const router = express.Router();

router.get('/verifyuser', createUser)

router.get('/gettasks', (req, res) => {
  res.json('user tasks')
})



export default router

