import PostService from './services'

const postService = new PostService()

export default {
  index: () => postService.findAll(),
  create: data => postService.create(data)
}
