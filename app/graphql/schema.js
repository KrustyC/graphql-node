import { makeExecutableSchema } from 'graphql-tools'
import { combineResolvers } from 'apollo-resolvers'

import { RootSchema, RootResolvers } from './schemas/root'
import { AuthSchema, AuthResolvers } from './schemas/auth'
import { AnswerSchema, AnswerResolvers } from './schemas/answer'
import { QuestionSchema, QuestionResolvers } from './schemas/question'
import { QuizSchema, QuizResolvers } from './schemas/quiz'
import { StudentSchema, StudentResolvers } from './schemas/student'
import { TeacherSchema, TeacherResolvers } from './schemas/teacher'

const schema = makeExecutableSchema({
  typeDefs: [
    RootSchema,
    AuthSchema,
    AnswerSchema,
    QuestionSchema,
    QuizSchema,
    StudentSchema,
    TeacherSchema
  ],
  resolvers: combineResolvers([
    RootResolvers,
    AuthResolvers,
    AnswerResolvers,
    QuestionResolvers,
    QuizResolvers,
    StudentResolvers,
    TeacherResolvers
  ])
})

export default schema
