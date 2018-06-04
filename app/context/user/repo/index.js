/* @ flow */

import Repository from '../../../library/repository'

import User from '../schema'

export default class UserRepository extends Repository {
  _identificationField: string

  constructor() {
    super(User)

    this._identificationField = 'email'
  }

  /**
   * Identify a user for authentication
   *
   * @param  {string}      email
   * @param  {string|null} by
   * @return {Object}
   */
  identify(value: string, by: ?string = null) {
    const field = by || this._identificationField
    return this.findOneBy({ [field]: value })
  }

  /**
   * Identify a user for authentication
   *
   * @param  {String}      email
   * @param  {String|null} by
   * @return {Object}
   */
  async create(email: string, password: string) {
    const user = new User({ email, password })
    return user.save()
  }
}
