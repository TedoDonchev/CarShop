const router = require('express').Router();
const userController = require('./controllers/userController');
const articleController = require('./controllers/ArticleController');

router.use('/users', userController);
router.use('/articles', articleController);



module.exports = router;