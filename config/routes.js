const router = require('express').Router()
// const auth = require('../controllers/auth')
const floatValue = require('../controllers/floatValue')
// const float = require('../models/float')
// const secureRoute = require('../lib/secureRoute')

router.route('/float')
  .post(floatValue.createFloat)

router.route('/value')
  .get(floatValue.getFloatValue)

router.route('/value/:id')
  .put(floatValue.updateFloat)


module.exports = router