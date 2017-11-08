import React, { Component } from 'react';

export default class Button extends Component {
    render () {
        return (
            <button className={`g-btn ${this.props.className || ''}`}>{this.props.children}</button>
        );
    }
}