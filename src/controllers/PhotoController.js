/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import multer from 'multer';
import multerProfile from '../config/multerProfile.js';
import Photo from '../models/Photo.js';

const upload = multer(multerProfile).single('photo');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json(console.log('Erro aqui', error));
      }
      try {
        const {
          originalname, user_id, filename, display_url,
        } = req.body;
        const userIdExist = await Photo.findOne({ where: { user_id } });
        if (userIdExist) {
          return res.status(400).json({
            errors: ['Usuário só pode ter uma foto'],
          });
        }
        const photo = await Photo.create({
          originalname, user_id, filename, display_url,
        });
        return res.json(photo);
      } catch (err) {
        return res.status(400).json({
          errors: err,
        });
      }
    });
  }

  async index(req, res) {
    try {
      const photo = await Photo.findOne({
        where: { user_id: req.userId },
        attributes: ['id', 'originalname', 'filename', 'display_url'],
      });
      return res.json(photo);
    } catch (err) {
      return res.status(400).json({
        errors: err,
      });
    }
  }

  update(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json(console.log(error));
      }
      try {
        const photo = await Photo.findOne({ where: { user_id: req.userId } });
        //  if (!photo) return res.status(401).json('Não há FOTO');
        const newPhoto = await photo.update(req.body);
        return res.json(newPhoto);
      } catch (err) {
        return console.log(err);
      }
    });
  }
}
export default new PhotoController();
