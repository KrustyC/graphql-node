import mongoose, { Schema } from 'mongoose'

const quizSchema = new Schema({
  text: String,
  title: String,
  author: { _id: false, type: Schema.Types.ObjectId, ref: 'teacher' },
  updatedAt: Date,
  createdAt: Date
})

// eslint-disable-next-line
quizSchema.pre('save', function (next) {
  const quiz = this
  quiz.updatedAt = new Date()
  quiz.createdAt = new Date()
  next()
})

// eslint-disable-next-line
quizSchema.pre('update', function (next) {
  this.createdAt = new Date()
  next()
})

module.exports = mongoose.model('Quiz', quizSchema)
