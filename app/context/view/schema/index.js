import mongoose, { Schema } from 'mongoose'

const viewSchema = Schema({
  postId: Number,
  views: Number
})

module.exports = mongoose.model('views', viewSchema)
