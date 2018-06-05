import QuestionRepo from '../repo'

export default class QuestionService {
  questionRepo

  constructor() {
    this.questionRepo = new QuestionRepo()
  }

  async findForQuiz(quizId) {
    return this.questionRepo.findBy({ quiz: quizId })
  }
}
