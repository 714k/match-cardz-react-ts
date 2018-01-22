import * as React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import HeaderApp from '../../components/header/HeaderApp';
import Button from '../../components/button/Button';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderApp />
        <Button />
      </div>
    );
  }
}

export default App;
