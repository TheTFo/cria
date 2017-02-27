import React from 'react';
import Icon from '../../common/Icon';
import './TodoListItem.css';

export default function TodoListItem({index, text, onDone, t}) {
    return (
        <li className={'todo-list-item'}>
            <a className="done" onClick={onDone}><Icon title={t('todo:done')} icon="check" /></a>
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
