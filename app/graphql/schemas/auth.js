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
  }
`

export const AuthResolvers = {
  User: {
    __resolveType: obj => obj.kind
  },
  Mutation: {
    login: async (_, { input: { email, password } }) => {
      const account = await login(email, password)
      return { account }
    },
    signup: async (_, { input: { firstName, lastName, email, password, type } }) => {
      const account = await signup(firstName, lastName, email, password, type)
      return { account }
    }
  }
}
