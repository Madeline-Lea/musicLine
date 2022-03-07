var express = require('express');
const postController = require('../controllers/postController');
var router = express.Router();


router.post('/BxNEMLkaienME', postController.create)
router.get('/BxNEMLkaienME', (req, res) => {
    res.render('create')
})
router.get('/NinAHBEkLEQnW', postController.userPostView)
router.get('/MQNbvaHUEIoxN', postController.viewUpdate)


module.exports = router;