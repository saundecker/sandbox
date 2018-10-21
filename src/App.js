import React, { Component } from 'react';
import ContactList from './components/ContactList'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    let contactList = [ { id: 111, displayName: "Ashish" }, { id: 222, displayName: "Saundekar" }];
    return (
      <div className="App">
        <ContactList contacts={contactList}/>
      </div>
    );
  }
}

export default App;
