import AnswerContext from '../../../context/answer'

export const AnswerSchema = `
  type Answer {
    _id: String
    text: String
    isCorrect: Bool
    student: Student
    question: Question
  }

  extend type Query {
    answer(id: String): Answer
    questionAnswers: [Answer]
  }

  extend type Mutation {
    dddAnswer(title: String, description: String): Answer
  }
`

const checkStudent = (context) => {
  if (!context.user) {
    const error = new Error('Unathorized')
    return Promise.reject(error)
  }
  return Promise.resolve(context.user)
}

export const AnswerResolvers = {
  Query: {
    quiz: (_, { id }) => AnswerContext.show(id),
    questionAnswers: (_, { questionId }) => AnswerContext.findForQuestion(questionId)
  },
  Mutation: {
    addAnswer: (_, args) => checkStudent.then(student => AnswerContext.create(args, student))
  }
}
