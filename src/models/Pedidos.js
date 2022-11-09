/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class Pedidos extends Model {
  static init(sequelize) {
    super.init({
      id_product: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      id_user: {
        type: Sequelize.INTEGER(),
        defaultValue: '',
      },
      payment: {
        type: Sequelize.STRING(),
        defaultValue: '',
      },
      status_prod: {
        type: Sequelize.STRING(),
        defaultValue: '',
      },
    }, {
      sequelize,
      tableName: 'pedidos',
    });

    return this;
  }

  static associate(models) {
    this.hasOne(models.User, { foreignKey: 'id_user' });
    this.hasOne(models.Products, { foreignKey: 'id_product' });
  }
}
