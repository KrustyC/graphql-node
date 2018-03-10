import faker from 'faker'

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    author: (root, args) => ({ firstName: args.firstName, lastName: args.lastName })
  }),
  Author: () => ({
    firstName: () => faker.name.firstName(),
    lastName: () => faker.name.lasttName()
  }),
  Post: () => ({ title: faker.lorem.word(), text: faker.lorem.sentences(3) })
}

export default mocks
