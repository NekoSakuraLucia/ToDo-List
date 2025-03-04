const TodosAdd = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <h1 className="text-2xl tracking-wide font-bold">
                Add a new todo...
            </h1>
            <div className="mt-2">
                <input
                    type="text"
                    className="bg-purple-400/20 hover:outline hover:outline-1 hover:outline-purple-400 transition-all duration-[250ms] rounded py-2 px-3 w-full max-w-[365px]"
                />
            </div>
            <div className="mt-8">
                <button className="bg-white hover:bg-gray-200 transition-colors py-2 px-5 rounded text-black font-bold text-lg">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default TodosAdd;
