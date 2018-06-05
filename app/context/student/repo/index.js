/* @ flow */

import Repository from '../../../library/repository'

import Student from '../schema'

export default class StudentRepository extends Repository {
  _identificationField: string

  constructor() {
    super(Student)

    this._identificationField = 'email'
  }

  /**
   * Create new student
   *
   * @param  {String} email
   * @param  {String} password
   * @return {Object}
   */
  async create(email: string, password: string) {
    const teacher = new Student({ email, password })
    return teacher.save()
  }
}
