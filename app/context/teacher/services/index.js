// @flow

import TeacherRepo from '../repo'

export default class TeacherService {
  teacherRepo

  constructor() {
    this.teacherRepo = new TeacherRepo()
  }
}
