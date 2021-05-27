import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const Guest = props => {
    return (
        <li>
            <GuestName 
                isEditting={props.isEditting}
                handleNameEdits={e => props.setName(e.target.value)}>
                {props.name}
            </GuestName>
            
            <label>
                <input  type="checkbox" 
                        checked={props.isConfirmed}
                        onChange={props.handleConfirmation} /> Confirmed
            </label>
            <button onClick={props.handleToggleEditting}>{props.isEditting ? 'save' : 'edit'}</button>
            <button onClick={props.handleRemove}>remove</button>
        </li>        
    );
}

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditting: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleToggleEditting: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
}

export default Guest;