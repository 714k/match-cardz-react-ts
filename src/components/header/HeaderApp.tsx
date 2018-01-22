import * as React from 'react';
import './header.css';

class HeaderApp extends React.Component {
  render() {
    return (
        <header className="App-header">
          <p className="menu">
            <i className="fa fa-bars" aria-hidden="true">&nbsp;</i>
          </p>
          <h1 className="App-title">matchCardz</h1>
        </header>
    );
  }
}

export default HeaderApp;
