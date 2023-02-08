const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
module.exports = {
  dialect: 'mysql',
  host: process.env.HOST_DB,
  port: process.env.PORT_DB,
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

//export default database;
