import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Inventory extends Model {
  public id!: number;
  public name!: string;
  public amount!: number;
}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Inventory',
  }
);

export default Inventory;
