import { ApolloError } from 'apollo-server-express'

const BAD_REQUEST_MESSAGE = 'Bad Request'
const NOT_AUTHORIZED_MESSAGE = 'You are not authorized to perform this action!'
const NOT_FOUND_MESSAGE = 'The resource you are looking for can not be found!!'
const NOT_AUTHENTICATED_MESSAGE = 'Not Authenticated!'

export const BadRequestError = (info = null) => (
  ApolloError(BAD_REQUEST_MESSAGE, 'BAD_REQUEST', info)
)

export const NotAuthorizedError = (info = null) => (
  ApolloError(NOT_AUTHORIZED_MESSAGE, 'NOT_AUTHORIZED', info)
)

export const NotFoundError = (info = null) => (
  ApolloError(NOT_FOUND_MESSAGE, 'NOT_FOUND', info)
)

export const AuthenticationError = (info = null) => (
  ApolloError(NOT_AUTHENTICATED_MESSAGE, 'NOT_AUTHENTICATED', info)
)
