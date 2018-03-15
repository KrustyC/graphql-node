export const RootSchema = `
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`

export const RootResolvers = {
  Query: {
    _: () => true
  },
  Mutation: {
    _: () => true
  }
}
