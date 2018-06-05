import { Schema } from 'mongoose'
import Account from '../../account/schema'

const options = { discriminatorKey: 'kind' }

const studentSchema = new Schema({
  interests: [String],
  quizzes: [{ _id: false, type: Schema.Types.ObjectId, ref: 'quiz' }]
}, options)

module.exports = Account.discriminator('Student', studentSchema)
