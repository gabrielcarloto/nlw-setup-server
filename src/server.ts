import Fastify from 'fastify';
import cors from '@fastify/cors';

const app = Fastify();

const PORT = 3333;

app.register(cors);

app.get('/', () => {
  return 'Hello World';
});

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`🚀 App listening on port: ${PORT}`);
  });
