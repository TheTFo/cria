import React from 'react';
import './TodoForm.css';

export const TodoForm = ({ todoText, onTextChange, onClickAdd, t }) => {
    return (
        <div className="todo-form">
            <input type="text" value={todoText} onChange={onTextChange} />
            <button onClick={onClickAdd}>{t('todo:add_todo')}</button>
        </div>
    );
};

TodoForm.propTypes = {
    todoText: React.PropTypes.string.isRequired,
    onTextChange: React.PropTypes.func.isRequired,
    onClickAdd: React.PropTypes.func.isRequired
};

export default TodoForm;
