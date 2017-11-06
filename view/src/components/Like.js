import React, { Component } from 'react';

export default class Like extends Component {
    render () {
        return (
            <span className="like" onClick={
                (e) => {
                    console.log('like');
                    e.stopPropagation();
                }
            }>❤</span>
        );
    }
}