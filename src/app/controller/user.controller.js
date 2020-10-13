class UserController {
  async index(request, reply) {
    const test = {
      name: 'Anderson',
    };

    return reply.send(test);
  }
}

module.exports = new UserController();
