import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: '.env' });
import express from 'express';
import cors from 'cors';
import users from './src/routes/users';
import token from './src/routes/token';
import photo from './src/routes/photo';
import address from './src/routes/address';
import product from './src/routes/product';
import photoProduct from './src/routes/photoProducts';
import phone from './src/routes/phone';
import pedido from './src/routes/pedidos';

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
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/users', users);
    this.app.use('/tokens', token);
    this.app.use('/fotos', photo);
    this.app.use('/endereco', address);
    this.app.use('/produtos', product);
    this.app.use('/produtos', photoProduct);
    this.app.use('/telefones', phone);
    this.app.use('/pedidos', pedido);
  }
}
export default new App().app;
