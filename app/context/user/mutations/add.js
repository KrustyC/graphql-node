import { GraphQLNonNull, GraphQLString } from 'graphql'
import UserType from '../types'
import UserSchema from '../schema'

export default {
  type: UserType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const uModel = new UserSchema(params)
    const newUser = uModel.save()
    if (!newUser) {
      throw new Error('Error')
    }
    return newUser
  }
}
