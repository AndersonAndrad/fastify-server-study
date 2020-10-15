const fastify = require('fastify')({ logger: true, trustProxy: true });
const routes = require('./routes');
const fastifyCors = require('fastify-cors');

// controllers to test
const User = require('./app/controller/user.controller');

class App {
  constructor() {
    this.server = fastify;
    this.cors();
    this.router();
  }

  cors() {
    this.server.register(fastifyCors);
  }

  router() {
    routes.map((r) => this.server.route(r));
  }
}

module.exports = new App();
