import React from 'react';

export class Banner extends React.Component {
    render() {
        return <h1 style={this.props.style}>{this.props.bannerText}</h1>;
    }
}

export class MyButton extends React.Component {
    render() {
        return <a style={this.props.style} onClick={this.props.onClick}>{this.props.buttonText}</a>;
    }
}

//  Sample of a higher order component
function makeYellowBackground(WrappedComponent) {
    return class Nameless extends React.Component {
        render() {
            let newStyle ={};
            /*if (this.props.style) {
                newStyle = this.props.style;
            } else {
                newStyle = {};
            }*/

            //  Equivalent to background-color CSS property
            //  Style properties match CSS properties, except 
            //  dashes are removed and camel cased.
            newStyle.backgroundColor = 'yellow';

            //  Here we are "spreading" props.  So if this.props = { a: 'thing1', b: 'thing2' },
            //  we are literally saying: <WrappedComponent a="thing1" b="thing2" style={newStyle} />
            //  Important note: Props can be overridden, so id this.props = { a: 'thing1', b: 'thing2', style: someObject }
            //  That is evaluated to <WrappedComponent a="thing1" b="thing2" style={someObject} style={newStyle} />
            //  In this case, the last value for style wins, so style={someObject} is ignored.
            //  See why the spread operator rocks?
            return <WrappedComponent {...this.props} style={newStyle} />;
        }
    };
}

export const BlueButton = makeYellowBackground(MyButton);
export const BlueBanner = makeYellowBackground(Banner);