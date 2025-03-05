import { Router } from 'express';
import { ToDoGet } from '../controllers/ToDoGet.js';
import { ToDoPost } from '../controllers/ToDoPost.js';
const router = Router();

router.get('/', ToDoGet);
router.post('/', ToDoPost);

export { router };
