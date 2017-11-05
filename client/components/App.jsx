import React from 'react';
import Game from './Game.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Welcome to TIC TAC TOE!</h1>
		<Game />
      </div>);
  }
}
