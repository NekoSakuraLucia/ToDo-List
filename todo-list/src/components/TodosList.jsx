import { FaTrash } from 'react-icons/fa';
import TodosModal from './TodosModal';
import { useDisclosure } from '@heroui/react';
import { useState } from 'react';
import axios from 'axios';

const TodosList = ({ ToDoList }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [ToDoEdit, setToDoEdit] = useState({ _id: '', title: '' });

    const handleEdit = async () => {
        try {
            if (!ToDoEdit.title) return alert('กรุณากรอกข้อมูลหัวข้อก่อน');
            if (!ToDoEdit._id) return alert('ไม่พบข้อมูลที่ตรงกับการแก้ไข');

            try {
                const response = await axios.put(`/api/todos/${ToDoEdit._id}`, {
                    title: ToDoEdit.title,
                });

                if (!response.data) return alert('ไม่สามารถแก้ไขข้อมูลได้');
                if (response.status === 404)
                    return alert('ไม่พบข้อมูลนี้ในฐานข้อมูล');

                setToDoEdit({ _id: '', title: '' });
            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleOpenModal = (todo) => {
        setToDoEdit({ _id: todo._id, title: todo.title });
        onOpen();
    };

    return (
        <>
            {ToDoList.map((todo, index) => (
                <div
                    onClick={() => handleOpenModal(todo)}
                    key={index}
                    className="relative bg-purple-400/20 py-4 text-left px-4 max-w-[550px] mx-auto font-semibold rounded-md cursor-pointer"
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <span>{todo.title}</span>
                        </div>
                        <button className="text-red-500 hover:text-red-700">
                            <FaTrash />
                        </button>
                    </div>
                </div>
            ))}

            <TodosModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                ToDoEdit={ToDoEdit}
                setToDoEdit={setToDoEdit}
                handleEdit={handleEdit}
            />
        </>
    );
};

export default TodosList;
