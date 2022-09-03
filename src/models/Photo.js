/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

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
    }, {
      sequelize,
      tableName: 'photo',
    });
    return this;
  }

  static associate(models) {
    this.hasOne(models.User, { foreignKey: 'user_id' });
  }
}
