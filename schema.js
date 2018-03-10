import { GraphQLSchema, GraphQLObjectType } from 'graphql'

import { userQueries, userMutations } from './users'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...userQueries
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...userMutations
    })
  })
})