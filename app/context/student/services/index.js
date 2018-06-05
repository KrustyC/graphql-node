// @flow

import StudentRepo from '../repo'

export default class StudentService {
  studentRepo

  constructor() {
    this.studentRepo = new StudentRepo()
  }
}
