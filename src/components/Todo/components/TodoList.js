import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

export class TodoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <button onClick={this.props.onClickClear}>{this.props.t('clear_all')}</button>
                <ul>
                    {
                        this.props.todos.map((todo, i) =>
                            <TodoListItem
                                key={i}
                                t={this.props.t}
                                index={i + 1}
                                text={todo}
                                onDone={() => this.props.onClickDone(i)} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    onClickDone: React.PropTypes.func.isRequired,
    onClickClear: React.PropTypes.func.isRequired
};

export default TodoList;
