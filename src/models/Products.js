/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class Products extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      category: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      sub_category: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      price: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      old_price: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      height: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      width: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      length: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weight: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'products',
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.PhotoProduct, { foreignKey: 'product_id' });
    this.hasMany(models.Pedidos, { foreignKey: 'id_product' });
  }
}
