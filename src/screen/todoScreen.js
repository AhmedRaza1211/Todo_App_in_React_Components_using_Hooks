import React, { useState } from 'react';
import UseTodo from '../hook/useTodo';
import InputCom from '../component/input';
import ButtonCom from '../component/button';
import List from '../component/list';

const TodoScreen = () => {

    const [todoVal, setTodoVal] = useState([]);
    const { todos, addTodo, removeTodo, updTodo } = UseTodo();
    const markAsCompleted = (ind) => {
        const oldTodo = todos[ind];
        updTodo(ind, !oldTodo.isCompleted)
    }

    return (
        <div>
            <InputCom inpVal={todoVal} plHdl='Add Todo' tp='text' onChg={(val) => setTodoVal(val)}/>
            <ButtonCom
                stl={{ backgroundColor: 'white' }}
                btnTxt='Add Todo'
                btnFunc={() => {
                    addTodo({text: todoVal, isCompleted: false});
                    setTodoVal('');
                 }} />
            <List todoArr={todos} removeTodo={removeTodo} updTodo={markAsCompleted} />
        </div>
    )
}

export default TodoScreen;

