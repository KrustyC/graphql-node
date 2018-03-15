import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  tags: { type: String, required: false },
  author: { _id: false, type: Schema.Types.ObjectId, ref: 'user' },
  updatedAt: Date,
  createdAt: Date
})

// eslint-disable-next-line
postSchema.pre('save', function (next) {
  const post = this
  post.updatedAt = new Date()
  post.createdAt = new Date()
  next()
})

// eslint-disable-next-line
postSchema.pre('update', function (next) {
  this.createdAt = new Date()
  next()
})

module.exports = mongoose.model('Post', postSchema)
