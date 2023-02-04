/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import Address from '../models/Address.js';

class AddressController {
  async store(req, res) {
    try {
      const {
        street, city, street_number,
        state_address, id_user,
      } = req.body;
      const address = await Address.create({
        street,
        city,
        street_number,
        state_address,
        id_user,
      });
      return res.json(address);
    } catch (err) {
      return res.status(401).json({
        errors: err,
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.userId) return res.status(400).json({ erros: ['Não enviado!'] });

      const address = await Address.findOne({ where: { id_user: req.userId } }, {
        attributes: ['street', 'city', 'street_number', 'id_user'],
        order: [['id', 'DESC']],

      });

      if (!address) return res.status(400).json({ errors: ['Usuário não existe!'] });

      const newAddress = await address.update(req.body);
      return res.json(newAddress);
    } catch (e) {
      return res.json(e);
    }
  }
}
export default new AddressController();
