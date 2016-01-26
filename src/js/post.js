import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Marked from 'marked';
import $ from 'jquery';


/*let data = {
		id: 1,
		title: 'Lorem ipsum dolor sit amet.',
		time: '2016/1/16',
		comments: 10,
		thumb: '',
		content: '\n \n > Lorem ipsum \
		dolor sit amet,consectetur `<div>` adipisicing elit. Rem ea odit reiciendis tempora laboriosam  \
		\n\n ![Img](http://2.devework.com/2015/03/543264204820150312.png) \n\n \
		\n\n ## corporis esse blanditiis consequatur \n\ncorrupti \n\n### Lorem ipsum dolor sit amet \n\nconsectetur \
		adipisicing [elit](http://baidu.com "Title"). `Reiciendis` \n \n > Lorem ipsum \
		dolor sit amet,consectetur `<div>` adipisicing elit. Rem ea odit reiciendis tempora laboriosam  \
		\n\n ![Img](http://2.devework.com/2015/03/543264204820150312.png) \n\n \
		\n\n ## corporis esse blanditiis consequatur \n\ncorrupti \
		neque quasi dicta \n- nulla \n- suscipit \n- commodi harum ipsa \n \np\
		optioquibusdam tque assumenda \n***\nincidunt. \n \
		\n```javascript \n \n\
  var ihubo = { \n\
    nickName  : "草依山",\n\
    site : "http://jser.me"\n\
  }\n\
```\n\
Doloribus in sequi impedit, ut eos.',		
	};*/


export class Post extends React.Component {

	constructor() {
		super();
		this.state = {
			post: {'content' : ''}
		}
	}

	rawMarkup(content) {
		if(content !== '') {
			//var rawMarkup = Marked(content.toString(), {sanitize: true});
			//return { __html: rawMarkup };
			return { __html: content.replace("\n", "<br/>") };
			
		} else {
			return { __html: '' };
		}
	}

	componentDidMount() {
		$.ajax({
			url: 'https://geeku.net/post_json?id=' + this.props.params.id,
			dataType: 'jsonp',
			cache: false,
			success: function(data) {
				console.log(data);
				this.setState({post: data});
				console.log(this.state);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}


	render() {
		return (
			<article className="post" id={"post-" +  this.props.params.id}>
				<header>
					
					<h1>{this.state.post.title}</h1>
					
					<div className="meta">
						<time datetime={this.state.post.date}>{this.state.post.date}</time>
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

					<p dangerouslySetInnerHTML={this.rawMarkup(this.state.post.content)} />

				</section>
			</article>
		)
	}
}

export default Post;