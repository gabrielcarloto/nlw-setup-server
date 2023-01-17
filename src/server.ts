import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const primsa = new PrismaClient();

app.get('/', () => {
  return 'Hello World';
});

app.listen({
  port: 3333,
});
