// @flow

import toLower from 'lodash/toLower'
import StudentRepo from '../repo'

export default class StudentService {
  studentRepo

  constructor() {
    this.studentRepo = new StudentRepo()
  }

  async exists(email) {
    const student = this.studentRepo.findBy({ email: toLower(email) })
    return !!student
  }
}
