import UserContext from '../../../context/user'

export const UserResolvers = {
  UserQuery: {
    user: (root, { id }) => UserContext.show(id),
    users: () => UserContext.index()
  },
  UserMutation: {
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

  type UserQuery {
    user(id: String): User
    users: [User]
  }

  type UserMutation {
    addUser(email: String, firstName: String, lastName: String, password: String): User
  }
`
