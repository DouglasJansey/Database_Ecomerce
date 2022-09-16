/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import Products from '../models/Products';
import PhotoProduct from '../models/PhotoProduct';

class ProductController {
  async store(req, res) {
    const products = await Products.create(req.body);
    return res.json(products);
  }

  async index(req, res) {
    try {
      const product = await Products.findAll({
        attributes: ['id', 'name', 'description', 'category', 'sub_category', 'type',
          'price', 'old_price', 'quantity'],
        order: [['id', 'DESC']],
        include: {
          model: PhotoProduct,
          attributes: ['url', 'filename', 'color'],
        },
      });
      return res.json(product);
    } catch (err) {
      return res.status(400).json({
        errors: err,
      });
    }
  }
}
export default new ProductController();
