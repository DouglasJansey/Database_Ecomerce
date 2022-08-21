import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

import express from 'express';
import cors from 'cors';
import clients from './src/routes/clients';

import './src/database';



const corsOptions = {

  origin: '*',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors(corsOptions));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/client', clients);
  }
}
export default new App().app;
