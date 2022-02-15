const express = require('express')
const router = express.Router()
const articleCotroller = require('../controllers/article')

router.get('/', articleCotroller.getAllArticles)
router.get('/article/:slug', articleCotroller.getArticleBySlug)

module.exports = router