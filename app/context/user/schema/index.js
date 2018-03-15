import _ from 'lodash'
import bcrypt from 'bcrypt-nodejs'
import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  updatedAt: Date
})

// eslint-disable-next-line
userSchema.virtual('id').get(function () {
  console.log("virtual")
  return this._id
})

// eslint-disable-next-line
userSchema.pre('save', function (next) {
  const user = this
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(12), null)
  user.email = user.email.toLowerCase()
  user.updatedAt = new Date()
  next()
})

// eslint-disable-next-line
userSchema.pre('update', function (next) {
  const user = this
  const data = {}

  if (user.isModified('password')) {
    _.set(data, 'password', bcrypt.hashSync(user.password, bcrypt.genSaltSync(12), null))
  }

  if (user.isModified('email')) {
    _.set(data, 'email', user.email.toLowerCase())
  }

  this.update({}, { $set: { ...data, updatedAt: new Date() } })
  next()
})

module.exports = mongoose.model('User', userSchema)
