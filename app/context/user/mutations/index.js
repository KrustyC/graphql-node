import UserService from '../services'

const userService = new UserService()

export default {
  addUser: (root, args) => userService.create(args)
}
