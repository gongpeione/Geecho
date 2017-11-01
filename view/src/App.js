import React, { Component } from 'react';
import logo from './img/logo.svg';
import './style/index.scss';

import Card from './components/Card';

import bloginfo from './bloginfo.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="blog-header">
          <img src={logo} className="blog-logo" alt="logo" />
          <h1 className="blog-title">{bloginfo.name}</h1>
        </header>
        <main>
          Main
          <Card></Card>
        </main>
        <aside>
          Aside
        </aside>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
