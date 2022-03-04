const List = ({ todoArr, removeTodo, updTodo }) => {

    return (
        <div>
            {todoArr.map((todo, ind) => {
                return (
                    <p
                        key={ind}
                        style={{
                            display: 'block',
                            marginLeft: 100,
                            textDecoration: todo.isCompleted ? 'line-through' : 'none'
                        }}
                    >
                        <span style={{ marginRight: 20 }}> {ind + 1} </span>
                        <span style={{ marginRight: 20 }} onClick={() => updTodo(ind)}> {todo.text} </span>
                        <span style={{ marginRight: 20 }} onClick={() => removeTodo(ind)}> X </span>
                    </p>
                )
            })}
        </div>
    )
}

export default List;
