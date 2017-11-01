import React, { Component } from 'react';

export default class Aside extends Component {

    constructor (props) {
        super(props);
        this.state = {
            asideExpended: false
        };
    }

    toggleAside () {
        this.setState({
          asideExpended: !this.state.asideExpended
        });
      }

    render () {
        return (
            <aside 
                className={`blog-aside ${this.state.asideExpended ? 'expend' : ''}`}
            >
                <div 
                    data-cover={!this.state.asideExpended}
                    className="aside-toggle" onClick={this.toggleAside.bind(this)}
                >
                T
                </div>
                <nav>
                Aside
                </nav>
            </aside>
        )
    }
}