import { Schema } from 'mongoose'
import Account from '../../account/schema'

const options = { discriminatorKey: 'kind' }

const teacherSchema = new Schema({
  title: String,
  subject: String
}, options)

module.exports = Account.discriminator('Teacher', teacherSchema)
