/* eslint-disable no-sequences */
/* eslint-disable radix */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import Products from '../models/Products.js';
import PhotoProduct from '../models/PhotoProduct.js';

class ProductController {
  async store(req, res) {
    const products = await Products.create(req.body);
    return res.json(products);
  }

  async index(req, res) {
    try {
      const { max, page } = req.query;
      const skip = (page * max) - max;

      const product = await Products.findAndCountAll({
        limit: parseInt(max) || undefined,
        offset: parseInt(skip) || undefined,
        attributes: ['id', 'name', 'description', 'category', 'sub_category', 'type', 'height',
          'width', 'length', 'weight', 'price', 'old_price', 'quantity'],
        include: {
          model: PhotoProduct,
          attributes: ['display_url', 'filename', 'color'],
        },
      });
      return res.json(product);
    } catch (err) {
      return res.status(400).json({
        errors: err,
      });
    }
  }

  async delete(req, res) {
    try {
      const product = await Products.findByPk(req.params.id, {
        attributes: ['id'],
      });

      if (!product) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }
      product.destroy();
      return res.json('Produto deletado!');
    } catch (e) {
      return res.json(e);
    }
  }
}
export default new ProductController();
