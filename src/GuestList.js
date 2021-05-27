import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props => {
    return (
        <ul>
            {
                props.guests
                    .filter(guest => !props.isFiltered || guest.isConfirmed)
                    .map((guest, index) =>
                    <Guest  key={index} 
                            name={guest.name} 
                            isConfirmed={guest.isConfirmed}
                            isEditting={guest.isEditting}
                            handleConfirmation={() => props.toggleConfirmationAt(index)}
                            handleToggleEditting={() => props.toggleEdittingAt(index)}
                            setName={text => props.setNameAt(text, index)}
                            handleRemove={() => props.removeGuestAt(index)} />
                )
            }
        </ul>
    );
}

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEdittingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
}

export default GuestList;