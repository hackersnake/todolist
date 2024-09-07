import { Request, Response } from 'express';
import InventoryRegistration from '../models/InventoryRegistration';

export const getAllInventoryRegistrations = async (req: Request, res: Response) => {
  try {
    const registrations = await InventoryRegistration.findAll();
    res.json(registrations);
  } catch (error) {
    console.error('Error fetching inventory registrations:', error);
    res.status(500).json({ error: 'Error fetching inventory registrations' });
  }
};

export const getInventoryRegistrationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const registration = await InventoryRegistration.findByPk(id);
    if (!registration) {
      return res.status(404).json({ error: 'Inventory registration not found' });
    }
    res.json(registration);
  } catch (error) {
    console.error('Error fetching inventory registration:', error);
    res.status(500).json({ error: 'Error fetching inventory registration' });
  }
};

export const createInventoryRegistration = async (req: Request, res: Response) => {
  try {
    const { user_id, inventory_id, issued_date, receiving_date, status } = req.body;
    const registration = await InventoryRegistration.create({
      user_id,
      inventory_id,
      issued_date,
      receiving_date,
      status
    });
    res.json(registration);
  } catch (error) {
    console.error('Error creating inventory registration:', error);
    res.status(500).json({ error: 'Error creating inventory registration' });
  }
};

export const updateInventoryRegistration = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { user_id, inventory_id, issued_date, receiving_date, status } = req.body;
    const registration = await InventoryRegistration.findByPk(id);
    if (!registration) {
      return res.status(404).json({ error: 'Inventory registration not found' });
    }
    registration.user_id = user_id;
    registration.inventory_id = inventory_id;
    registration.issued_date = issued_date;
    registration.receiving_date = receiving_date;
    registration.status = status;
    await registration.save();
    res.json(registration);
  } catch (error) {
    console.error('Error updating inventory registration:', error);
    res.status(500).json({ error: 'Error updating inventory registration' });
  }
};

export const deleteInventoryRegistration = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const registration = await InventoryRegistration.findByPk(id);
    if (!registration) {
      return res.status(404).json({ error: 'Inventory registration not found' });
    }
    await registration.destroy();
    res.json({ message: 'Inventory registration deleted successfully' });
  } catch (error) {
    console.error('Error deleting inventory registration:', error);
    res.status(500).json({ error: 'Error deleting inventory registration' });
  }
};
