import { useReducer } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import { useDisclosure } from '@heroui/react';

import TodosModal from './TodosModal';
import { showToast } from '../utils/showToast';

import {
    failed404,
    failedResponse,
    editSuccess,
    warnEdit,
} from '../utils/todos/todosList';

const ACTION = Object.freeze({
    SET_TODO_EDIT: 'set-todo-edit',
    REST_TODO_EDIT: 'reset-todo-edit',
});

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.SET_TODO_EDIT:
            return {
                ...state,
                _id: action.payload._id,
                title: action.payload.title,
            };
        case ACTION.REST_TODO_EDIT:
            return {
                ...state,
                _id: '',
                title: '',
            };
        default:
            return state;
    }
};

const initialToDoEditState = {
    _id: '',
    title: '',
};

const TodosList = ({ ToDoList }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [ToDoEdit, dispatch] = useReducer(reducer, initialToDoEditState);
    // const [ToDoEdit, setToDoEdit] = useState({ _id: '', title: '' });

    const handleEdit = async () => {
        try {
            if (!ToDoEdit.title || !ToDoEdit._id) return warnEdit();

            try {
                const response = await axios.put(`/api/todos/${ToDoEdit._id}`, {
                    title: ToDoEdit.title,
                });

                if (!response.data) return failedResponse();

                if (response.status === 404) return failed404();

                // setToDoEdit({ _id: '', title: '' });
                dispatch({ type: ACTION.REST_TODO_EDIT });
                editSuccess();
            } catch (error) {
                showToast(
                    'เกิดข้อผิดพลาด',
                    error.response.data.message,
                    'danger'
                );
            }
        } catch (error) {
            showToast('เกิดข้อผิดพลาด', error.message, 'danger');
        }
    };

    const handleOpenModal = (todo) => {
        // setToDoEdit({ _id: todo._id, title: todo.title })
        dispatch({ type: ACTION.SET_TODO_EDIT, payload: todo });
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
                handleEdit={handleEdit}
                dispatch={dispatch}
                ACTION={ACTION}
            />
        </>
    );
};

export default TodosList;
