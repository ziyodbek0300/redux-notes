import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeTodos } from "./actions/todos";
import TodoItems from "./components/todo-items";
import TodosFooter from "./components/todos-footer";
import TodosForm from "./components/todos-form";
import TodosHeader from "./components/todos-header";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('items'))
    dispatch(initializeTodos(todos));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <TodosHeader length={todos.length} />
            <TodosForm />
            <TodoItems />
            <TodosFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
