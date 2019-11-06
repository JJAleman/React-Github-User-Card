import React from 'react';
import Card from './Components/Card';
import './App.css';

class App extends React.Component {
  state = {
    followers: [],
  }

  
  
  render () {
    return (
      <div>
        <Card />
        Hello I'm the app!
      </div>
    )
  }
}

export default App;
