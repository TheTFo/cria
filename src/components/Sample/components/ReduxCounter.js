import React from 'react';

export default class ReduxCounter extends React.Component {
    constructor(props) {
        super(props);

        this.setCounter = this.setCounter.bind(this);        
    }

    setCounter() {
        this.props.setReduxCounter(this.props.reduxCounter + 1);
    }

    render() {
        return (
            <div>
                <h2>Redux Counter</h2>
                <button onClick={this.setCounter}>Increment Redux Counter</button>
                <h3>{this.props.reduxCounter}</h3>
            </div>
        );
    }
}