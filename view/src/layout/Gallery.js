import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom'

export default class Gallery extends Component {

    constructor (props) {
        super(props);
        this.state = {
            showFullsize: false,
            curImgSrc: ''
        };
    }

    toggleFullsize (src) {
        this.setState({
            showFullsize: !this.state.showFullsize,
            curImgSrc: src || this.state.curImgSrc
        });
    }

    render () {
        return (
            <section className="gallery">
                {
                    [
                        'https://images.unsplash.com/photo-1509529711801-deac231925ac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=1605db18f5fc960a03e1c665569a2c37',
                        'https://images.unsplash.com/photo-1509652221706-876fd44b66ac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=17d5565d00ba76a302a73c9b6f3aed75',
                        'https://images.unsplash.com/photo-1509645257744-dfd14c2cb4aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=8df1b21e2a968eb9a58928e1979b75d5',
                        'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=27bf006f58c68070cff65b7268c910fd',
                        'https://images.unsplash.com/photo-1509653087866-91f6c2ab59f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=643f15dcf6da04cf3f8d3bd3fb14e589',
                        'https://images.unsplash.com/photo-1509654928771-f34ae3670858?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=ae55262731e4823ac66d279d87c04432'
                    ].map((src, index) => {
                        return (
                            <figure className="img-cover" style={{backgroundImage :`url(${src})`}} onClick={this.toggleFullsize.bind(this, src)}>
                                <img src={src} alt=""/>
                            </figure>
                        )
                    })
                }
                <div className={`fullsize ${this.state.showFullsize ? 'show' : ''}`} onClick={ () => this.setState({showFullsize: false}) }>
                    <img src={this.state.curImgSrc} />
                </div>
            </section>
        )
    }
}