import React from 'react';
import './Icon.css';

export const Icon = ({icon, ...props}) => {
    const svg = require(`./assets/${icon}.svg.js`);
    const className = 'icon' + (props.className ? ` ${props.className}` : '');
    return (
        <span {...props} className={className} dangerouslySetInnerHTML={{ __html: svg }} />
    );
};

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
}

export default Icon;