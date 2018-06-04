// @flow

// import UserService from './services'
import UserRepo from './repo'

// const userService = new UserService()
const userRepo = new UserRepo()

export default {
  index: () => userRepo.findAll(),
  identify: (value: string, by: ?string) => userRepo.identify(value, by),
  create: (email: string, password: string) => userRepo.create(email, password)
}
