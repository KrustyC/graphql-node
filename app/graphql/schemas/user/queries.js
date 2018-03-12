import UserContext from '../../../context/user'

export default {
  users: () => UserContext.index(),
  user: (root, { id }) => UserContext.show(id)
}
