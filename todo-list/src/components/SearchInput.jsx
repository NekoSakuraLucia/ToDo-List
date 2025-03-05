const SearchInput = ({ ToDoSearch, setToDoSearch }) => {
    return (
        <input
            type="text"
            placeholder="search todos"
            value={ToDoSearch}
            onChange={(e) => setToDoSearch(e.target.value)}
            className="text-left py-2 px-3 max-w-[450px] rounded w-full bg-purple-400/20 hover:outline hover:outline-purple-400 transition-all duration-[250ms] font-bold focus:outline-none text-white"
        />
    );
};

export default SearchInput;
