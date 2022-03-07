const List = ({todos, markAsCompleted}) => {

    return (
        <ul>
            {
                todos.map((v,i) => {
                    return (
                        <li 
                        key={i}
                        style={{
                            textDecoration: v.isCompleted ? 'line-through': 'none'
                        }}
                        >
                            <span onClick={()=> markAsCompleted(i)} > {v.todo} </span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default List;