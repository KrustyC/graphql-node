import { login, signup } from '../../context/auth'

export const AuthSchema = `
  union User = Student | Teacher

  extend type Mutation {
    login(input: LoginInput): AuthAccountType
    signup(input: SignupInput): AuthAccountType
  }

  input LoginInput {
    email: String!,
    password: String!
  }

  input SignupInput {
    type: Int!,
    firstName: String!,
    lastName: String!,
    email: String!,
    password: String!
  }

  type AuthAccountType {
    account: User
    token: String
  }
`

export const AuthResolvers = {
  User: {
    __resolveType: obj => obj.kind
  },
  Mutation: {
    login: async (_, { input: { email, password } }) => login(email, password),
    signup: async (_, { input: { firstName, lastName, email, password, type } }) => (
      signup(firstName, lastName, email, password, type)
    )
  }
}

