import React from 'react';

export const Icon = ({icon, ...props}) => {
    const svg = require(`./generated/${icon}.svg.js`);
    return (
        <span {...props} dangerouslySetInnerHTML={{ __html: svg }} />
    );
};


Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
}

export default Icon;