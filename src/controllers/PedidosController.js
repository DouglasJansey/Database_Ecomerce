/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import Pedidos from '../models/Pedidos.js';

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
