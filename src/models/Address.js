/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class Address extends Model {
  static init(sequelize) {
    super.init({
      street: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      city: {
        type: Sequelize.STRING(11),
        defaultValue: '',
      },
      street_number: {
        type: Sequelize.INTEGER(11),
        defaultValue: '',
      },
      state_address: {
        type: Sequelize.STRING(30),
        defaultValue: '',
      },
      id_user: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
    }, {
      sequelize,
      tableName: 'address',
    });

    return this;
  }

  static associate(models) {
    this.hasOne(models.User, { foreignKey: 'id_user' });
  }
}
