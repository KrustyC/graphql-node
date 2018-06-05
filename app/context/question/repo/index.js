/* @ flow */

import Repository from '../../../library/repository'

import Quiz from '../schema'

export default class PostRepository extends Repository {
  constructor() {
    super(Quiz)
  }

  async findOneById(id) {
    return this.findOneBy({ _id: id })
  }

  async create(title, text, teacherId) {
    const quiz = new Quiz({ title, text, teacher: teacherId })
    return quiz.save()
  }
}
