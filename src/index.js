const fastify = require('fastify')({ logger: true });
const routes = require('./routes');

class App {
  constructor() {
    this.server = fastify;
    this.router();
  }

  router() {
    routes.map((router) => fastify.route(router));
  }
}

module.exports = new App();
