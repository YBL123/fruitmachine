const axios = require('axios')
const Float = require('../models/float')
const { notFound, unauthorized } = require('../lib/errorMessages')

async function getFloatValue(req, res) {
  console.log('heyyyyy')
  try {
    const value = await Float.find()
    res.status(200).json(value)
  } catch (err) {
    res.json(err)
  }
}

async function updateFloat(req, res, next) {
  const floatId = req.params.id 
  try {
    const float = await Float.findById(floatId)
    if (!float) throw new Error(notFound)
    Object.assign(float, req.body)
    await float.save()
    res.status(202).json(float)
  } catch (err) {
    next(err)
  }
}

async function createFloat(req, res, next) {
  const float = await Float.find()
  console.log(float)
  if (float.length > 1) {
    res.sendStatus(409)
  } else {
    try {
      const createdFloat = await Float.create(req.body)
      res.status(201).json(createdFloat)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = {
  getFloatValue,
  updateFloat,
  createFloat
}