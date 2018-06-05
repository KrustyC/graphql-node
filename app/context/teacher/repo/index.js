/* @ flow */

import Repository from '../../../library/repository'

import Teacher from '../schema'

export default class TeacherRepository extends Repository {
  _identificationField: string

  constructor() {
    super(Teacher)

    this._identificationField = 'email'
  }

  /**
   * Create a new teacher
   *
   * @param  {String} email
   * @param  {String} password
   * @return {Object}
   */
  async create(email: string, password: string) {
    const teacher = new Teacher({ email, password })
    return teacher.save()
  }
}
