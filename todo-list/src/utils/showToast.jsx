import { addToast } from '@heroui/react';

const showToast = (description, color, title = 'เกิดข้อผิดพลาด') => {
    addToast({
        title,
        description,
        color,
    });
};

export { showToast };
