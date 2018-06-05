import QuestionRepo from './repo'
import QuestionService from './services'

const questionService = new QuestionService()
const questionRepo = new QuestionRepo()

export default {
  index: () => questionRepo.findAll(),
  show: id => questionRepo.findOneById(id),
  findForQuiz: quizId => questionService.findForQuiz(quizId),
  create: data => questionRepo.create(data)
}
