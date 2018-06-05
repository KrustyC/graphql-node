import _ from 'lodash'
import bcrypt from 'bcrypt-nodejs'
import mongoose, { Schema } from 'mongoose'

const options = { discriminatorKey: 'kind' }

const accountSchema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  updatedAt: Date,
  createdAt: Date
}, options)

// eslint-disable-next-line
accountSchema.pre('save', function (next) {
  const account = this
  account.password = bcrypt.hashSync(account.password, bcrypt.genSaltSync(12), null)
  account.email = account.email.toLowerCase()
  account.updatedAt = new Date()
  account.createdAt = new Date()
  next()
})

// eslint-disable-next-line
accountSchema.methods.comparePassword = function(candidatePassword, cb) {
  console.log('compare')
  return new Promise((resolve, reject) => (
    bcrypt.compare(candidatePassword, this.password, (err) => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  ))
}

// eslint-disable-next-line
accountSchema.pre('update', function (next) {
  const account = this
  const data = {}

  if (account.isModified('password')) {
    _.set(data, 'password', bcrypt.hashSync(account.password, bcrypt.genSaltSync(12), null))
  }

  if (account.isModified('email')) {
    _.set(data, 'email', account.email.toLowerCase())
  }

  this.update({}, { $set: { ...data, updatedAt: new Date() } })
  next()
})

module.exports = mongoose.model('Account', accountSchema)
