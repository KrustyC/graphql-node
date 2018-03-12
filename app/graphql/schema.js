import { makeExecutableSchema } from 'graphql-tools'
import { combineResolvers } from 'apollo-resolvers'

import { UserResolvers, UserSchema } from './schemas/user'
import { PostResolvers, PostSchema } from './schemas/post'

const rootQuery = `
  Query {}
`

const schema = makeExecutableSchema({
  typeDefs: [
    rootQuery,
    UserSchema,
    PostSchema
  ],
  resolvers: combineResolvers([
    UserResolvers,
    PostResolvers
  ])
})

export default schema
