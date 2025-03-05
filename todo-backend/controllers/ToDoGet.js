import { ToDo } from '../schema/ToDo.js';

const ToDoGet = async (req, res) => {
    try {
        const todo = await ToDo.find();
        res.status(200).json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', status: 500 });
    }
};

export { ToDoGet };
