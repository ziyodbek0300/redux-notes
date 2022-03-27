import { useDispatch } from "react-redux"
import { removeTodo, markTodo } from "../actions/todos";

const TodoItem = ({ text, id, isDone }) => {
    const dispatch = useDispatch();

    const handleMarkTodo = (e) => {
        dispatch(markTodo({
            id,
            text,
            isDone: e.target.checked
        }))
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input onChange={handleMarkTodo} type="checkbox" className="form-check-input me-2" value="" id="flexCheckDefault" />
                <label className={`form-check-label ${isDone ? 'text-decoration-line-through' : ''}`} htmlFor="flexCheckDefault">
                    {text}
                </label>
            </div>
            <button className="btn btn-danger" onClick={() => dispatch(removeTodo(id))}>Remove</button>
        </li>
    )
}

export default TodoItem