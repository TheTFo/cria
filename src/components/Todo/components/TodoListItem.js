import React from 'react';
import PropTypes from 'prop-types';
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
    index: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onDone: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
};
