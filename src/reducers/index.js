import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    reducer1: todosReducer,
    reducer2: todoReducer
})

export default rootReducer
