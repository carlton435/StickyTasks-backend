import express from 'express';

const app = express();

const router = express.Router();

router.get('/name', (req, res) => {
  res.json('asd')
})


export default router

