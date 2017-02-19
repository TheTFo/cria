import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onLanguageChange = this.onLanguageChange.bind(this);
  }

  onLanguageChange(e) {
    this.context.i18n.changeLanguage(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.t('welcome')}</h2>
          <select onChange={this.onLanguageChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <div className="App-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  i18n: React.PropTypes.object
};

export default App;
