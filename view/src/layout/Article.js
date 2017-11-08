import React, { Component } from 'react';
import axios from 'axios';

export default class Article extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            date: '',
            categories: [],
            content: ''
        }
    }
    render () {
        return (
           <article className="post">{this.props.match.params.id}
               <header>
                   <h1>{ this.state.title }</h1>
                   <section className="meta">
                        <time>{ this.state.date }</time>
                        <span className="categories">
                            {
                                this.state.categories.map(cat => {
                                    return <a href={ cat.id }>{ cat.name }</a>
                                })
                            }
                        </span>
                    </section>
                    <section className="content">
                        { this.state.content }
                    </section>
               </header>
           </article>
        );
    }
}