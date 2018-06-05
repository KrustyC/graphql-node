// @flow

import toLower from 'lodash/toLower'
import TeacherRepo from '../repo'

export default class TeacherService {
  teacherRepo

  constructor() {
    this.teacherRepo = new TeacherRepo()
  }

  async exists(email) {
    const teacher = this.teacherRepo.findBy({ email: toLower(email) })
    return !!teacher
  }
}
