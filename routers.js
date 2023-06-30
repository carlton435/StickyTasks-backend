import express from 'express';
import createUser from './handle_Router/user/create_users.js'
import verifyUser from './handle_Router/user/verify_user.js'
import verifyToken from './handle_Router/user/verify_token.js'
import addArticle from './handle_Router/article/create_article.js'
import changeArticle from './handle_Router/article/change_article.js'
import getArticle from './handle_Router/article/get_article.js'
import deleteArticle from './handle_Router/article/delete_article.js'

const router = express.Router();

// about Users
router.get('/createuser', createUser) // sign up
router.get('/verifyuser', verifyUser) // login
router.get('/verifytoken', verifyToken) // if token, then verify id and token

// about Article
router.post('/addarticle', addArticle)//create the article
router.post('/changearticle', changeArticle)//change the article
router.get('/getarticle', getArticle)//get the article by username
router.delete('/deletearticle', deleteArticle)//delete the article by username




export default router

