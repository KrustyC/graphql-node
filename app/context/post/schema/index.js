import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  tags: { type: String, required: true },
  author: { _id: false, type: Schema.Types.ObjectId, ref: 'user' }
})

module.exports = mongoose.model('Post', postSchema)
