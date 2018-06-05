/* @ flow */

import Repository from '../../../library/repository'

import Teacher from '../schema'

export default class TeacherRepository extends Repository {
  constructor() {
    super(Teacher)
  }
}
