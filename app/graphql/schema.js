import { makeExecutableSchema } from 'graphql-tools'
import { combineResolvers } from 'apollo-resolvers'

import { RootSchema, RootResolvers } from './schemas/root'
import { AnswerSchema, AnswerResolvers } from './schemas/answer'
import { QuestionSchema, QuestionResolvers } from './schemas/question'
import { QuizSchema, QuizResolvers } from './schemas/quiz'
import { StudentSchema, StudentResolvers } from './schemas/student'
import { TeacherSchema, TeacherResolvers } from './schemas/teacher'

const schema = makeExecutableSchema({
  typeDefs: [
    RootSchema,
    AnswerSchema,
    QuestionSchema,
    QuizSchema,
    StudentSchema,
    TeacherSchema
  ],
  resolvers: combineResolvers([
    RootResolvers,
    AnswerResolvers,
    QuestionResolvers,
    QuizResolvers,
    StudentResolvers,
    TeacherResolvers
  ])
})

export default schema
