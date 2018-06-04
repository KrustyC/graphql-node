// @flow

import util from 'util'

/**
 * Main error function that other errors can inerhit
 *
 * @param  {Function} inst
 * @param  {String}   message
 * @param  {number}   statusCode
 * @param  {String}   errorCode
 * @param  {Object}   data
 * @return {Function}
 */
function error(inst, message, statusCode, errorCode, data) {
  const instance = inst

  instance.name = instance.constructor.name
  instance.message = message || 'Unknown Error'
  instance.statusCode = statusCode
  instance.code = errorCode
  instance.data = data

  Error.captureStackTrace(instance, instance.constructor)

  return instance
}


/**
 * Generic Platform Error
 */
function PlatformError() {
  return error(this)
}
util.inherits(PlatformError, Error)


/**
 * Validation error
 *
 * @param {Object} errors
 */
function ValidationError(errors: ?Object) {
  return error(
    this,
    'Form validation failed',
    400,
    'VALIDATION_FAILED',
    { errors }
  )
}
util.inherits(ValidationError, PlatformError)


/**
 * Bad Request Error
 *
 */
function BadRequestError(
  statusCode: ?number = 400,
  message: ?string = 'Bad Request',
  code: ?string = 'BAD_REQUEST',
  errors: ?any
) {
  return error(this, message, statusCode, code, { errors })
}
util.inherits(BadRequestError, PlatformError)


/**
 * Unauthorized Error
 *
 */
function UnauthorizedError() {
  return error(this, 'Not Authorized', 401, 'UNAUTHORIZED', { error: 'Not Authorized' })
}
util.inherits(UnauthorizedError, PlatformError)


/**
 * 404 Not Found Error
 */
function NotFoundError(errors: ?any) {
  return error(this, 'Not Found', 404, 'NOT_FOUND', { errors })
}
util.inherits(NotFoundError, PlatformError)


/**
 * Error returned when user provides incorrect password upon login
 */
function IncorrectPasswordError() {
  return error(
    this, 'Password is incorrect',
    401,
    'INCORRECT_PASSWORD',
    { errors: { password: 'The password is not correct' } }
  )
}
util.inherits(IncorrectPasswordError, PlatformError)

/**
 * Export error types
 */
export default {
  ValidationError,
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
  IncorrectPasswordError
}
