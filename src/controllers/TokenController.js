/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import jwt from 'jsonwebtoken';
import User from '../models/User';
import Photo from '../models/Photo';
import Address from '../models/Address';
import Phone from '../models/Phone';

class TokenController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    const { email = ' ', password = ' ' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas!'],
      });
    }
    const user = await User.findOne({
      attributes: ['name', 'id', 'cpf', 'gender', 'password_hash'],
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
      where: { email },
    });
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe!'],
      });
    }
    if (!(await user.passwordValidate(password))) {
      return res.status(401).json({
        errors: ['Senha inválida!'],
      });
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.SECRET_TOKEN, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({
      token,
      user: {
        name: user.name, id, email,
      },
    });
  }
}
export default new TokenController();
