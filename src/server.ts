import express from 'express';

import routes from './routes';

const server = express();

const PORT = 3333;

server.use(express.json());

server.use(routes);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
