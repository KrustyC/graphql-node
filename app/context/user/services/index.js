// @flow

import UserRepo from '../repo'

export default class UserService {
  userRepo

  constructor() {
    this.userRepo = new UserRepo()
  }
}
