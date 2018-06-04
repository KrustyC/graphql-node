import { Schema } from 'mongoose'
import Account from '../../account/schema'

const options = { discriminatorKey: 'kind' }

const userSchema = new Schema({
  things: [String]
}, options)

module.exports = Account.discriminator('User', userSchema)
