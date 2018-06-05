import TeacherContext from '../../context/teacher'
import QuizContext from '../../context/quiz'

export const TeacherSchema = `
  type Teacher {
    _id: String
    email: String
    firstName: String
    lastName: String
    quizzes: [Quiz]
  }

  extend type Query {
    teacher(id: String): Teacher
    teachers: [Teacher]
  }

  extend type Mutation {
    addTeacher(email: String, firstName: String, lastName: String, password: String): Teacher
  }
`

export const TeacherResolvers = {
  Teacher: {
    quizzes: ({ id }) => QuizContext.findForTeacher(id)
  },
  Query: {
    teacher: (_, { id }) => TeacherContext.identify(id),
    teachers: () => TeacherContext.index()
  },
  Mutation: {
    addTeacher: (_, args) => TeacherContext.create(args)
  }
}
