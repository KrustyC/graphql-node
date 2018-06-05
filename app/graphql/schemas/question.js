import QuestionContext from '../../context/question'

export const QuestionSchema = `
  type Question {
    _id: String
    text: String
    quiz: [Quiz]
  }

  extend type Query {
    question(id: String): Question
    quizQuestions: [Question]
  }

  extend type Mutation {
    addQuestion(text: String, quizId: String): Question
  }
`

const checkteacher = (context) => {
  if (!context.user) {
    const error = new Error('Unathorized')
    return Promise.reject(error)
  }
  return Promise.resolve(context.user)
}

export const QuestionResolvers = {
  Query: {
    question: (_, { id }) => QuestionContext.show(id),
    quizQuestions: (_, { quizId }) => QuestionContext.findForQuiz(quizId)
  },
  Mutation: {
    addQuestion: (_, args) => checkteacher.then(() => QuestionContext.create(args))
  }
}
