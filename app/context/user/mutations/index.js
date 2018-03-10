import User from '../schema'

export default {
  addUser: (root, { name }) => {
    const newUser = new User({ name })
    return newUser.save()
  }
}
