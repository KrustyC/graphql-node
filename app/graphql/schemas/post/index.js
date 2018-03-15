import PostContext from '../../../context/post'
import UserContext from '../../../context/user'

export const PostSchema = `
  type Post {
    _id: String
    text: String
    title: String
    author: User
  }

  extend type Query {
    post(id: String): Post
    posts: [Post]
  }

  extend type Mutation {
    addPost(title: String, text: String, authorId: String): Post
  }
`

export const PostResolvers = {
  Post: {
    author: ({ author }) => UserContext.show(author)
  },
  Query: {
    post: (root, { id }) => PostContext.show(id),
    posts: () => PostContext.index()
  },
  Mutation: {
    addPost: (root, args) => PostContext.create(args)
  }
}
