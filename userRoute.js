import express from 'express';
import { create, deleted, fetch ,update , findvalue} from '../controller/userController.js';
const router = express.Router();
router.get('/fetch', fetch);
router.post('/create', create);
router.put('/update/:id', update);
router.delete('/delete/:id', deleted);
router.get('/findvalue/:id', findvalue);

export default router;
