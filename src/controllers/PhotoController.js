/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import multer from 'multer';
import multerProfile from '../config/multerProfile';
import Photo from '../models/Photo';

const upload = multer(multerProfile).single('photo');
// const update = multer(multerProfile).single('newPhoto');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json(console.log(error));
      }
      try {
        const { originalname, filename } = req.file;
        const { user_id } = req.body;
        const userIdExist = await Photo.findOne({ where: { user_id } });
        if (userIdExist) {
          return res.status(400).json({
            errors: ['Usuário só pode ter uma foto'],
          });
        }
        const photo = await Photo.create({ originalname, filename, user_id });
        return res.json(photo);
      } catch (err) {
        return res.status(400).json({
          errors: err,
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
        const photo = await Photo.findOne({ where: { user_id: req.userId } });
        if (!photo) return res.status(401).json('Não há FOTO');
        const newPhoto = await photo.update(req.file);
        return res.json(newPhoto);
      } catch (err) {
        return console.log(err);
      }
    });
  }
}
export default new PhotoController();
