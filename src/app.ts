import 'dotenv/config';

import express, { Application } from 'express';
import routes from './routes';

import './database';

class App {
  server: Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;