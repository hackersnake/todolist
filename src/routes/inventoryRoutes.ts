import { Router } from 'express';
import {
  getAllInventories,
  getInventoryById,
  createInventory,
  updateInventory,
  deleteInventory
} from '../controllers/inventoryController';

const router = Router();

router.get('/inventories', getAllInventories);
router.get('/inventories/:id', getInventoryById);
router.post('/inventories', createInventory);
router.put('/inventories/:id', updateInventory);
router.delete('/inventories/:id', deleteInventory);

export default router;
