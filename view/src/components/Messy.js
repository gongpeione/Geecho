import React, { Component } from 'react';

const codes = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+{}|:"<>?-=[]\\;\',./';

export default class Messy extends Component {

    constructor (props) {
        super(props);
        this.state = {
            resultStr: ''
        };
    }

    componentDidMount () {
        const content = this.props.children || this.props.content || '';
        if (!Array.isArray(content)) {
            this.messyWords(content);
        } else {
            this.messyLines(content);
        }
    }

    async messyLines (lines) {
        const l = lines.length;
        for (let i = 0; i < l; i++) {
            await this.messyWords(lines[i], +this.props.delay || 0);
        }
    }

    messyWords (str, delay = 0) {
        const resultStr = Array.from({length: str.length}).fill(0);
        let i = 0;
        
        return new Promise((r, j) => {
            const messyTimer = window.setInterval(() => {
                resultStr[i] = str[i];
                generateStr(++i, resultStr);
                this.setState({
                    resultStr: resultStr.join('')
                });
                if (i >= str.length) {
                    window.clearInterval(messyTimer);
                    window.setTimeout(() => {
                        r();
                    }, delay);
                }
            }, 80);
        });

        function generateStr (start, str) {
            str.forEach((_, i) => {
                if (i < start) {
                    return;
                }
                resultStr[i] = codes[~~(Math.random() * codes.length)];
            });
        }
    }

    render () {
        // const self = this;
        return React.createElement(
            this.props.tag || 'section', 
            [{
                className: this.props.className
            }], 
            this.state.resultStr
        );
    }
}