import { makeExecutableSchema } from 'graphql-tools'
import { combineResolvers } from 'apollo-resolvers'

import { RootSchema, RootResolvers } from './schemas/root'
import { UserSchema, UserResolvers } from './schemas/user'
import { PostSchema, PostResolvers } from './schemas/post'

const schema = makeExecutableSchema({
  typeDefs: [
    RootSchema,
    UserSchema,
    PostSchema
  ],
  resolvers: combineResolvers([
    RootResolvers,
    UserResolvers,
    PostResolvers
  ])
})

export default schema
