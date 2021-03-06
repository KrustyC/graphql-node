// @flow

// import StudentService from './services'
import StudentRepo from './repo'

// const studentService = new StudentService()
const studentRepo = new StudentRepo()

export default {
  index: () => studentRepo.findAll(),
  identify: (id: string) => studentRepo.findById(id)
}
