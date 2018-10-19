import React, { Component } from 'react';
import './App.css';
import ExampleGraph from './components/ExampleGraph'
import PaperCanvas from './components/PaperCanvas'
import Header from './components/Header';

const data = {
  nodes: [
    { id: 'TestMission1', symbolType : "square", color: "#ff0000"}, 
    { id: 'TestMission2', symbolType : "square", color: "#ff0000"}, 
    { id: 'ScenarioRunner1', symbolType : "triangle", color: "#00ff00"}, 
    { id: 'TestMission3', symbolType : "square", color: "#ff0000"}, 
    { id: 'TM1Scenario1',color: "#0000ff"}, 
    { id: 'TM1Scenario2',color: "#0000ff"}, 
    { id: 'TM1Scenario3',color: "#0000ff"}, 
    { id: 'TM2Scenario1',color: "#0000ff"}, 
    { id: 'TM2Scenario2',color: "#0000ff"}, 
    { id: 'TM2Scenario3',color: "#0000ff"}, 
    { id: 'TM3Scenario1',color: "#0000ff"}, 
    { id: 'TM3Scenario2',color: "#0000ff"}, 
    { id: 'TM3Scenario3',color: "#0000ff"}, 
    
  ],
  links: [
    { source: 'ScenarioRunner1', target: 'TestMission1' },
    { source: 'ScenarioRunner1', target: 'TestMission2' },
    { source: 'ScenarioRunner1', target: 'TestMission3' },
    { source: 'TestMission1', target: 'TM1Scenario1' },
    { source: 'TestMission1', target: 'TM1Scenario2' },
    { source: 'TestMission1', target: 'TM1Scenario3' },
    { source: 'TestMission2', target: 'TM2Scenario1' },
    { source: 'TestMission2', target: 'TM2Scenario2' },
    { source: 'TestMission2', target: 'TM2Scenario3' },
    { source: 'TestMission3', target: 'TM3Scenario1' },
    { source: 'TestMission3', target: 'TM3Scenario2' },
    { source: 'TestMission3', target: 'TM3Scenario3' },
    
  ]
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
