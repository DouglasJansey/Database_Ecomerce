/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'O nome deve ter no mínimo 4 caracteres',
          },
        },
      },
      cpf: {
        type: Sequelize.STRING(11),
        defaultValue: '',
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe!',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido!',
          },
        },
      },
      gender: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordValidate(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasOne(models.Photo, { foreignKey: 'user_id' });
    this.hasMany(models.Address, { foreignKey: 'id_user' });
    this.hasMany(models.Phone, { foreignKey: 'id_user' });
  }
}
