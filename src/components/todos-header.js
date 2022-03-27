const TodosHeader = ({ length }) => {
    return (
        <div className="card-header">
            <h1>Todos: {length}</h1>
        </div>
    )
}

export default TodosHeader