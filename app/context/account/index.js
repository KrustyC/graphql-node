// @flow

// import UserService from './services'
import AccountRepo from './repo'

// const userService = new UserService()
const accountRepo = new AccountRepo()

export default {
  identify: (value: string, by: ?string) => accountRepo.identify(value, by),
  create: (email: string, password: string) => accountRepo.create(email, password)
}
