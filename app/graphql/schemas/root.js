import { signup } from '../../context/auth'

export const RootSchema = `
  type Query {
    _: Boolean
  }

  union User = Student | Teacher

  type Mutation {
    signup(email: String!, password: String!): User
  }
`

export const RootResolvers = {
  Query: {
    _: () => true
  },
  Mutation: {
    signup: (root, { email, password }) => signup(email, password)
  }
}
