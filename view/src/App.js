import React, { Component } from 'react';
import logo from './img/logo.svg';
import './style/index.scss';

import Aside from './layout/Aside';
import Card from './components/Card';

import bloginfo from './bloginfo.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coverExpended: false,
    };
  }

  appClickHandler (e) {
    const coverState = e.target.dataset.cover;
    if (e.target.dataset.cover) {
      this.setState({
        coverExpended: coverState === 'true' ? true : false
      })
    }
  }

  render() {
    return (
      <div className="App" onClick={this.appClickHandler.bind(this)}>
        <header className="blog-header">
          <img src={logo} className="blog-logo" alt="logo" />
          <h1 className="blog-title">{bloginfo.name}</h1>
        </header>
        <main className="blog-main">
          <Card>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In maiores excepturi quibusdam at, ex et, dicta quo nobis dolores, nihil ut recusandae laudantium. Quod facilis, quo dolorum assumenda facere vel.</p>
          </Card>
        </main>
        <Aside></Aside>
        <footer className="blog-footer">
          Footer
        </footer>

        <div className={`cover ${this.state.coverExpended ? 'expend' : ''}`}></div>
      </div>
    );
  }
}

export default App;
