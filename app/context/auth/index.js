import jwt from 'jsonwebtoken'
import pick from 'lodash/pick'

import { BadRequestError } from '../../library/errors'
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
    throw new BadRequestError({ data: { email: 'Email address already exists' } })
  }

  // @TODO if type not in set then throw the error below
  // throw Errors.BadRequestError(400, null, null, { msg: 'Types need to be provided' })

  const account = await AccountContext.create(firstName, lastName, email, password, type)
  const token = generateToken(account)
  return { account, token }
}

export const login = async (email: string, password: string) => {
  const account = await AccountContext.findForLogin(email)

  if (!account) {
    throw new BadRequestError({ data: { email: 'Email address does not exist' } })
  }

  const isPasswordCorrect = await account.comparePassword(password)

  if (!isPasswordCorrect) {
    throw new BadRequestError({ data: { password: 'This password is incorrect' } })
  }

  const token = generateToken(account)
  return { account, token }
}
