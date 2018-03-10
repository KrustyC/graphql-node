import { combineResolvers } from 'apollo-resolvers'

import User from '../context/user'

const resolvers = combineResolvers([
  User
  // , SomethingElse
])

export default resolvers
