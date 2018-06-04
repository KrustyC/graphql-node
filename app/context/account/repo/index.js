/* @ flow */

import Repository from '../../../library/repository'

import Account from '../schema'

export default class AccountRepository extends Repository {
  constructor() {
    super(Account)
  }

  /**
   * Find an account by email
   *
   * @param  {string}      email
   * @return {Object}
   */
  findByEmail(email: string) {
    return this.findOneBy({ email })
  }

  /**
   * Create a new account
   *
   * @param  {string}      email
   * @param  {string} password
   * @return {Object}
   */
  async create(email: string, password: string) {
    const account = new Account({ email, password })
    return account.save()
  }
}
