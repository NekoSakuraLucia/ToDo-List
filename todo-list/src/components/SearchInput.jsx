import { Input } from '@/components/ui/input';

const SearchInput = ({ ToDoSearch, setToDoSearch }) => {
    return (
        <Input
            type="text"
            placeholder="search todos"
            value={ToDoSearch}
            onChange={(e) => setToDoSearch(e.target.value)}
            className="max-w-[450px] mx-auto w-full py-5 px-3"
        />
    );
};

export default SearchInput;
