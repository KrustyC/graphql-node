import PostContext from '../../../context/post'

export const PostResolvers = {
  Query: {
    post: (root, { id }) => PostContext.show(id),
    posts: () => PostContext.index()
  },
  Mutation: {
    addPost: (root, args) => PostContext.create(args)
  }
}

export const PostSchema = `
  type Post {
    id: String
    text: String
    title: String
    author: User
  }

  extend type Query {
    post(id: String): User
    posts: [Post]
  }

  extend type Mutation {
    addPost(title: String, text: String, authorId: String): Post
  }
`
