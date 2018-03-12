import UserService from './services'

const userService = new UserService()

export default {
  index: () => userService.findAll(),
  show: id => userService.findOneById(id),
  create: data => userService.create(data)
}
