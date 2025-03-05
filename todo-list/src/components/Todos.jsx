import axios from 'axios';
import { useState, useEffect } from 'react';

import SearchInput from './SearchInput';
import TodosAdd from './TodosAdd';
import TodosList from './TodosList';

const Todos = () => {
    const [ToDoData, setToDoData] = useState([]);
    const [ToDoSearch, setToDoSearch] = useState('');
    const [ToDoAdd, setToDoAdd] = useState({ title: '' });
    const [error, setError] = useState('');
    const [filteredToDos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/todos');
                if (!response.data) return setError('ไม่พบข้อมูล');

                setToDoData(response.data);
                console.log('log');
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setFilteredTodos(
            ToDoData.filter((todo) => {
                return todo.title
                    .toLowerCase()
                    .includes(ToDoSearch.toLowerCase());
            })
        );
    }, [ToDoSearch, ToDoData]);

    const handleSubmit = async () => {
        if (!ToDoAdd.title) return setError('กรุณากรอกข้อมูลให้ครบถ้วน');

        try {
            const response = await axios.post('/api/todos', {
                title: ToDoAdd.title,
            });

            if (!response.data) return setError('ไม่สามารถเพิ่มข้อมูลได้');
            setToDoAdd({ title: '' });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center text-white">
                <div className="absolute top-[80px] w-full text-center">
                    <h1 className="text-5xl tracking-wider font-bold">
                        ToDo List
                    </h1>
                    <h3 className="mt-4">{error}</h3>
                    <div className="mt-8">
                        <SearchInput
                            ToDoSearch={ToDoSearch}
                            setToDoSearch={setToDoSearch}
                        />
                    </div>
                    <div className="mt-8 space-y-3">
                        <TodosList ToDoList={filteredToDos} />
                    </div>
                    <div className="mt-8">
                        <TodosAdd
                            handleSubmit={handleSubmit}
                            ToDoInput={ToDoAdd}
                            setToDoInput={setToDoAdd}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todos;
