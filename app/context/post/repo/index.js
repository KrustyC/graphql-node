/* @ flow */

import Repository from '../../../library/repository'

import Post from '../schema'

export default class PostRepository extends Repository {
  constructor() {
    super(Post)
  }

  async create(title, text, authorId) {
    const post = new Post({ title, text, author: authorId })
    return post.save()
  }
}
