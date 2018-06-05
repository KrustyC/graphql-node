import mongoose, { Schema } from 'mongoose'

const questionSchema = new Schema({
  text: String,
  quiz: { _id: false, type: Schema.Types.ObjectId, ref: 'quiz' },
  updatedAt: Date,
  createdAt: Date
})

// @TODO Possibily move this into a common thingy

// eslint-disable-next-line
questionSchema.pre('save', function (next) {
  const quiz = this
  quiz.updatedAt = new Date()
  quiz.createdAt = new Date()
  next()
})

// eslint-disable-next-line
questionSchema.pre('update', function (next) {
  this.createdAt = new Date()
  next()
})

module.exports = mongoose.model('Question', questionSchema)
