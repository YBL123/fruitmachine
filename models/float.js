const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

const floatSchema = new mongoose.Schema({
  value: { type: Number, required: true, maxlength: 1000000 }
})

floatSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Float', floatSchema)