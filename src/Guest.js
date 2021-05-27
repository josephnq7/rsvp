import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const Guest = props => {
    return (
        <li>
            <GuestName isEditting={props.isEditting}>
                {props.name}
            </GuestName>
            
            <label>
                <input  type="checkbox" 
                        checked={props.isConfirmed}
                        onChange={props.handleConfirmation} /> Confirmed
            </label>
            <button onClick={props.handleToggleEditting}>edit</button>
            <button>remove</button>
        </li>        
    );
}

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditting: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleToggleEditting: PropTypes.func.isRequired
}

export default Guest;