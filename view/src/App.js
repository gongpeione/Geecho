import React, { Component } from 'react';
import logo from './img/logo.svg';
import './style/index.scss';

import Aside from './layout/Aside';
import Card from './components/Card';
import Messy from './components/Messy';

import bloginfo from './bloginfo.json';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coverExpended: false,
            subtitle: ''
        };
    }
 
    componentDidMount () {
    }

    appClickHandler (e) {
        const coverState = e.target.dataset.cover;
        if (e.target.dataset.cover) {
            this.setState({
                coverExpended: coverState === 'true' ? true : false
            })
        }
    }

    ctrlCover (expend) {
        this.setState({
            coverExpended: !!expend
        })
    }

    render() {
        return (
            <div className="App" onClick={this.appClickHandler.bind(this)}>
                <header className="blog-header">
                    <div className="container">
                        <img src={logo} className="blog-logo" alt="logo" />
                        <h1 className="blog-title">{bloginfo.name}</h1>
                        <h2>
                            <Messy delay={2000} tag="span">{ bloginfo.subtitle }</Messy>
                        </h2>
                    </div>
                </header>
                <main className="blog-main">
                    <div className="container">
                        {
                            [1,1,1,1,1,1,1,1,1,1].map(() => {
                                return (
                                    <Card>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In maiores excepturi quibusdam at, ex et, dicta quo nobis dolores, nihil ut recusandae laudantium. Quod facilis, quo dolorum assumenda facere vel.</p>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </main>
                <Aside ctrlCover={ this.ctrlCover.bind(this) }></Aside>
                <footer className="blog-footer">
                    <Messy delay={2000}>Footer</Messy>
                </footer>

                <div className={`cover ${this.state.coverExpended ? 'expend' : ''}`}></div>
            </div>
        );
    }
}

export default App;
