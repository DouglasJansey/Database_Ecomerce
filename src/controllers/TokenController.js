/* eslint-disable no-unused-vars */
import jwt from 'jsonwebtoken';
import Users from '../models/User';

class TokenController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;
      // verficação se há uma senha e um email
      if (!email || !password) {
        return res.status(400).json({
          errors: ['Credenciais inválidas!'],
        });
      }
      const user = await Users.findOne({ where: { email } });

      // verficação se há uma senha e um email
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }
      if (!(await user.passwordValidate(password))) {
        return res.status(400).json({
          errors: ['Senha inválida!'],
        });
      }
      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.SECRET_TOKEN, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return res.json({ token });
    } catch (err) {
      return res.status(400).json({
        errors: err,
      });
    }
  }
}
export default new TokenController();
