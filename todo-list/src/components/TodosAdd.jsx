const TodosAdd = ({ handleSubmit, ToDoInput, setToDoInput }) => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <h1 className="text-2xl tracking-wide font-bold">
                Add a new todo...
            </h1>
            <div className="mt-2">
                <input
                    type="text"
                    onChange={(e) =>
                        setToDoInput({ ...ToDoInput, title: e.target.value })
                    }
                    value={ToDoInput.title}
                    placeholder="Title"
                    className="bg-purple-400/20 hover:outline hover:outline-purple-400 transition-all duration-[250ms] rounded py-2 px-3 w-full max-w-[365px]"
                />
            </div>
            <div className="mt-8">
                <button
                    onClick={handleSubmit}
                    className="bg-white hover:bg-gray-200 transition-colors py-2 px-5 rounded text-black font-bold text-lg"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default TodosAdd;
