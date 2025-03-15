import { showToast } from '@/utils/showToast';

const failedResponse = () => {
    showToast('เกิดข้อผิดพลาด', 'ไม่สามารถแก้ไขข้อมูลได้', 'danger');
};

export default failedResponse;
