import { ToDo } from '../schema/ToDo.js';

const ToDoPost = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title)
            return res.status(400).json({
                message: 'จำเป็นต้องมีหัวข้อ',
                status: 400,
            });

        const newToDo = new ToDo({ title });
        try {
            const data = await newToDo.save();
            return res.status(201).json(data);
        } catch (error) {
            return res.status(500).json({
                message: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล',
                status: 500,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', status: 500 });
    }
};

export { ToDoPost };
