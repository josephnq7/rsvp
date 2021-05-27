import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = props => {
    return (
        <div className="main">
            <ConfirmedFilter 
                toggleFilter={props.toggleFilter}
                isFiltered={props.isFiltered}
            />

            <Counter totalInvited={props.totalInvited}
                numberAttending={props.numberAttending}
                numberUnconfirmed={props.numberUnconfirmed} />
            <GuestList guests={props.guests}
                toggleConfirmationAt={props.toggleConfirmationAt}
                toggleEdittingAt={props.toggleEdittingAt}
                setNameAt={props.setNameAt}
                isFiltered={props.isFiltered}
                removeGuestAt={props.removeGuestAt}
                pendingGuest={props.pendingGuest} />
        </div>
    );
}

MainContent.propTypes = {
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    setNameAt: PropTypes.func.isRequired,
    toggleEdittingAt: PropTypes.func.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    guests: PropTypes.array.isRequired,
    numberUnconfirmed: PropTypes.number,
    numberAttending: PropTypes.number,
    totalInvited: PropTypes.number,
    toggleFilter: PropTypes.func.isRequired,
};

export default MainContent;