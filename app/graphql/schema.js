import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  type Query {
    author(firstName: String, lastName: String): Author
    authors: [Author]
  }
  type Author {
    id: String
    firstName: String
    lastName: String
  }
  type Mutation {
    addAuthor(firstName: String, lastName: String): Author
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export default schema
