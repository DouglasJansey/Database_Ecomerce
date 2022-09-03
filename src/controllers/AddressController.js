/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import Address from '../models/Address';

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
}
export default new AddressController();
