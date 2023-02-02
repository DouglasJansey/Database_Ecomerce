module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      status_prod: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      payment: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      id_product: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('pedidos');
  },
};
// id_product: {
//   type: 'FOREIGNKEYS',
//   allowNull: false,
//   references: {
//     model: 'products',
//     key: 'id_products',
//   },
//   onDelete: 'SET NULL',
//   onUpdate: 'CASCADE',
// },
// id_address: {
//   type: 'FOREIGNKEYS',
//   allowNull: false,
//   references: {
//     model: 'address',
//     key: 'id',
//   },
//   onDelete: 'SET NULL',
//   onUpdate: 'CASCADE',
// },
