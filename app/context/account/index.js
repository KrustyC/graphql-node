// @flow

import AccountRepo from './repo'

const accountRepo = new AccountRepo()

export default {
  exists: (email: string) => accountRepo.exists(email),
  create: (firstName, lastName, email, password, type) =>
    accountRepo.create(firstName, lastName, email, password, type)
}
