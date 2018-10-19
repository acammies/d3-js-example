import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class PaperCanvas extends Component {


    render() {
        return (
            <div className="paperCanvas">
                <Paper>
                    {this.props.children}
                </Paper>
            </div>
        );
    }
}

export default PaperCanvas;
