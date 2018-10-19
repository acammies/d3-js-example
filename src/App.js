import React, { Component } from 'react';
import './App.css';
import ExampleGraph from './components/ExampleGraph'
import PaperCanvas from './components/PaperCanvas'
import Header from './components/Header';

const data = {
  nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }, { id: 'Aidan' }, { id: 'Ollie' }, { id: 'Hannah' },],
  links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
};

const debug = true;
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <PaperCanvas>
          <ExampleGraph data={data} debug={debug} />
        </PaperCanvas>
      </div>
    );
  }
}

export default App;
