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
            filter: null
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

    handleRemoveTodo = (id) => {
        console.log('item to remove', id);
        
        let stateCopy = this.state.todos.filter((item)=> {
            return item.id !== id
        })
        
        
        
        this.setState({
            todos : stateCopy
        })
    }

    render() {
        return (
            <div style={{ display: 'block', maxWidth: '600px', textAlign: 'left', margin: '20px auto' }}>
                <AddTodo onAddTodo={this.addTodoToList}></AddTodo>
                <TodoList todos={this.state.todos} todoChange={this.onTodoChange} filter={this.state.filter}
                 onRemoveTodo={this.handleRemoveTodo}></TodoList>
                <FilterButtons filterClicked={this.filterClicked} filter={this.state.filter}></FilterButtons>

            </div>
        );
    }
}

export default Todos;