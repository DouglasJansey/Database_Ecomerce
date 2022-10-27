/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class PhotoProduct extends Model {
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
      color: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'photo_product',
    });
    return this;
  }

  static associate(models) {
    this.hasOne(models.Products, { foreignKey: 'product_id' });
  }
}
