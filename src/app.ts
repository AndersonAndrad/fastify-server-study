// dependencies
import fastify from 'fastify';
import fastifyCors from 'fastify-cors';

// routes
import { allRoutes } from './routes';

class App{
  constructor(){
    this.cors();
    this.routes();
  }
  server = fastify();

  cors(){
    this.server.register(fastifyCors);
  }

  routes(){
    allRoutes.map(routes => {this.server.route(routes)});    
  }
}

export default new App();
