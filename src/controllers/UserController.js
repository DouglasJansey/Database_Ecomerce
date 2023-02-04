/* eslint-disable radix */
/* eslint-disable class-methods-use-this */
import User from '../models/User.js';
import Photo from '../models/Photo.js';
import Address from '../models/Address.js';
import Phone from '../models/Phone.js';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (err) {
      return res.status(400).json({
        errors: err,
      });
    }
  }

  async index(req, res) {
    try {
      if (!req.userId) return res.status(400).json({ erros: ['Não enviado!'] });
      const users = await User.findOne({
        where: { id: req.userId },
        attributes: ['id', 'name', 'email', 'cpf', 'gender'],
        order: [['id', 'DESC']],
        include: [{
          model: Photo,
          attributes: ['url', 'filename'],
        }, {
          model: Address,
          attributes: ['street', 'street_number', 'city'],
        }, {
          model: Phone,
          attributes: ['ddd_cel', 'cel_number', 'ddd_phone', 'phone_number'],
        }],
      });
      console.log(users);
      return res.json(users);
    } catch (err) {
      return res.status(400).json({
        errors: err,
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.userId) return res.status(400).json({ erros: ['Não enviado!'] });

      const user = await User.findByPk(req.userId, {
        attributes: ['id', 'name', 'email', 'cpf', 'gender'],
        order: [['id', 'DESC']],
        include: [{
          model: Photo,
          attributes: ['url', 'filename'],
        }, {
          model: Address,
          attributes: ['street', 'street_number', 'city'],
        }, {
          model: Phone,
          attributes: ['ddd_cel', 'cel_number', 'ddd_phone', 'phone_number'],
        }],
      });

      if (!user) return res.status(400).json({ errors: ['Usuário não existe!'] });

      const newUser = await user.update(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.json(e);
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }
      user.destroy();
      return res.json('Usuário deletado!');
    } catch (e) {
      return res.json('error');
    }
  }
}
export default new UserController();
