// @flow

import AccountRepo from './repo'

const accountRepo = new AccountRepo()

export default {
  exists: (email: string) => accountRepo.exists(email),
  findForLogin: (email: string) => accountRepo.findForLogin(email),
  create: (firstName: string, lastName: string, email: string, password: string, type: Number) =>
    accountRepo.create(firstName, lastName, email, password, type)
}
