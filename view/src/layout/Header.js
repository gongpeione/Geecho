import React, { Component } from 'react';
import Menu from './Menu';

import Messy from '../components/Messy';

import logo from '../img/logo.svg';

export default class Header extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <header className="blog-header">
                <div className="pattern">
                    <div className="container">
                        <div className="logo">
                            <img src={logo} className="blog-logo" alt="logo" />
                            <h1 className="blog-title">{ this.props.blogname }</h1>
                            <h2>
                                <Messy delay={2000} tag="span">{ this.props.subtitle }</Messy>
                            </h2>
                        </div>
                        <Menu></Menu>
                    </div>
                </div>
            </header>
        )
    }
}