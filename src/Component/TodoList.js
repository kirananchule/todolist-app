import React from 'react';
import Todo from './Todo';
class TodoList extends React.Component {
    render(props) {
        console.log('current filter:', this.props.filter)

        let items = this.props.todos.filter((item, i) => {
            if (this.props.filter == 'Completed') {
                return item.complete;
            } else if (this.props.filter == 'Pending') {
                return !item.complete;
            }
            return item;
        })

        return (

            <ul>



                {items.map((todo, i) => {

                    return <Todo todo={todo} key={i} todoChange={() => this.props.todoChange(todo.id)} verifiedChange={this.props.verifiedChange}></Todo>
                })}

            </ul>
        );
    }
}

export default TodoList;