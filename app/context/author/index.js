import AuthorSchema from './schema' // @TODO add and use a repository/serivce

export default {
  Query: {
    authors: () => AuthorSchema.find({}),
    author: (root, { id }) => AuthorSchema.findOne({ _id: id })
  },
  Mutation: {
    addAuthor: (root, { firstName, lastName }) => {
      const newAuthor = new AuthorSchema({ firstName, lastName })
      return newAuthor.save()
    }
  }
}
