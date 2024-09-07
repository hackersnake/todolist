import { Request, Response } from 'express';
import Inventory from '../models/Inventory';

export const getAllInventories = async (req: Request, res: Response) => {
  try {
    const inventories = await Inventory.findAll();
    res.json(inventories);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching inventories' });
  }
};

export const getInventoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const inventory = await Inventory.findByPk(id);
    if (!inventory) {
      return res.status(404).json({ error: 'Inventory not found' });
    }
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching inventory' });
  }
};

export const createInventory = async (req: Request, res: Response) => {
  try {
    const { name, amount } = req.body;
    const inventory = await Inventory.create({ name, amount });
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ error: 'Error creating inventory' });
  }
};

export const updateInventory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, amount } = req.body;
    const inventory = await Inventory.findByPk(id);
    if (!inventory) {
      return res.status(404).json({ error: 'Inventory not found' });
    }
    inventory.name = name;
    inventory.amount = amount;
    await inventory.save();
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ error: 'Error updating inventory' });
  }
};

export const deleteInventory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const inventory = await Inventory.findByPk(id);
    if (!inventory) {
      return res.status(404).json({ error: 'Inventory not found' });
    }
    await inventory.destroy();
    res.json({ message: 'Inventory deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting inventory' });
  }
};
