import { signup } from '../../context/auth'

// @TODO those query should be moved to an auth schema

export const RootSchema = `
  type Query {
    _: Boolean
  }

  union User = Student | Teacher

  type Mutation {
    signup(email: String!, password: String!, type: Int!): User
  }
`

export const RootResolvers = {
  User: {
    __resolveType(obj) {
      return obj.kind
    }
  },
  Query: {
    _: () => true
  },
  Mutation: {
    signup: (root, { email, password, type }) => signup(email, password, type)
  }
}
