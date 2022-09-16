/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class Phone extends Model {
  static init(sequelize) {
    super.init({
      ddd_cel: {
        type: Sequelize.INTEGER(2),
        defaultValue: '',
      },
      cel_number: {
        type: Sequelize.INTEGER(9),
        defaultValue: '',
      },
      ddd_phone: {
        type: Sequelize.INTEGER(2),
        defaultValue: null,
      },
      phone_number: {
        type: Sequelize.INTEGER(8),
        defaultValue: null,
      },
      id_user: {
        type: Sequelize.INTEGER,
        defaultValue: '',
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
