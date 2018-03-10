import { GraphQLNonNull, GraphQLString } from 'graphql'
import UserType from '../types'
import UserSchema from '../schema'

export default {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const set = { name: params.name }
    return UserSchema.findByIdAndUpdate(params.id, { $set: set }, { new: true })
      .catch(err => new Error(err))
  }
}
