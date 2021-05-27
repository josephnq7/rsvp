import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
        isEditting: false,
      },
      {
        name: 'Joseph',
        isConfirmed: true,
        isEditting: false,
      },
      {
        name: 'Vi N',
        isConfirmed: true,
        isEditting: true,
      },
    ]
  }

  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    })
  }

  toggleConfirmationAt = index => this.toggleGuestPropertyAt('isConfirmed', index);

  removeGuestAt = index => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });
  };

  toggleEdittingAt = index => this.toggleGuestPropertyAt('isEditting', index);

  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
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
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditting: false,
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
