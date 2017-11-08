import React, { Component } from 'react';

import './style/index.scss';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Header from './layout/Header';
import Aside from './layout/Aside';
import Articles from './layout/Articles';
import Article from './layout/Article';
import Gallery from './layout/Gallery';

import Card from './components/Card';
import Messy from './components/Messy';
import Button from './components/Button';

import bloginfo from './bloginfo.json';

const Homepage = () => {
    return [
        <h3 className="home-subtitle">Posts</h3>,
        <Articles></Articles>,
        <Button className="center">More Posts</Button>,
        <h3 className="home-subtitle">Photography</h3>,
        <Gallery></Gallery>,
        <Button>More Photos</Button>
    ]
}
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
                
                <Header blogname={bloginfo.name} subtitle={bloginfo.subtitle}></Header>
                
                <main className="blog-main">
                    <div className="container">
                    <Switch>
                        <Route exact path='/' component={Homepage}/>
                        <Route path='/post/:id' component={Article}/>
                    </Switch>
                    </div>
                </main>

                <Aside ctrlCover={ this.ctrlCover.bind(this) }></Aside>
                
                <footer className="blog-footer">
                    <Messy delay={2000} gap={100}>Geeku.Net</Messy>
                </footer>

                <div className={`cover ${this.state.coverExpended ? 'expend' : ''}`}></div>
            </div>
        );
    }
}

export default App;
