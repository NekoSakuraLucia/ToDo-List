import { ToDo } from '../schema/ToDo.js';

const ToDoPut = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        if (!title)
            return res.status(400).json({
                message: 'จำเป็นต้องระบุหัวข้อก่อน',
                status: 400,
            });

        try {
            const data = await ToDo.findByIdAndUpdate(
                id,
                { title },
                { new: true }
            );

            if (!data)
                return res.status(404).json({
                    message: 'ไม่พบข้อมูลที่ต้องการอัพเดท',
                    status: 404,
                });

            return res.status(200).json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: 'เกิดข้อผิดพลาดในการอัพเดทข้อมูล',
                status: 500,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', status: 500 });
    }
};

export { ToDoPut };
