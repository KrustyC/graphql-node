// @flow

// import TeacherService from './services'
import TeacherRepo from './repo'

// const teacherService = new TeacherService()
const teacherRepo = new TeacherRepo()

export default {
  index: () => teacherRepo.findAll(),
  identify: (id: string) => teacherRepo.findById(id),
  create: (email: string, password: string) => teacherRepo.create(email, password)
}
