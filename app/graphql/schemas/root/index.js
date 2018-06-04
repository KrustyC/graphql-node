import { signup } from '../../../context/auth'

export const RootSchema = `
  type Query {
    _: Boolean
  }

  type Mutation {
    login(email: String!, password: String!): User
    signup(email: String!, password: String!): User
  }
`

export const RootResolvers = {
  Query: {
    _: () => true
  },
  Mutation: {
    login: (root, { email, password }) => {
      console.log('login')
      return { _id: 1, lastName: 'davide' }
    },
    signup: (root, { email, password }) => signup(email, password)
  }
}
