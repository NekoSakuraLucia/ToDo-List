import { Router } from 'express';
import { ToDoGet } from '../controllers/ToDoGet.js';
import { ToDoPost } from '../controllers/ToDoPost.js';
import { ToDoPut } from '../controllers/ToDoPut.js';
const router = Router();

router.get('/', ToDoGet);
router.post('/', ToDoPost);
router.put('/:id', ToDoPut);

export { router };
