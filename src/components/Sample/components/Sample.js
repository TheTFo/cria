import React from 'react';
import { Banner, MyButton, BlueButton, BlueBanner } from './Stuff';
import ReduxCounterContainer from '../containers/ReduxCounterContainer';

export default class Sample extends React.Component {

    constructor(props) {
        super(props);

        //  React supports state.
        //  State changes in a component trigger a component to render
        //  unless shouldComponentUpdate returns false
        //  NOTE: THIS IS NOT REDUX STATE.  This is native to react.
        this.state = {
            counter: 0
        };

        //  We need to bind components to the object.
        //  If we don't do this, events will lose the context
        //  of what 'this' is.  This isn't a trivial topic, but just know
        //  binding in the constructor is good style, and will make
        //  things act as you expect.
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    onClickButton() {
        alert('Alert from onClickButton');
    }

    incrementCounter() {
        //  React state is immutable, you can't just say this.state.counter += 1.
        //  We need to setState to do this.
        //  Remember immutability is to cause efficient rendering
        this.setState({
            counter: this.state.counter + 1
        })
    }

    shouldComponentUpdate() {
        if (this.state.counter < 10) {
            return true;
        }
        return false;
    }

    render() {
        let variableBanner = 'Hi, Globe';
        let variableButton = 'Click Me';

        return (
            <div>
                <div>
                    <h3>Banner Sample:</h3>
                    <Banner bannerText="Hello, World" />
                    <Banner bannerText={variableBanner} />
                </div>
                <div>
                    <h3>Button Sample:</h3>
                    <div>
                        <MyButton onClick={this.onClickButton} buttonText="Click Here!" />
                    </div>
                    <div>
                        <MyButton onClick={() => { alert('Inline Alert') }} buttonText={variableButton} />
                    </div>
                </div>
                <div>
                    <h3>Blue Banner Sample:</h3>
                    <BlueBanner bannerText="Hello, World" />
                    <BlueBanner bannerText={variableBanner} />
                </div>
                <div>
                    <h3>Blue Button Sample:</h3>
                    <div>
                        <BlueButton onClick={this.onClickButton} buttonText="Click Here!" />
                    </div>
                    <div>
                        <BlueButton onClick={() => { alert('Inline Alert') }} buttonText={variableButton} />
                    </div>
                </div>
                <div>
                    <button onClick={this.incrementCounter}>Increment Counter</button>
                    <Banner bannerText={this.state.counter} />
                </div>
                <div>
                    <ReduxCounterContainer />
                </div>
            </div>
        );
    }
}