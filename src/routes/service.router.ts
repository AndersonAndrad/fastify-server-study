import { RouteOptions } from 'fastify/types/route';

export const main: RouteOptions[] = [
  {
    method: 'GET',
    url: '/',
    handler: async(request, reply) => { return reply.send('ok google') },
    version: '1'
  }
]
