import { showToast } from '@/utils/showToast';

const failed404 = () => {
    showToast('เกิดข้อผิดพลาด', 'ไม่พบข้อมูลนี้ในฐานข้อมูล', 'danger');
};

export default failed404;
