import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.js';
import Footer from './footer.js';
import BlogList from './blogList.js';

let Wrap = React.createClass({
  render: function() {
    return (
      <div id="wrap">
        <Header/>
          <BlogList/>
        <Footer/>
      </div>
    );
  }
});

ReactDOM.render(
  <Wrap/>,
  document.getElementById('app')
);

console.log('Coded by Shu 2016/1/15');