import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


let data = {
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
	};


export class Post extends React.Component {

	constructor() {
		super();
		this.state = {
			post: data
		}
	}

	render() {
		return (
			<article className="post" id={"post-" +  this.props.params.id}>
				<header>
					
					<h2>{this.state.post.title}</h2>
					
					<div className="meta">
						<time date="2016/1/16">{this.state.post.time}</time>
						<span className="comments">
							<a href="#comments">{this.state.post.comments} {this.state.post.comments > 1 ? 'Comments' : 'Comment'}</a>
						</span>
					</div>
				</header>

				<section className="content">

					{
						this.state.post.thumb !== '' ?
						<img src={this.state.post.thumb} alt={this.state.post.title}/>
						:
						''
					}

					<p>
						{this.state.post.content}
					</p>
				</section>
			</article>
		)
	}
}

export default Post;