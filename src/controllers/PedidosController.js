/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import Pedidos from '../models/Pedidos';
import User from '../models/User';
import Photo from '../models/Photo';
import Address from '../models/Address';
import Phone from '../models/Phone';
import Products from '../models/Products';
import PhotoProduct from '../models/PhotoProduct';

class PedidosController {
  async store(req, res) {
    try {
      const pedidos = await Pedidos.create(req.body);
      return res.json(pedidos);
    } catch (err) {
      return console.log(err);
    }
  }

  async index(req, res) {
    try {
      const pedidos = await Pedidos.findAll();
      return res.json({ pedidos });
    } catch (err) {
      return console.log(err);
    }
  }
}
export default new PedidosController();
