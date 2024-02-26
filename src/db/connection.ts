import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('store', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;