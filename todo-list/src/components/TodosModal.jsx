import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from '@heroui/react';

const ToDoModal = ({
    isOpen,
    onOpenChange,
    handleEdit,
    ToDoEdit,
    setToDoEdit,
}) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <h1>แก้ไขข้อมูล To-Do</h1>
                            <p className="text-sm font-medium text-neutral-500">
                                คุณสามารถแก้ไขข้อมูล To-Do ได้ที่นี่
                            </p>
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                label="หัวข้อ"
                                placeholder="กรอกหัวข้อของ To-Do"
                                onChange={(e) =>
                                    setToDoEdit({
                                        ...ToDoEdit,
                                        title: e.target.value,
                                    })
                                }
                                value={ToDoEdit.title}
                                type="text"
                                variant="flat"
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                            >
                                ยกเลิก
                            </Button>
                            <Button
                                color="primary"
                                onPress={() => {
                                    onClose();
                                    handleEdit();
                                }}
                            >
                                ยืนยัน
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ToDoModal;
