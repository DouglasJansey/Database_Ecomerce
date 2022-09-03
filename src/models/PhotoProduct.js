/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

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
    }, {
      sequelize,
      tableName: 'photo_product',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Products, { foreignKey: 'product_id' });
  }
}
