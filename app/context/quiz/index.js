import QuizRepo from './repo'
import QuizService from './services'

const quizService = new QuizService()
const quizRepo = new QuizRepo()

export default {
  index: () => quizRepo.findAll(),
  findById: id => quizRepo.findById(id),
  findForTeacher: teacherId => quizService.findForTeacher(teacherId),
  create: data => quizRepo.create(data)
}
