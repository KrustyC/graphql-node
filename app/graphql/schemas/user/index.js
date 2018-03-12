import Queries from './queries'
import Mutations from './mutations'

export const UserResolvers = {
  Query: {
    ...Queries
  },
  Mutation: {
    ...Mutations
  }
}

export const UserSchema = `
  type User {
    id: String
    email: String
    firstName: String
    lastName: String
  }
`
