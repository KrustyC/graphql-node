import { combineResolvers } from 'apollo-resolvers'

import { UserResolvers } from './schemas/user'

const resolvers = combineResolvers([
  UserResolvers
  // SomethingElse
])

export default resolvers
