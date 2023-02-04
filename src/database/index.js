import Sequelize from 'sequelize';
import database from '../config/database.js';
import Users from '../models/User.js';
import Photo from '../models/Photo.js';
import Address from '../models/Address.js';
import Products from '../models/Products.js';
import PhotoProducts from '../models/PhotoProduct.js';
import Phones from '../models/Phone.js';
import Pedidos from '../models/Pedidos.js';

const models = [Users, Photo, Address, Products, PhotoProducts, Phones, Pedidos];

const connection = new Sequelize(database);
models.map((model) => model.init(connection));
models.map((model) => model.associate && model.associate(connection.models));
