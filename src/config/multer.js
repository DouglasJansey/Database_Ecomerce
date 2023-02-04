import multer from 'multer';
import url from 'url';
import { extname, resolve } from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const random = () => Math.floor(Math.random() * 10000 + 10000);
export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPGE'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__filename, '..', '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};
console.log(__filename)