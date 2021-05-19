import { RouteOptions } from 'fastify/types/route';

// controllers
import User from '../app/controller/user.controller';

export const userRoutes: RouteOptions[] = [
  {
    method: 'POST',
    url: '/user',
    handler: User.store,
  },
  {
    method: 'GET',
    url: '/user',
    handler: User.index,
  },
]