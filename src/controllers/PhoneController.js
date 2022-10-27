/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import Phone from '../models/Phone';

class PhoneController {
  async store(req, res) {
    try {
      const phone = await Phone.create(req.body);
      return res.json(phone);
    } catch (err) {
      return res.status(401).json({
        errors: err,
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.userId) return res.status(400).json({ erros: ['Não enviado!'] });

      const phone = await Phone.findOne({ where: { id_user: req.userId } }, {
        attributes: ['ddd_phone', 'phone_number', 'ddd_cel', 'cel_number'],
        order: [['id', 'DESC']],

      });

      if (!phone) return res.status(400).json({ errors: ['Usuário não existe!'] });

      const newPhone = await phone.update(req.body);
      return res.json(newPhone);
    } catch (e) {
      return res.json(e);
    }
  }
}
export default new PhoneController();
