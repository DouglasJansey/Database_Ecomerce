/* eslint-disable radix */
import { Op } from 'sequelize';
import Products from '../models/Products.js';
import PhotoProduct from '../models/PhotoProduct.js';

export default async (req, res, next) => {
  if (!req.query.search) return next();
  const {
    search, value1, value2, teamname, max, page,
  } = req.query;
  const skip = (page * max) - max;
  function getParamsOne(props) {
    if (props === 'price' && value1 && value2) return { price: { [Op.between]: [value1, value2] } };
    if (props === 'team' && teamname) return { name: teamname };
    return '';
  }
  try {
    const product = await Products.findAndCountAll({
      limit: parseInt(max) || undefined,
      offset: parseInt(skip) || undefined,
      where: getParamsOne(search),
      attributes: ['id', 'name', 'description', 'category', 'sub_category', 'type', 'price', 'old_price', 'quantity',
      'width', 'length', 'weight', 'height'],
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
};
