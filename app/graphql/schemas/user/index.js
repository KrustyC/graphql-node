import PostContext from '../../../context/post'
import UserContext from '../../../context/user'

export const UserSchema = `
  type User {
    _id: String
    email: String
    firstName: String
    lastName: String
    posts: [Post]
  }

  extend type Query {
    user(id: String): User
    users: [User]
  }

  extend type Mutation {
    addUser(email: String, firstName: String, lastName: String, password: String): User
  }
`

export const UserResolvers = {
  User: {
    posts: ({ _id }) => PostContext.findBy('author', _id)
  },
  Query: {
    user: (root, { id }) => UserContext.show(id),
    users: () => UserContext.index()
  },
  Mutation: {
    addUser: (root, args) => UserContext.create(args)
  }
}
