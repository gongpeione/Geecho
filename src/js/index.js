import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import Header from './header.js';
import Footer from './footer.js';
import Blog from './blog.js';
import Menu from './menu.js';
import About from './about.js';
import Post from './post.js';

export class MenuBtn extends React.Component {
  render() {
    return (
        <label className="menu-button" htmlFor="menu-slider">
            <div className="button-line"></div>
            <div className="button-line"></div>
            <div className="button-line"></div>
        </label>
    );
  }
}

export class MenuBtnStatus extends React.Component {
  render() {
    return (
        <input type="checkbox" id="menu-slider" name="menu-slider"/>
    );
  }
}

export class SearchBtn extends React.Component {
  render() {
    return (
        <div className="search-button">
            <div className="circle"></div>
            <div className="stick"></div>
        </div>
    );
  }
}

export class Wrap extends React.Component {
  render() {
    return (
      <div id="wrap">

        <MenuBtnStatus />
        <MenuBtn />
        <SearchBtn />
        <Menu />

        <div id="main-container">
            {this.props.children}
            <Footer />
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Wrap/>,
  document.getElementById('app')
);

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Wrap}>
      <IndexRoute component={Blog} />
      <Route path="about" component={About} />
      <Route path="post/:id" component={Post} />
    </Route>
  </Router>
), document.getElementById('app'));


console.log('Coded by Shu 2016/1/15');