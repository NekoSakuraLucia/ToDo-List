import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TodosAdd = ({ handleSubmit, ToDoInput, setToDoInput }) => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <h1 className="text-2xl tracking-wide font-bold">
                Add a new todo...
            </h1>
            <div className="mt-2">
                <Input
                    type="text"
                    onChange={(e) =>
                        setToDoInput({ ...ToDoInput, title: e.target.value })
                    }
                    value={ToDoInput.title}
                    placeholder="Title"
                    className="w-full max-w-[365px] mx-auto py-5 px-3"
                />
            </div>
            <div className="mt-8">
                <Button
                    className="w-full max-w-[130px] py-5"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default TodosAdd;
