import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom'
import Like from '../components/Like';

export default class Articles extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const articles = [1,2,3,4,5,6].map(key => {
            return (
                <article key={key}>
                    {/* <img src="https://placeimg.com/640/200/any" className="feature-img"/> */}
                    <section className="content">
                        <Link to={`/post/${key}`}>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laborum.</h2>
                        </Link>
                        <section className="meta">
                            <time>2017-11-05</time>
                            <span className="categories">
                                <a href="#">CSS</a>
                                <a href="#">JavaScript</a>
                            </span>
                        </section>
                    </section>
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci possimus ad laborum iure recusandae doloremque atque labore minus, illo accusamus voluptate deleniti odit ullam a eos exercitationem esse. Nesciunt, veritatis quae enim est, minus fuga voluptates ea suscipit reprehenderit sunt doloribus qui quos nihil iste magni. Temporibus molestias hic officiis? Voluptatum, nesciunt autem optio.</p> */}
                </article>
            )
        });

        const aside = <aside>
            Aside
        </aside>;

        return (
            <div className="article-wrap">
                <section className="articles">{articles}</section>
            </div>
        )
    }
}