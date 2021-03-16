export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const ON_CHANGE = 'ON_CHANGE'


export const addTodo = todo => ({
    type: ADD_TODO,
    todo: todo
})

export const removeTodo = index => ({
    type: REMOVE_TODO,
    index: index
})

export const onChange = value => ({
    type: ON_CHANGE,
    value: value
})