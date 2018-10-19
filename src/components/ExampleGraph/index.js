import React, { Component } from 'react';
import { Graph } from 'react-d3-graph';
// import './App.css';

// graph payload (with minimalist structure), now imported from other
// const data = {
//     nodes: [{ id: 'Aisling' }, { id: 'Jack' }, { id: 'Rebecca' }, { id: 'Sean' }, { id: 'Aidan', symbolType: "square", color: "#ff0000" }, { id: 'Ollie' }, { id: 'Oli' }, { id: 'Hannah' }, { id: 'Annie' }, { id: 'Livi' },],
//     links: [{ source: 'Aidan', target: 'Annie' }, { source: 'Ollie', target: 'Annie' }, { source: 'Livi', target: 'Annie' }, { source: 'Aidan', target: 'Livi' }, { source: 'Ollie', target: 'Livi' }, { source: 'Ollie', target: 'Aidan' }, { source: 'Ollie', target: 'Hannah' }, { source: 'Oli', target: 'Hannah' }, { source: 'Hannah', target: 'Aidan' }, { source: 'Aisling', target: 'Aidan' }, { source: 'Jack', target: 'Aidan' }, { source: 'Rebecca', target: 'Aidan' }, { source: 'Sean', target: 'Aidan' }, { source: 'Aisling', target: 'Jack' }, { source: 'Rebecca', target: 'Jack' }, { source: 'Sean', target: 'Jack' }, { source: 'Aisling', target: 'Rebecca' }, { source: 'Aisling', target: 'Sean' }, { source: 'Jack', target: 'Rebecca' }, { source: 'Sean', target: 'Rebecca' },]
// };

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
    nodeHighlightBehavior: true,
    node: {
        color: 'lightgreen',
        size: 120,
        highlightStrokeColor: 'blue'
    },
    link: {
        highlightColor: 'lightblue'
    }
};

// graph event callbacks
// const onClickNode = function (nodeId) {
//     // this.setState({
//     //     debugConsole: (`Clicked node ${nodeId}`)
//     // })
//     console.log(`Clicked node ${nodeId}`);
// };


// const data = {
//     nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
//     links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
// };
class ExampleGraph extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            debug: props.debug,
            debugConsole: `Debug Console:`
        })
    }


    onClickNode = (nodeId) => {
        const valueToPrint = `Clicked node ${nodeId}`
        this.setState((state, props) => ({
            debugConsole: state.debugConsole + "\n" + valueToPrint
        }))
        console.log(valueToPrint);
    };

    onMouseOutLink = (source, target) => {
        const valueToPrint = `Mouse out link between ${source} and ${target}`
        this.setState((state, props) => ({
            debugConsole: state.debugConsole + "\n" + valueToPrint
        }))
        console.log(valueToPrint);
    };

    onMouseOverNode = (nodeId) => {
        const valueToPrint = `Mouse over node ${nodeId}`
        this.setState((state, props) => ({
            debugConsole: state.debugConsole + "\n" + valueToPrint
        }))
        console.log(valueToPrint);
    };

    onMouseOutNode = (nodeId) => {
        const valueToPrint = `Mouse out node ${nodeId}`
        this.setState((state, props) => ({
            debugConsole: state.debugConsole + "\n" + valueToPrint
        }))
        console.log(valueToPrint);
    };

    onClickLink = (source, target) => {
        const valueToPrint = `Clicked link between ${source} and ${target}`
        this.setState((state, props) => ({
            debugConsole: state.debugConsole + "\n" + valueToPrint
        }))
        console.log(valueToPrint);
    };

    onMouseOverLink = (source, target) => {
        const valueToPrint = `Mouse over in link between ${source} and ${target}`
        this.setState((state, props) => ({
            debugConsole: state.debugConsole + "\n" + valueToPrint
        }))
        console.log(valueToPrint);
    };

    handleInputChange = (event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="graphName">
                <Graph
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                    config={myConfig}
                    data={this.props.data}
                    onClickNode={this.onClickNode}
                    onClickLink={this.onClickLink}
                    onMouseOverNode={this.onMouseOverNode}
                    onMouseOutNode={this.onMouseOutNode}
                    onMouseOverLink={this.onMouseOverLink}
                    onMouseOutLink={this.onMouseOutLink}
                />
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.debug}
                    onChange={this.handleInputChange} />
                {this.state.debug && <textarea
                    value={this.state.debugConsole}
                    cols="80"
                    rows="10"
                />}

            </div>
        );
    }
}

export default ExampleGraph;
