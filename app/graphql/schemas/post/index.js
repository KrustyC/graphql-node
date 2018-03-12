import PostContext from '../../../context/post'

export const PostResolvers = {
  PostQuery: {
    post: (root, { id }) => PostContext.show(id),
    posts: () => PostContext.index()
  },
  PostMutation: {
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

  type PostQuery {
    post(id: String): User
    posts: [Post]
  }

  type PostMutation {
    addPost(title: String, text: String, authorId: String): Post
  }
`
