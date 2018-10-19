import React, { Component } from 'react';
import { Graph } from 'react-d3-graph';
// import './App.css';

// graph payload (with minimalist structure), now imported from other
// const data = {
//     nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
//     links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
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
            debugConsole: ``
        })
    }

    onClickNode(nodeId) {
        // this.setState({
        //     debugConsole: "clicked"
        //     // debugConsole: (`Clicked node ${nodeId}`)
        // })
        console.log(`Clicked node ${nodeId}`);
    };

    onMouseOverNode(nodeId) {
        console.log(`Mouse over node ${nodeId}`);
    };

    onMouseOutNode(nodeId) {
        console.log(`Mouse out node ${nodeId}`);
    };

    onClickLink(source, target) {
        console.log(`Clicked link between ${source} and ${target}`);
    };

    onMouseOverLink(source, target) {
        console.log(`Mouse over in link between ${source} and ${target}`);
    };

    onMouseOutLink(source, target) {
        console.log(`Mouse out link between ${source} and ${target}`);
    };



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
                {this.props.debug && <textarea name="name" />}
            </div>
        );
    }
}

export default ExampleGraph;
