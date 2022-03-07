import { useState } from "react";

const TodoHook = () => {

    // Todos State
    const [todos, setTodos] = useState([]);

    // Input Value State
    const [inputValue, setInputValue] = useState('');

    // onChange Function
    const onInputChange = (e) => setInputValue(e.target.value);


    // <Button addTodo={() => addTodo({ todo: inputValue, isCompleted: false })} />

    // Add Todo Function
    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
        setInputValue('');
    }

    // Mark as Completed
    const markAsCompleted = (i) => {
        const todoArr = [...todos];
        todoArr[i] = { ...todoArr[i], isCompleted: !todoArr[i].isCompleted };
        setTodos(todoArr);
        console.log(todoArr[i]);

    }


    // Show Todo
    // const showTodo = todos.map((v, i) => {
    //     return (
    //         <li
    //             key={i}
                // style={{
                //     textDecoration: v.isCompleted ? 'line-through' : 'none'
                // }}
    //         >
    //             <span onClick={() => markAsCompleted(i)}> {v.todo} </span>
    //         </li>
    //     )
    // })


    return { todos, inputValue, onInputChange, addTodo, markAsCompleted }
}

export default TodoHook;