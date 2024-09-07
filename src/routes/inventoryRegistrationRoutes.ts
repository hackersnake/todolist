import { Router } from 'express';
import {
  getAllInventoryRegistrations,
  getInventoryRegistrationById,
  createInventoryRegistration,
  updateInventoryRegistration,
  deleteInventoryRegistration
} from '../controllers/inventoryRegistrationController';

const router = Router();

router.get('/inventory-registrations', getAllInventoryRegistrations);
router.get('/inventory-registrations/:id', getInventoryRegistrationById);
router.post('/inventory-registrations', createInventoryRegistration);
router.put('/inventory-registrations/:id', updateInventoryRegistration);
router.delete('/inventory-registrations/:id', deleteInventoryRegistration);

export default router;
