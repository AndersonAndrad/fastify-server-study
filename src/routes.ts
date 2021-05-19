// routes modules
import { userRoutes } from './routes/user.router';
import { main } from './routes/service.router';

export const allRoutes = [
  ...main,
  // ...userRoutes
];

