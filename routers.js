import express from 'express';
import createUser from './handle_Router/create_users.js'
import verifyToken from './handle_Router/verify_token.js'

const router = express.Router();


router.get('/createuser', createUser) // sign up
// router.get('/verifyuser', verifyUser) // login
router.get('/verifytoken', verifyToken) // if token, then verify id and token

router.get('/gettasks', (req, res) => {
  res.json('user tasks')
})



export default router

