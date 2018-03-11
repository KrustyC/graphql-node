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
    email: String
    firstName: String
    lastName: String
  }
  type Mutation {
    addUser(email: String, firstName: String, lastName: String, password: String): User
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export default schema
