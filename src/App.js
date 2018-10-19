import React, { Component } from 'react';
import './App.css';
import ExampleGraph from './components/ExampleGraph'
import PaperCanvas from './components/PaperCanvas'
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <PaperCanvas>
          <ExampleGraph/>
        </PaperCanvas>
      </div>
    );
  }
}

export default App;
