import QuizContext from '../../context/quiz'
import TeacherContext from '../../context/teacher'

export const QuizSchema = `
  type Quiz {
    _id: String
    text: String
    title: String
    description: String
    teacher: Teacher
  }

  extend type Query {
    quiz(id: String): Quiz
    quizzes: [Quiz]
  }

  extend type Mutation {
    addQuiz(title: String, description: String): Quiz
  }
`

const checkTeacher = (context) => {
  if (!context.user) {
    const error = new Error('Unathorized')
    return Promise.reject(error)
  }
  return Promise.resolve(context.user)
}

export const QuizResolvers = {
  Quiz: {
    teacher: ({ teacher }) => TeacherContext.show(teacher)
  },
  Query: {
    quiz: (_, { id }) => QuizContext.show(id),
    quizzes: () => QuizContext.index()
  },
  Mutation: {
    addQuiz: (_, args) => checkTeacher.then(teacher => QuizContext.create(args, teacher))
  }
}
