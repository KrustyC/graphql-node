import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql'

// User Type
export default new GraphQLObjectType({
  name: 'user',
  fields() {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: GraphQLString
      }
    }
  }
})
