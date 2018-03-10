import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'


// Check how to use multiple schemas (trying with posts)
const typeDefs = `
  type Query {
    user(firstName: String, lastName: String): User
    users: [User]
  }
  type User {
    id: String
    name: String
  }
  type Mutation {
    addUser(name: String): User
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export default schema
