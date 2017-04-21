import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';
import './TodoList.css';

export class TodoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <button onClick={this.props.onClickClear}>{this.props.t('todo:clear_all')}</button>
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
    todos: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickClear: PropTypes.func.isRequired
};

export default TodoList;
