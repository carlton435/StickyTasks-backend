import express from 'express';

const router = express.Router();

router.get('/verifyuser', (req, res) => {
  console.log(req.query);
  res.json(req.query.username)
})

router.get('/gettasks', (req, res) => {
  res.json('user tasks')
})



export default router

