import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import $ from 'jquery';

import Header from './header.js';

let data = [
	/*{
		id: 1,
		title: 'Lorem ipsum dolor sit amet.',
		time: '2016/1/16',
		comments: 10,
		thumb: '',
		content: 'Lorem ipsum dolor sit amet, consectetur \
		adipisicing elit. Reiciendis eveniet sequi corrupti \
		neque quasi dicta nulla suscipit commodi harum ipsa, p\
		erspiciatis quidem quas cupiditate sapiente distinctio \
		optio quibusdam atque, quos obcaecati amet assumenda, \
		incidunt. Doloribus in sequi impedit, ut eos.',		
	},
	{
		id: 2,
		title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
		time: '2016/1/16',
		comments: 10,
		thumb: 'img/default.jpg',
		content: 'Lorem ipsum dolor sit amet, consectetur \
		adipisicing elit. Reiciendis eveniet sequi corrupti \
		neque quasi dicta nulla suscipit commodi harum ipsa, p\
		erspiciatis quidem quas cupiditate sapiente distinctio \
		optio quibusdam atque, quos obcaecati amet assumenda, \
		incidunt. Doloribus in sequi impedit, ut eos.',		
	},
	{
		id: 3,
		title: 'Lorem ipsum dolor.',
		time: '2016/1/16',
		comments: 10,
		thumb: '',
		content: 'Lorem ipsum dolor sit amet, consectetur \
		adipisicing elit. Reiciendis eveniet sequi corrupti \
		neque quasi dicta nulla suscipit commodi harum ipsa, p\
		erspiciatis quidem quas cupiditate sapiente distinctio \
		optio quibusdam atque, quos obcaecati amet assumenda, \
		incidunt. Doloribus in sequi impedit, ut eos.',		
	},
	{
		id: 4,
		title: 'Lorem ipsum dolor sit amet.',
		time: '2016/1/16',
		comments: 10,
		thumb: '',
		content: 'Lorem ipsum dolor sit amet, consectetur \
		adipisicing elit. Reiciendis eveniet sequi corrupti \
		neque quasi dicta nulla suscipit commodi harum ipsa, p\
		erspiciatis quidem quas cupiditate sapiente distinctio \
		optio quibusdam atque, quos obcaecati amet assumenda, \
		incidunt. Doloribus in sequi impedit, ut eos.',		
	},
	{
		id: 5,
		title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
		time: '2016/1/16',
		comments: 10,
		thumb: '',
		content: 'Lorem ipsum dolor sit amet, consectetur \
		adipisicing elit. Reiciendis eveniet sequi corrupti \
		neque quasi dicta nulla suscipit commodi harum ipsa, p\
		erspiciatis quidem quas cupiditate sapiente distinctio \
		optio quibusdam atque, quos obcaecati amet assumenda, \
		incidunt. Doloribus in sequi impedit, ut eos.',		
	},
	{
		id: 6,
		title: 'Lorem ipsum dolor.',
		time: '2016/1/16',
		comments: 10,
		thumb: '',
		content: 'Lorem ipsum dolor sit amet, consectetur \
		adipisicing elit. Reiciendis eveniet sequi corrupti \
		neque quasi dicta nulla suscipit commodi harum ipsa, p\
		erspiciatis quidem quas cupiditate sapiente distinctio \
		optio quibusdam atque, quos obcaecati amet assumenda, \
		incidunt. Doloribus in sequi impedit, ut eos.',		
	}*/
];

export class PostsItem extends React.Component {

	render() {

		let post = this.props.data;

		return (

			<article className="posts">
				<header>
					
					<Link to={`/post/${post.name}`}>
						<h2>{post.name.replace(/.md/i, '')}</h2>
					</Link>
					
					<div className="meta">
						<span className="words-counter">
							Length: {post.size} 
						</span>
						<span className="category">
							Category: {post.path.match(/(.*?)\/.*?\.md/)[1]} 
						</span>
					</div>
				</header>

			</article>
		);
	}
}

export class Posts extends React.Component {
	
	render() {

		let posts = this.props.data.map(function(post) {
				
			return (
				<PostsItem data={post} key={post.sha} />
			);
		});

		return (
			<div id="blog-container">
				<Header />
				{posts}
			</div>
		);
	}
}
export class Blog extends React.Component {

	constructor(props) {
		super(props);

		this.state = {data: []};
	}

	componentDidMount() {
		$.ajax({
			url: 'https://api.github.com/repos/gongpeione/geblog/contents/Front',
			dataType: 'jsonp',
			cache: false,
			success: function(content) {

				this.setState({data: content.data});

			}.bind(this),
			error: function(xhr, status, err) {

				console.error(this.props.url, status, err.toString());
				
			}.bind(this)
		});
	}

	render() {
		return (

	        <Posts data={this.state.data} />
	    );
	}
}

export default Blog;