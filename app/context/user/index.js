import { GraphQLList, GraphQLNonNull } from 'graphql'

import { internet, random } from 'faker'
import isEmail from 'validator/lib/isEmail'

import { UserType, UserInputType } from './types'

const userQueries = {
  users: {
    type: new GraphQLList(UserType),
    resolve: async () => {
      const users = await new Promise(resolve =>
        setTimeout(() =>
          resolve(new Array(10).fill(undefined).map(() => ({
            id: random.uuid(),
            email: internet.email(),
          }))), 100)
      )
      return users
    }
  }
}

const userMutations = {
  createUser: {
    type: UserType,
    args: {
      input: {
        type: new GraphQLNonNull(UserInputType),
      }
    },
    resolve: async (rootValue, { input }) => {
      if (!isEmail(input.email)) {
        throw new Error('The email is not in a valid format')
      }
      const result = await new Promise((resolve) => {
        setTimeout(() =>
          resolve(Object.assign(input, {
            id: random.uuid(),
          })), 100)
      })
      return result
    }
  }
}

export { userQueries, userMutations }
