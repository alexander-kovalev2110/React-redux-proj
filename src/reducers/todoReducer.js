import * as actions from '../actions/todosActions'

export const initialState = {
    todo: ''
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case actions.ON_CHANGE:
            return {todo: action.value}

        case actions.ADD_TODO:
            return {todo: ''}

        default:
            return state
    }
}
