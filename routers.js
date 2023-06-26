import express from 'express';
import createUser from './handle_Router/create_users.js'
import verifyUser from './handle_Router/verify_users.js'

const router = express.Router();


router.get('/createuser', createUser)
router.get('/verifyuser', verifyUser)

router.get('/gettasks', (req, res) => {
  res.json('user tasks')
})



export default router

