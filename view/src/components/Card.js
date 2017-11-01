import React, { Component } from 'react';

export default class Card extends Component {
    render () {
        return (
            <section className="g-card">
                {this.props.children}
            </section>
        )
    }
}