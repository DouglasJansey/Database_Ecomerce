/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import multer from 'multer';
import multerConfig from '../config/multer.js';
import PhotoProduct from '../models/PhotoProduct.js';

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
        const { color } = req.body;

        const photo = await PhotoProduct.create({
          originalname, filename, color, product_id,
        });
        return res.json(photo);
      } catch (err) {
        return res.status(400).json({
          err,
        });
      }
    });
  }

  update(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json(console.log(error));
      }
      try {
        // const { originalname, filename } = req.file;
        // const { user_id } = req.params.id;
        const photo = await PhotoProduct.findOne({ where: { user_id: req.userId } });
        if (!photo) return res.status(401).json('Não há usuário');
        const newPhoto = await photo.update(req.file);
        return res.json(newPhoto);
      } catch (err) {
        return res.status(400).json({
          errors: err,
        });
      }
    });
  }
}
export default new PhotoProductController();
