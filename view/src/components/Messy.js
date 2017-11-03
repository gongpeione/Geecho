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
        const gap = +this.props.gap || 80;
        const delay = +this.props.delay || 0;
        if (!Array.isArray(content)) {
            this.messyWords(content + '', gap, delay);
        } else {
            this.messyLines(content, gap, delay);
        }
    }

    async messyLines (lines, gap = 80, delay = 0) {
        const l = lines.length;
        for (let i = 0; i < l; i++) {
            await this.messyWords(lines[i], gap, delay);
        }
    }

    messyWords (str, gap = 80, delay = 0) {
        const strLength = str.length;
        const resultStr = Array.from({length: strLength}).fill(0);
        let i = 0;
        
        return new Promise((r, j) => {
            const messyTimer = window.setInterval(() => {
                resultStr[i] = str[i];
                generateStr(++i, strLength);
                this.setState({
                    resultStr: resultStr.join('')
                });
                if (i >= str.length) {
                    window.clearInterval(messyTimer);
                    window.setTimeout(() => {
                        r();
                    }, delay);
                }
            }, gap);
        });

        function generateStr (start, length) {
            for (let i = start; i < length; i++) {
                resultStr[i] = codes[~~(Math.random() * codes.length)];
            }
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