import AnswerRepo from '../repo'


export default class AnswerService {
  answerRepo

  constructor() {
    this.answerRepo = new AnswerRepo()
  }

  async findFirQuestion(questionId) {
    return this.answerRepo.findBy({ question: questionId })
  }
}
