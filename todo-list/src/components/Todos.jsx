import SearchInput from './SearchInput';
import TodosAdd from './TodosAdd';
import TodosList from './TodosList';

const Todos = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center text-white">
            <div className="absolute top-[80px] w-full text-center">
                <h1 className="text-5xl tracking-wider font-bold">ToDo List</h1>
                <div className="mt-8">
                    <SearchInput />
                </div>
                <div className="mt-8 space-y-6">
                    <TodosList />
                </div>
                <div className="mt-8">
                    <TodosAdd />
                </div>
            </div>
        </div>
    );
};

export default Todos;
