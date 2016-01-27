import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Marked from 'marked';
import $ from 'jquery';
import Base64 from 'js-base64';


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
			return { __html: Base64.decode(content) };
			
		} else {
			return { __html: '' };
		}
	}

	componentDidMount() {
		$.ajax({
			url: 'https://api.github.com/repos/gongpeione/geblog/contents/Front/' + this.props.params.title,
			dataType: 'jsonp',
			cache: false,
			success: function(content) {

				this.setState({post: content.data});
				console.log(this.state);

			}.bind(this),
			error: function(xhr, status, err) {

				console.error(this.props.url, status, err.toString());

			}.bind(this)
		});
	}


	render() {
		return (
			<article className="post">
				<header>
					
					<h1>{this.state.post.name}</h1>
					
					<div className="meta">
						<span className="words-counter">
							Length: {this.state.post.size} 
						</span>
						<span className="category">
							Category: {this.state.post.path} 
						</span>
					</div>
				</header>

				<section className="content">

					<p dangerouslySetInnerHTML={this.rawMarkup(this.state.post.content)} />

				</section>
			</article>
		)
	}
}

export default Post;