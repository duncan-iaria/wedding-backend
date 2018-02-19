import { json, urlencoded } from 'body-parser';

const setupMiddleware = function(server) {
  server.use(urlencoded({ extended: true }));
  server.use(json());
};

export default setupMiddleware;
