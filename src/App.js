import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [],
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  toggleGuestPropertyAt = (property, id) => {
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    })
  }

  toggleConfirmationAt = id => this.toggleGuestPropertyAt('isConfirmed', id);

  removeGuestAt = id => {
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });
  };

  toggleEdittingAt = id => this.toggleGuestPropertyAt('isEditting', id);

  setNameAt = (name, id) => {
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === id) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    })
  }

  toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered })

  handleNameInput = e => this.setState({ pendingGuest: e.target.value });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditting: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    })
  }

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => this.state.guests.reduce((total, guest) => {
    return guest.isConfirmed ? total + 1 : total;
  }, 0)


  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
        />

        <MainContent
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}
          isFiltered={this.state.isFiltered}
          setNameAt={this.setNameAt}
          toggleEdittingAt={this.toggleEdittingAt}
          toggleConfirmationAt={this.toggleConfirmationAt}
          guests={this.state.guests}
          numberUnconfirmed={numberUnconfirmed}
          numberAttending={numberAttending}
          totalInvited={totalInvited}
          toggleFilter={this.toggleFilter}
        />

      </div>
    );
  }

}

export default App;
