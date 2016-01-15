import React from 'react';
import ReactDOM from 'react-dom';


export class Post extends React.Component {
	render() {
		return (

			<article className="post">
				<header>
					<a href="#">
						<h2>Lorem ipsum dolor sit.</h2>
					</a>
					
					<div className="meta">
						<time date="2016/1/16">2016/1/16</time>
						<span className="comments">10</span>
					</div>
				</header>

				<section className="content">
					<img src="../img/default.jpg" alt="Lorem ipsum dolor sit"/>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quidem, saepe. Totam, repellendus, impedit. Cupiditate saepe totam similique alias aliquam tenetur perspiciatis distinctio. Optio aliquam similique, est labore? Obcaecati, laboriosam!
					</p>
				</section>
			</article>
			
		);
	}
}
export class BlogList extends React.Component {
	render() {
		return (
	      <div id="blog-container">
	        <Post/>
	        <Post/>
	        <Post/>
	        <Post/>
	      </div>
	    );
	}
}

/*ReactDOM.render(
  <Header/>,
  document.getElementById('app')
);*/

export default BlogList;