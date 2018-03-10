import userQueries from './queries'
import userMutations from './mutations'

export default {
  Query: {
    ...userQueries
  },
  Mutation: {
    ...userMutations
  }
}

