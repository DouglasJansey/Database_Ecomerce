module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      ddd_cel: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
      },
      cel_number: {
        type: Sequelize.INTEGER(9),
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.INTEGER(8),
        allowNull: true,
      },
      ddd_phone: {
        type: Sequelize.INTEGER(2),
        allowNull: true,
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('phones');
  },
};
