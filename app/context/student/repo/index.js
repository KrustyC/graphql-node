/* @ flow */

import Repository from '../../../library/repository'

import Student from '../schema'

export default class StudentRepository extends Repository {
  constructor() {
    super(Student)
  }
}
