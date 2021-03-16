import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/todosActions'
import store from '../index'

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Todo</th>
            <th>Remove</th>
        </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.todos.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.todo}</td>
                <td>
                    <button onClick={() => store.dispatch(actions.removeTodo(index))}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

export const Table = (props) => {
    return (
        <table>
            <TableHeader />
            <TableBody todos={props.todos}/>
        </table>
    )
}

export default connect(state => ({todos: state.reducer1.todos}))(Table)
