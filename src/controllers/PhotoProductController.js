/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import multer from 'multer';
import multerConfig from '../config/multer';
import PhotoProduct from '../models/PhotoProduct';

const upload = multer(multerConfig).single('photoProduct');

class PhotoProductController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { product_id } = req.body;
        const photo = await PhotoProduct.create({ originalname, filename, product_id });
        return res.json(photo);
      } catch (err) {
        return res.status(400).json({
          errors: err,
        });
      }
    });
  }
}
export default new PhotoProductController();
