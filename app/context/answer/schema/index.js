import mongoose, { Schema } from 'mongoose'

const answerSchema = new Schema({
  text: String,
  isCorrect: Boolean,
  student: { _id: false, type: Schema.Types.ObjectId, ref: 'student' },
  question: { _id: false, type: Schema.Types.ObjectId, ref: 'question' },
  updatedAt: Date,
  createdAt: Date
})

// eslint-disable-next-line
answerSchema.pre('save', function (next) {
  const answer = this
  answer.updatedAt = new Date()
  answer.createdAt = new Date()
  next()
})

// eslint-disable-next-line
answerSchema.pre('update', function (next) {
  this.createdAt = new Date()
  next()
})

module.exports = mongoose.model('Answer', answerSchema)
