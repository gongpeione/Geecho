import React, { Component } from 'react';

export default class Menu extends Component {

    constructor (props) {
        super(props);
        this.state = {
            asideExpended: false
        };
    }

    render () {
        return (
            <nav className="blog-menu">
                <a href="#" className="active">Home</a>
                <a href="#">Links</a>
                <a href="#">Category</a>
                <a href="#">Archive</a>
                <a href="#">Guestbook</a>
            </nav>
        )
    }
}