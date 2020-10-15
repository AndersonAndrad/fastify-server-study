const faker = require('faker');

function createFakerUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password_hash: faker.internet.password(),
  };
}

module.exports = {
  createFakerUser,
};
