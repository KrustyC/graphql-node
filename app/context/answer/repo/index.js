/* @ flow */

import Repository from '../../../library/repository'

import Answer from '../schema'

export default class AnswerRepository extends Repository {
  constructor() {
    super(Answer)
  }

  async create(text, studentId, questionId) {
    const answer = new Answer({ text, student: studentId, question: questionId })
    return answer.save()
  }
}
