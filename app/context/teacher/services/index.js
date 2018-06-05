// @flow

import toLower from 'lodash/toLower'
import TeacherRepo from '../repo'

export default class TeacherService {
  teacherRepo

  constructor() {
    this.teacherRepo = new TeacherRepo()
  }

  async exists(email) {
    const teacher = await this.teacherRepo.findOneBy({ email: toLower(email) })
    return !!teacher
  }
}
