import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'
import RootQuery from './rootQuery'
import { UserSchema } from './schemas/user'

const schema = makeExecutableSchema({
  typeDefs: [
    RootQuery,
    UserSchema
  ],
  resolvers
})

export default schema
