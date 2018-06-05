import _ from 'lodash'
import QuizRepo from '../repo'

export default class QuizService {
  quizRepo

  constructor() {
    this.quizRepo = new QuizRepo()
  }

  async findBy(field, value) {
    const clause = {}
    _.set(clause, field, value)
    return this.quizRepo.findBy(clause)
  }

  async findForTeacher(teacherId) {
    return this.quizRepo.findBy({ teacher: teacherId })
  }
}
