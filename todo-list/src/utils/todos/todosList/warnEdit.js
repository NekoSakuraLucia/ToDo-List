import { showToast } from '@/utils/showToast';

const warnEdit = () => {
    showToast(
        'เกิดข้อผิดพลาด',
        'กรุณากรอกข้อมูลหัวข้อก่อน หรือ ไม่พบข้อมูลที่ตรงกับการแก้ไข',
        'warning'
    );
};

export default warnEdit;
