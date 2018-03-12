import UserContext from '../../../context/user'

export default {
  addUser: (root, args) => UserContext.create(args)
}
