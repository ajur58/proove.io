var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'proove.io' })
})

/* GET REACT App. */
router.get('/app', function (req, res, next) {
  res.render('app', { title: 'proove.io' })
})

/* GET home page. */
router.get('/pricing', function (req, res, next) {
  res.render('pricing', { title: 'proove.io' })
})

/* GET home page. */
router.get('/blog', function (req, res, next) {
  res.render('blog', { title: 'proove.io' })
})

/* GET home page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'proove.io' })
})

module.exports = router
