import { TODO } from "../constants/todos";

export const addTodo = (todoItem) => {
    return {
        type: TODO.ADD_TODO,
        payload: {
            ...todoItem
        }
    }
}

export const removeTodo = (id) => {
    return {
        type: TODO.REMOVE_TODO,
        payload: {
            id,
        }
    }
}

export const markTodo = (item) => {
    return {
        type: TODO.MARK_TODO_DONE,
        payload: {
            ...item,
        }
    }
}

export const initializeTodos = (todos) => {
    return {
        type: TODO.INITIALIZE_TODOS,
        payload: todos
    }
}