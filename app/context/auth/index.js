import jwt from 'jsonwebtoken'
import pick from 'lodash/pick'

import Errors from '../../library/errors'
import AccountContext from '../account'
import config from '../../config/config'


const generateToken = (account) => {
  const payload = pick(account.toObject(), ['_id', 'email', 'firstName', 'lastName', 'kind'])
  return jwt.sign(payload, config('jwtSecret'), { expiresIn: '7d' })
}

export const signup = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  type: Number
) => {
  const doesAccountExist = await AccountContext.exists(email)
  if (doesAccountExist) {
    throw Errors.BadRequestError(400, null, null, { msg: 'Email address already exists' })
  }

  // @TOTO if type not in set then throw the error below
  // throw Errors.BadRequestError(400, null, null, { msg: 'Types need to be provided' })

  const account = await AccountContext.create(firstName, lastName, email, password, type)
  const token = generateToken(account)
  return { account, token }
}

export const login = async (email: string, password: string) => {
  const account = await AccountContext.findForLogin(email)

  if (!account) {
    throw Error('Email does not exists')
  }

  const isPasswordCorrect = await account.comparePassword(password)

  if (!isPasswordCorrect) {
    throw Error('Wrong password')
  }

  const token = generateToken(account)
  return { account, token }
}
