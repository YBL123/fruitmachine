const router = require('express').Router()
// const auth = require('../controllers/auth')
const floatValue = require('../controllers/floatValue')
// const secureRoute = require('../lib/secureRoute')

router.route('/value')
  .get(floatValue.getValue)


module.exports = router