// @flow

import toLower from 'lodash/toLower'
import StudentRepo from '../repo'

export default class StudentService {
  studentRepo

  constructor() {
    this.studentRepo = new StudentRepo()
  }

  async exists(email) {
    const student = await this.studentRepo.findOneBy({ email: toLower(email) })
    return !!student
  }
}
