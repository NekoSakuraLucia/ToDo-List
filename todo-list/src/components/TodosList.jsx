import { FaTrash } from 'react-icons/fa';

const TodosList = () => {
    return (
        <div className="relative bg-purple-400/20 py-4 text-left px-4 max-w-[550px] mx-auto font-semibold rounded-md">
            <div className="flex justify-between items-center">
                <div>
                    <input type="checkbox" className="mr-4" />
                    <span>Task 1</span>
                </div>
                <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default TodosList;
