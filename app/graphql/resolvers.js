import { combineResolvers } from 'apollo-resolvers'

import Author from '../context/author'

const resolvers = combineResolvers([
  Author
  // , SomethingElse
])

export default resolvers
