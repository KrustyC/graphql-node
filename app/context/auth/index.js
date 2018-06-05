import Errors from '../../library/errors'
import AccountContext from '../account'

export async function signup(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  type: Number
) {
  const doesAccountExist = await AccountContext.exists(email)
  if (doesAccountExist) {
    throw Errors.BadRequestError(400, null, null, { msg: 'Email address already exists' })
  }

  // @TOTO if type not in set then throw the error below
  // throw Errors.BadRequestError(400, null, null, { msg: 'Types need to be provided' })

  return AccountContext.create(firstName, lastName, email, password, type)
}

export async function login(email: string, password: string) {
  const account = await AccountContext.findForLogin(email)
  console.log('account', account)
  if (!account) {
    throw Error('Email does not exists')
  }

  const isPasswordCorrect = await account.comparePassword(password)

  if (!isPasswordCorrect) {
    throw Error('Wrong password')
  }

  return account
}
