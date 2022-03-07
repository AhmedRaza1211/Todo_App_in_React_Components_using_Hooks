import TodoHook from "../hook/todoHook";
import Input from "../component/input";
import Button from "../component/button";
import List from "../component/list";

const TodoScreen = () => {

    const { todos, inputValue, onInputChange, addTodo, markAsCompleted } = TodoHook();
    return (
        <div>
            <Input value={inputValue} onInputChange={onInputChange} />
            <Button addTodo={() => addTodo({ todo: inputValue, isCompleted: false })} />
            <List todos={todos} markAsCompleted={markAsCompleted} />
        </div>
    )
}

export default TodoScreen;