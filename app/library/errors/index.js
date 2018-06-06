import { ApolloError } from 'apollo-server-express'

const BAD_REQUEST_MESSAGE = 'Bad Request'
const NOT_AUTHORIZED_MESSAGE = 'You are not authorized to perform this action!'
const NOT_FOUND_MESSAGE = 'The resource you are looking for can not be found!!'
const NOT_AUTHENTICATED_MESSAGE = 'Not Authenticated!'

export const BadRequestError = (msg = BAD_REQUEST_MESSAGE, info = null) => (
  ApolloError(msg, 'BAD_REQUEST', info)
)

export const NotAuthorizedError = (msg = NOT_AUTHORIZED_MESSAGE, info = null) => (
  ApolloError(msg, 'NOT_AUTHORIZED', info)
)

export const NotFoundError = (msg = NOT_FOUND_MESSAGE, info = null) => (
  ApolloError(msg, 'NOT_FOUND', info)
)

export const AuthenticationError = (msg = NOT_AUTHENTICATED_MESSAGE, info = null) => (
  ApolloError(msg, 'NOT_AUTHENTICATED', info)
)
