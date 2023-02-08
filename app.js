/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import dotenv from 'dotenv';
import url from 'url';
import { resolve } from 'path';

dotenv.config({ path: '.env' });
import express from 'express';
import cors from 'cors';
import users from './src/routes/users.js';
import token from './src/routes/token.js';
import photo from './src/routes/photo.js';
import address from './src/routes/address.js';
import product from './src/routes/product.js';
import photoProduct from './src/routes/photoProducts.js';
import phone from './src/routes/phone.js';
import pedido from './src/routes/pedidos.js';

import './src/database/index.js';

const corsOptions = {
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  origin: '*',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
  'Content-Type':'FormData/'
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
