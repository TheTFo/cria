import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

export default function Icon({icon, ...props}) {
    const svg = require(`./assets/${icon}.svg.js`);
    const className = 'icon' + (props.className ? ` ${props.className}` : '');
    return (
        <span {...props} className={className} dangerouslySetInnerHTML={{ __html: svg }} />
    );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
}
