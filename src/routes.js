module.exports = [
  {
    method: 'GET',
    url: '/',
    handler: function (request, reply) {
      reply.send({
        status: 'the server is online',
      });
    },
  },
];
