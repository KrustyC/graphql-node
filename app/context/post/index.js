import PostService from './services'

const postService = new PostService()

export default {
  index: () => postService.findAll(),
  findBy: (field, value) => postService.findBy(field, value),
  create: data => postService.create(data)
}
