module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'pedidos',
      'quantity',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('users');
  },
};
