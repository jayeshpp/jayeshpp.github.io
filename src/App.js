import React, { Component } from 'react';
import Aside from './components/layout/aside/Aside';
import PageDetails from './components/layout/main/PageDetails';
import './assets/css/screen.css';

class App extends Component {
  render() {
    return (
      <main>
        <Aside/>
        <PageDetails/>
      </main>
    );
  }
}

export default App;
