import mongoose, { Schema } from 'mongoose'

const authorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
})

module.exports = mongoose.model('Author', authorSchema)
