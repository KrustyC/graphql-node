const RootQuery = `
  type Query {
    user(firstName: String, lastName: String): User
    users: [User]
  }
  type Mutation {
    addUser(email: String, firstName: String, lastName: String, password: String): User
  }
`

export default RootQuery
