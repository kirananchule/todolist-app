import React, { Component } from 'react';
import TodoList from './TodoList'
import Search from './Search'
import FilterButtons from './FilterButtons'
import './Style.css'
import AddTodo from './AddTodo';
class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            filter: 'All'
        };
        this.todoCounter = 1;
        this.addTodoToList = this.addTodoToList.bind(this);
        this.onTodoChange = this.onTodoChange.bind(this);
        this.filterClicked = this.filterClicked.bind(this)
    }

    addTodoToList(value) {
        let newtodo = {
            id: this.todoCounter,
            text: value,
            complete: false
        }
        this.setState({
            todos: [...this.state.todos, newtodo]

        })

        this.todoCounter++;
    }


    onTodoChange(id) {
        const newTodos = this.state.todos.map((item, i) => {
            if (item.id == id) {
                item.complete = !item.complete;
            }
            return item;
        })
        this.setState({
            todos: newTodos
        })
    }


    filterClicked(newFilter) {
        console.log('filter clicked: ', newFilter);
        this.setState({
            filter: newFilter
        })
    }

    render() {
        return (
            <div style={{ display: 'block', maxWidth: '600px', textAlign: 'left', margin: '20px auto' }}>
                <AddTodo onAddTodo={this.addTodoToList}></AddTodo>
                <TodoList todos={this.state.todos} todoChange={this.onTodoChange} filter={this.state.filter}></TodoList>
                <FilterButtons filterClicked={this.filterClicked}></FilterButtons>

            </div>
        );
    }
}

export default Todos;