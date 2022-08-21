/* eslint-disable class-methods-use-this */
import Client from '../models/Client';

class UserController {
  async store(req, res) {
    try {
      const newUser = await Client.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return console.log(e);
    }
  }

  async index(req, res) {
    try {
      const users = await Client.findAll();
      return res.json(users);
    } catch (e) {
      return console.log(e);
    }
  }

  async delete(req, res) {
    try {
      const client = await Client.findByPk(req.params.id);
      client.destroy();
      return res.json('Deletado');
    } catch (e) {
      return res.json(null);
    }
  }
}
export default new UserController();
