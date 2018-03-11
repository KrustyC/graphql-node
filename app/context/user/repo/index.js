/* @ flow */

import Repository from '../../../library/repository'

import User from '../schema'

export default class UserRepository extends Repository {
  constructor() {
    super(User)
  }

  async create(email, firstName, lastName, password) {
    const user = new User({ email, password, firstName, lastName })
    return user.save()
  }
}
