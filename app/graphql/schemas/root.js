import { signup } from '../../context/auth'

// @TODO those query should be moved to an auth schema

export const RootSchema = `
  type Query {
    _: Boolean
  }

  union User = Student | Teacher

  type Mutation {
    signup(input: SignupInput): AccountCreateType
  }

  input SignupInput {
    type: Int,
    firstName: String!,
    lastName: String!,
    email: String!,
    password: String!
  }

  type AccountCreateType {
    account: User
  }
`

export const RootResolvers = {
  User: {
    __resolveType: obj => obj.kind
  },
  Query: {
    _: () => true
  },
  Mutation: {
    signup: async (root, { input: { firstName, lastName, email, password, type } }) => {
      const account = await signup(firstName, lastName, email, password, type)
      return { account }
    }
  }
}
