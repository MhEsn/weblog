import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const user = {
    firstName: 'Mohamadhosein'
    , lastName: 'Esmailiun'
  };

  function showUser(user) {
    if (user)
      return 'Welcome,' + user.firstName + ' ' + user.lastName + '!';
    else
      return 'Welcome, Stranger!';
  }

  return (
    <div>
      <h4>
        {showUser()}
      </h4>
    </div>
  );
}

export default App;
