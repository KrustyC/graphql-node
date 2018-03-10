import { GraphQLNonNull, GraphQLString } from 'graphql'
import UserType from '../types'
import UserSchema from '../schema'

export default {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removeduser = UserSchema.findByIdAndRemove(params.id).exec()
    if (!removeduser) {
      throw new Error('Error')
    }
    return removeduser
  }
}
