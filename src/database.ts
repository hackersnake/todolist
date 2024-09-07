// src/database.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nvcti', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export default sequelize;
