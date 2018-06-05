import StudentContext from '../../context/student'

export const StudentSchema = `
  type Student {
    _id: String
    email: String
    firstName: String
    lastName: String
    quizzes: [Quiz]
  }

  extend type Query {
    student(id: String): Student
    students: [Student]
  }

  extend type Mutation {
    addStudent(email: String, firstName: String, lastName: String, password: String): Student
  }
`

export const StudentResolvers = {
  Query: {
    student: (_, { id }) => StudentContext.identify(id),
    students: () => StudentContext.index()
  },
  Mutation: {
    addStudent: (_, { email, password }) => StudentContext.create(email, password)
  }
}
