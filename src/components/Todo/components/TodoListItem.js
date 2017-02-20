import React from 'react';
import Icon from '../../common/Icon';
import './TodoListItem.css';

//  Inspirec by Arc: https://github.com/diegohaz/arc/blob/master/src/components/atoms/Icon/index.js
export const fontSize = ({ height }) => height ? `${height / 16}rem` : '1.25em'

export const TodoListItem = ({index, text, onDone, t}) => {
    return (
        <li className={'todo-list-item'}>
            <a className="done" onClick={onDone}><Icon title={t('done')} icon="check" /></a>
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