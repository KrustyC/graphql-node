import PostRepo from '../repo'


export default class PostService {
  postRepo

  constructor() {
    this.postRepo = new PostRepo()
  }

  async findAll() {
    return this.postRepo.findAll()
  }

  async findOneById(id) {
    return this.postRepo.findOneBy({ _id: id })
  }

  async create({ title, text, authorId }) {
    return this.postRepo.create(title, text, authorId)
  }
}
