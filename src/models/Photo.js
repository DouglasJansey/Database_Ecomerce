/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio!',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio!',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/imagesUser/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'photo',
    });
    return this;
  }

  static associate(models) {
    this.hasOne(models.User, { foreignKey: 'id' });
  }
}
