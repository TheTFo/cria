import React from 'react';
import './Icon.css';

export const fontSize = ({ height }) => height ? `${height / 16}rem` : '1.0em'

export const Icon = ({icon, ...props}) => {
    const iconStyle = Object.assign({}, props.style, {
        fontSize: `${fontSize}`
    });
    const svg = require(`./assets/${icon}.svg.js`);
    const className = 'icon' + (props.className ? ` ${props.className}` : '');
    return (
        <span {...props} className={className} style={iconStyle} dangerouslySetInnerHTML={{ __html: svg }} />
    );
};

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
}

export default Icon;