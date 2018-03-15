import UserRepo from '../repo'


export default class UserService {
  userRepo

  constructor() {
    this.userRepo = new UserRepo()
  }

  async findAll() {
    const x = await this.userRepo.findAll()
    console.log(x)
    return this.userRepo.findAll()
  }

  async findOneById(id) {
    return this.userRepo.findOneBy({ _id: id })
  }

  async create({ email, firstName, lastName, password }) {
    return this.userRepo.create(email, firstName, lastName, password)
  }
}
