import React from 'react';
import PropTypes from 'prop-types';
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
    todoText: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    onClickAdd: PropTypes.func.isRequired
};

export default TodoForm;
