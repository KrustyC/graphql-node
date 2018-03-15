import { makeExecutableSchema } from 'graphql-tools'
import { combineResolvers } from 'apollo-resolvers'

import { UserResolvers, UserSchema } from './schemas/user'
import { PostResolvers, PostSchema } from './schemas/post'

const rootQuery = `
  type Query {
    test: String
  }

  type Mutation {
    test: String
  }
`

const rootResolvers = {
  Query: {
    test: () => 'Graphql Api'
  }
}

const schema = makeExecutableSchema({
  typeDefs: [
    rootQuery,
    UserSchema,
    PostSchema
  ],
  resolvers: combineResolvers([
    rootResolvers,
    UserResolvers,
    PostResolvers
  ])
})

export default schema
