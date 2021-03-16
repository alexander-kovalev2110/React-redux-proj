import React, { Component } from 'react'
import {connect} from "react-redux"
import * as actions from '../actions/todosActions'
import store from '../index'

export const Form = (props) => {
    return (
        <form>
            <label htmlFor="name">Todo name</label>
            <input type="text" value={props.todo}
                   onChange={(event) => store.dispatch(actions.onChange(event.target.value))} />
            <input type="button" value="Submit"
                   onClick={() => store.dispatch(actions.addTodo(props))} />
        </form>
    )
}

export default connect(state => ({todo: state.reducer2.todo}))(Form)