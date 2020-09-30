const axios = require('axios')
const Float = require('../models/float')

async function getValue(req, res) {
  console.log('heyyyyy')
  try {
    const value = await Float.find()
    res.status(200).json(value)
  } catch (err) {
    res.json(err)
  }
}

module.exports = {
  getValue
}