import React from 'react';
import './TodoListItem.css';

export const TodoListItem = ({index, text, onDone, t}) => {
    return (
        <li className={'todo-list-item'}>
            <a className="done" onClick={onDone}>{t('done')}</a>
            <span>{`${index}) ${text}`}</span>
        </li>
    );
};

TodoListItem.propTypes = {
    index: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    onDone: React.PropTypes.func.isRequired,
    t: React.PropTypes.func.isRequired
};

export default TodoListItem;