import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoPage.css';

export class TodoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoText: ''
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
        this.onClickClear = this.onClickDone.bind(this);
    }

    onTextChange(e) {
        this.setState({ todoText: e.target.value });
    }

    onClickAdd() {
        if (!this.state.todoText) {
            return;
        }

        this.props.addTodo(this.state.todoText);
        this.setState({ todoText: '' });
    }

    onClickDone(index) {
        this.props.removeTodo(index);
    }

    render() {
        return (
            <div className="todo-page">
                <h2>{this.props.t('todo:todo_list')}</h2>
                <TodoForm
                    t={this.props.t}
                    todoText={this.state.todoText}
                    onTextChange={this.onTextChange}
                    onClickAdd={this.onClickAdd} />
                <TodoList
                    t={this.props.t}
                    todos={this.props.todos}
                    onClickClear={this.props.clearAll}
                    onClickDone={this.onClickDone} />
            </div>
        );
    };
}

TodoPage.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    addTodo: React.PropTypes.func.isRequired,
    removeTodo: React.PropTypes.func.isRequired,
    clearAll: React.PropTypes.func.isRequired,
};

export default TodoPage;
