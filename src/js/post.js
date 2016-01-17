import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

export class Post extends React.Component {

	render() {
		return (
			<div>{this.props.params.id}</div>
		)
	}
}

export default Post;