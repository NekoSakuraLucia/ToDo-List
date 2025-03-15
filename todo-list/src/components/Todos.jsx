import axios, { isAxiosError } from 'axios';
import { useState, useEffect } from 'react';

import SearchInput from '@/components/SearchInput';
import TodosAdd from '@/components/TodosAdd';
import TodosList from '@/components/TodosList';

import { addToast } from '@heroui/react';

const Todos = () => {
    const [ToDoData, setToDoData] = useState([]);
    const [ToDoSearch, setToDoSearch] = useState('');
    const [ToDoAdd, setToDoAdd] = useState({ title: '' });
    const [filteredToDos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/todos');
                if (!response.data)
                    return addToast({
                        title: 'เกิดข้อผิดพลาด',
                        description: 'ไม่พบข้อมูลใดๆ',
                        color: 'danger',
                    });

                setToDoData(response.data);
                console.log('log');
            } catch (error) {
                if (isAxiosError(error)) {
                    if (error.response) {
                        return addToast({
                            title: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์',
                            description:
                                error.response.data.message ||
                                `Server Error ${error.response.status}`,
                            color: 'danger',
                        });
                    } else if (error.request) {
                        return addToast({
                            title: 'เกิดข้อผิดพลาด',
                            description:
                                'Network Error ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',
                            color: 'danger',
                        });
                    }
                } else {
                    return addToast({
                        title: 'เกิดข้อผิดพลาด',
                        description: error.message,
                        color: 'danger',
                    });
                }
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
        if (!ToDoAdd.title)
            return addToast({
                title: 'กรุณากรอกข้อมูล',
                description: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                color: 'danger',
            });

        try {
            const response = await axios.post('/api/todos', {
                title: ToDoAdd.title,
            });

            if (!response.data)
                return addToast({
                    title: 'เกิดข้อผิดพลาด',
                    description: 'ไม่สามารถเพิ่มข้อมูลได้',
                    color: 'danger',
                });
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
