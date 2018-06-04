import _ from 'lodash'
import bcrypt from 'bcrypt-nodejs'
import mongoose, { Schema } from 'mongoose'

const options = { discriminatorKey: 'kind' }

const accountSchema = new Schema({
  _id: { _id: false, type: Schema.Types.ObjectId, ref: 'account' },
  email: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  password: { type: String, required: true },
  updatedAt: Date,
  createdAt: Date
}, options)

// eslint-disable-next-line
accountSchema.pre('save', function (next) {
  const user = this
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(12), null)
  user.email = user.email.toLowerCase()
  user.updatedAt = new Date()
  user.createdAt = new Date()
  next()
})

// eslint-disable-next-line
accountSchema.pre('update', function (next) {
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

module.exports = mongoose.model('User', accountSchema)
