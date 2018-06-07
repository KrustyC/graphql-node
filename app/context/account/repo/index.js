/* @ flow */

import toLower from 'lodash/toLower'

import Repository from '../../../library/repository'

import Account from '../schema'

export default class AccountRepository extends Repository {
  constructor() {
    super(Account)
  }

  async exists(email: string) {
    const account = await this.findOneBy({ email: toLower(email) })
    return !!account
  }

  async findForLogin(email: string) {
    const account = await this.findOneBy({ email: toLower(email) })
    if (!account) {
      return null
    }
    return new Account(account)
  }

  async create(firstName: string, lastName: string, email: string, password: string, type: Number) {
    let kind = null

    // @TOTO Create a dict to map type to kind
    if (type === 1) {
      kind = 'Student'
    }

    if (type === 2) {
      kind = 'Teacher'
    }

    const account = new Account({ firstName, lastName, email, password, kind })
    return account.save()
  }
}
