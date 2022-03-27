import { useSelector } from "react-redux"
import TodoItem from "./todo-item"

const TodoItems = () => {
  const todos = useSelector(state => state.todos);

  return (
    <ul className="list-group list-group-flush">
      {todos.length > 0
        ? todos.map(item => <TodoItem 
                                text={item.text} 
                                key={item.id} 
                                id={item.id} 
                                isDone={item.isDone} 
                            />)
        : (<h3 className="text-center text-secondary my-3">Todos not created yet</h3>)}
    </ul>
  )
}

export default TodoItems