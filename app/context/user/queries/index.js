import UserService from '../services'

const userService = new UserService()

export default {
  users: () => userService.findAll({}),
  user: (root, { id }) => userService.findOneById(id)
}
