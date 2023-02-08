/* eslint-disable radix */
import { Op } from 'sequelize';
import Products from '../models/Products.js';
import PhotoProduct from '../models/PhotoProduct.js';
import axios from 'axios';

export default async (req, res, next) => {
  if (!req.query.upload) return next();
  const {
    upload,
  } = req.query;
  try {
    const photo = async () => {
      await axios.post(urlFoto).then(res => res);
    }
    const photoResp = photo()
    return res.status(200).json(photoResp);
  } catch (err) {
    return res.status(400).json({
      errors: err,
    });
  }
};
