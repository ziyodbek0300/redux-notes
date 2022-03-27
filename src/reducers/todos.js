import { TODO } from "../constants/todos";

const initialState = [];
const todos = (state = initialState, action) => {
    switch (action.type) {
        case TODO.ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        case TODO.REMOVE_TODO:
            return state.filter(s => s.id !== action.payload.id)
        case TODO.MARK_TODO_DONE:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        isDone: action.payload.isDone,
                    }
                } else {
                    return item;
                }
            })
        case TODO.INITIALIZE_TODOS:
            return action.payload;
        default:
            return state;
    }
    return state;
}

export default todos;