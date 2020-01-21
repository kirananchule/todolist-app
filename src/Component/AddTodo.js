


import React from 'react'
import { render } from '@testing-library/react';



class AddTodo extends React.Component {

    constructor(props) {
        super(props)
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(e) {
        e.preventDefault();
        //console.log('adding todo', this.refs.todoRef.value);
        this.props.onAddTodo(this.refs.todoRef.value);
        this.refs.todoRef.value = '';
    }

    render() {
        return (
            <form onSubmit={(event) => this.addTodo(event)}>
                <input placeholder="Add Todo" ref="todoRef" />
                <button type="submit">Add Todo</button>
            </form>

        )
    }


}


export default AddTodo;

