import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Users from '../models/User';
import Photo from '../models/Photo';
import Address from '../models/Address';
import Products from '../models/Products';
import PhotoProducts from '../models/PhotoProduct';
import Phones from '../models/Phone';

const models = [Users, Photo, Address, Products, PhotoProducts, Phones];

const connection = new Sequelize(databaseConfig);

models.map((model) => model.init(connection));
models.map((model) => model.associate && model.associate(connection.models));
