import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

export class Menu extends React.Component {
	render() {
		return (
	      <nav id="menu">
	        <ul>
	        	<li>
	        		<Link to="/">Home</Link>
	        	</li>
	        	<li>
	        		<Link to="fm">FM</Link>
	        	</li>
	        	<li>
	        		<Link to="gallery">Gallery</Link>
	        	</li>
	        	<li>
	        		<Link to="lab">Lab</Link>
	        	</li>
	        	<li>
	        		<Link to="about">About</Link>
	        	</li>
	        </ul>
	      </nav>
	    );
	}
}

export default Menu;