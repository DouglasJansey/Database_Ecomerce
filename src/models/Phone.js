/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class Phone extends Model {
  static init(sequelize) {
    super.init({
      ddd_cel: {
        type: Sequelize.INTEGER(2),
        defaultValue: 0,
      },
      cel_number: {
        type: Sequelize.INTEGER(9),
        defaultValue: 0,
      },
      ddd_phone: {
        type: Sequelize.INTEGER(2),
        defaultValue: 0,
      },
      phone_number: {
        type: Sequelize.INTEGER(8),
        defaultValue: 0,
      },
      id_user: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    }, {
      sequelize,
      tableName: 'phones',
    });

    return this;
  }

  static associate(models) {
    this.hasOne(models.User, { foreignKey: 'id_user' });
  }
}
