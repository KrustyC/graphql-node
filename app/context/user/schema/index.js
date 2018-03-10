// import _ from 'lodash'
import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  name: { type: String, required: true },
  updatedAt: Date
})

// eslint-disable-next-line
userSchema.pre('save', function (next) {
  // const user = this
  const data = {}

  // if (user.isModified('email')) {
  //   _.set(data, 'email', user.email.toLowerCase())
  // }

  this.update({}, { $set: { ...data, updatedAt: new Date() } })
  next()
})

// eslint-disable-next-line
userSchema.pre('update', function (next) {
  // const user = this
  const data = {}

  // if (user.isModified('email')) {
  //   _.set(data, 'email', user.email.toLowerCase())
  // }

  this.update({}, { $set: { ...data, updatedAt: new Date() } })
  next()
})

module.exports = mongoose.model('User', userSchema)
