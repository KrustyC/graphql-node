export const RootSchema = `
  type Query {
    hello: String
  }

  type Mutation {
    hello: String
  }
`

export const RootResolvers = {
  Query: {
    hello: () => 'Hello! Queries are working!'
  },
  Mutation: {
    hello: () => 'Hello! Mutations are working!'
  }
}
