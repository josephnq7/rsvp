import React from 'react';
import PropTypes from 'prop-types';

const GuestName = props => {
    if (props.isEditting) {
        return (
            <input 
                type="text" 
                value={props.children} />
        );
    }
    return (
        <span>
            {props.children}
        </span>
    );
}

GuestName.propTypes = {
    isEditting: PropTypes.bool.isRequired,
}

export default GuestName;