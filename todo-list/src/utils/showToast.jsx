import { addToast } from '@heroui/react';

const showToast = (title, description, color) => {
    addToast({
        title,
        description,
        color,
    });
};

export { showToast };
