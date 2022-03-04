import React, { useState } from 'react';

const UseTodo = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

    const removeTodo = (index) => {
        const newArr = [...todos];
        newArr.splice(index, 1);
        setTodos(newArr);
    }

    const updTodo = (index, newTodo) => {
        console.log(newTodo, 'newTodo');
        const newArr = [...todos];
        // newArr[index] = newTodo;
        newArr[index] = { ...newArr[index], isCompleted: newTodo };
        setTodos(newArr);
    }

    return { todos, addTodo, removeTodo, updTodo }
}

export default UseTodo;

