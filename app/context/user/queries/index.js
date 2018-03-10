import UserSchema from '../schema' // @TODO add and use a repository/serivce

export default {
  users: () => UserSchema.find({}),
  user: (root, { id }) => UserSchema.findOne({ _id: id })
}
