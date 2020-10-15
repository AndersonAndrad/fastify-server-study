const connection = require('../../database/connection');
const uuid = require('uuid4');
const yup = require('yup');
class UserController {
  async store(request, reply) {
    const schema = yup.object().shape({
      name: yup.string().required().min(3),
      email: yup.string().required().email(),
      password_hash: yup.string().required().min(8),
    });

    const { name, email, password_hash } = request.body;
    // verify schema
    if (!(await schema.isValid(request.body))) {
      return reply.send({
        message: 'the schema is not valid, verify all informations',
      });
    }

    // verify userExists
    const userExists = await connection('users')
      .where(`email`, email)
      .select('*');

    if (!userExists) {
      return reply.send({
        message: 'this user has existis',
      });
    }

    //create user
    const id = uuid();

    await connection('users').insert({
      id,
      name,
      email,
      password_hash,
    });

    return reply
      .send({
        user: {
          id,
          name,
          email,
        },
      })
      .code(200);
  }

  async index(request, reply) {
    const users = await connection('users').select('id', 'name', 'email');

    return reply.send({ users }).code(200);
  }
}

module.exports = new UserController();
