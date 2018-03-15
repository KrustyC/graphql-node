import UserContext from '../../../context/user'

export const UserResolvers = {
  Query: {
    user: (root, { id }) => UserContext.show(id),
    users: () => UserContext.index()
  },
  Mutation: {
    addUser: (root, args) => UserContext.create(args)
  }
}

export const UserSchema = `
  type User {
    id: String
    email: String
    firstName: String
    lastName: String
  }

  extend type Query {
    user(id: String): User
    users: [User]
  }

  extend type Mutation {
    addUser(email: String, firstName: String, lastName: String, password: String): User
  }
`
