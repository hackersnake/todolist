import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import Inventory from './Inventory';

class InventoryRegistration extends Model {
  public registration_id!: number;
  public user_id?: number;
  public inventory_id?: number;
  public issued_date!: Date;
  public receiving_date!: Date;
  public status!: 'issued' | 'received';
}

InventoryRegistration.init(
  {
    registration_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    inventory_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Inventory', // Referencing Inventory table
        key: 'id',
      },
    },
    issued_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    receiving_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.ENUM('issued', 'received'),
      allowNull: false,
      defaultValue: 'issued',
    },
  },
  {
    sequelize,
    modelName: 'InventoryRegistration',
    tableName: 'InventoryRegistration',
    timestamps: false,
  }
);

Inventory.hasMany(InventoryRegistration, { foreignKey: 'inventory_id' });
InventoryRegistration.belongsTo(Inventory, { foreignKey: 'inventory_id' });

export default InventoryRegistration;
