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
					
					<Link to={`/post/${post.id}`}>
						<h2>{post.title}</h2>
					</Link>
					
					<div className="meta">
						<time date="2016/1/16">{post.date}</time>
						<span className="comments">
							<a href="#comments">{post.comments} {post.comments > 1 ? 'Comments' : 'Comment'}</a>
						</span>
					</div>
				</header>

				<section className="content">

					{
						post.thumb !== '' ?
						<img src={post.thumb} alt={post.title}/>
						:
						''
					}

					<p>
						{post.content}
					</p>
				</section>
			</article>
		);
	}
}

export class Posts extends React.Component {
	
	render() {

		let posts = this.props.data.map(function(post) {
				
			return (
				<PostsItem data={post} key={post.id} />
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
			url: 'https://geeku.net/post_json?type=list',
			dataType: 'jsonp',
			cache: false,
			success: function(data) {
				console.log(data);
				this.setState({data: data});
				console.log(this.state);
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