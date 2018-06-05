import AnswerRepo from './repo'
import AnswerService from './services'

const answerService = new AnswerService()
const answerRepo = new AnswerRepo()

export default {
  index: () => answerRepo.findAll(),
  show: id => answerRepo.findById(id),
  findForQuestion: questionId => answerService.findFirQuestion(questionId),
  create: (text, studentId, questionId) => answerRepo.create(text, studentId, questionId)
}
