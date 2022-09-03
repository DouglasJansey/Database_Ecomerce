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
}
export default new PhoneController();
