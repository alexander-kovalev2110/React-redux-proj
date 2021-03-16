
import * as actions from '../actions/todosActions'

const todolist = [{"todo": "Wake up"}, {"todo": "Have breakfast"}, {"todo": "Go to work"}, {"todo": "And so on"}]

export const initialState = {
    todos: todolist
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_TODO:
            return {todos: [...state.todos, action.todo]}

        case actions.REMOVE_TODO:
            return {todos: state.todos.filter((todo, i) => {return i !== action.index})}

        default:
            return state
    }
}
