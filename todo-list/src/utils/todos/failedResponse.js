import { showToast } from '../showToast';

const failedResponse = () => {
    showToast('เกิดข้อผิดพลาด', 'ไม่สามารถแก้ไขข้อมูลได้', 'danger');
};

export default failedResponse;
