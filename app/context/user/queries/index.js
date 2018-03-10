import { GraphQLList } from 'graphql'
import userSchema from '../schema'
import userType from '../types'

// Query
export default {
  users: {
    type: new GraphQLList(userType),
    resolve() {
      const users = userSchema.find().exec()
      if (!users) {
        throw new Error('Error')
      }
      return users
    }
  }
}
