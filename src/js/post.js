import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Marked from 'marked';


let data = {
		id: 1,
		title: 'Lorem ipsum dolor sit amet.',
		time: '2016/1/16',
		comments: 10,
		thumb: '',
		content: '\n \n > Lorem ipsum \
		dolor sit amet,consectetur `<div>` adipisicing elit. Rem ea odit reiciendis tempora laboriosam  \
		\n\n ![Img](http://cdn.sspai.com/attachment/thumbnail/2014/04/15/4f47235736535ed5932b15bdef64263b10f73_mw_800_wm_1_wmp_3.jpg) \n\n \
		\n\n ## corporis esse blanditiis consequatur \n\ncorrupti \n\n### Lorem ipsum dolor sit amet \n\nconsectetur \
		adipisicing [elit](http://baidu.com "Title"). `Reiciendis` \n \n > Lorem ipsum \
		dolor sit amet,consectetur `<div>` adipisicing elit. Rem ea odit reiciendis tempora laboriosam  \
		\n\n ![Img](http://cdn.sspai.com/attachment/thumbnail/2014/04/15/4f47235736535ed5932b15bdef64263b10f73_mw_800_wm_1_wmp_3.jpg) \n\n \
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
	};


export class Post extends React.Component {

	constructor() {
		super();
		this.state = {
			post: data
		}
	}

	rawMarkup() {
		var rawMarkup = Marked(this.state.post.content.toString(), {sanitize: true});
		return { __html: rawMarkup };
	}


	render() {
		return (
			<article className="post" id={"post-" +  this.props.params.id}>
				<header>
					
					<h1>{this.state.post.title}</h1>
					
					<div className="meta">
						<time date={this.state.post.time}>{this.state.post.time}</time>
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

					<p dangerouslySetInnerHTML={this.rawMarkup()} />

				</section>
			</article>
		)
	}
}

export default Post;