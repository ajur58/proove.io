var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'proove.io' })
})

/* GET home page. */
router.get('/app', function (req, res, next) {
  res.render('app', { title: 'proove.io' })
})

module.exports = router
