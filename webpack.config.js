var webpack = require('webpack'); 
var path    = require('path'); 

module.exports = { 
    
    entry: {
        index : './src/js/index.js' 
    }, 

    output: {
        path: __dirname + './dist/js/',
        filename: 'bundle.js' 
    },

    module: { //加载器配置  

        loaders: [
            //{ test: /\.css$/, loader: 'style-loader!css-loader' },
            { 
                test: /\.js$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/, 
                query: {
                    presets: ['es2015','react']
                }
            },
        ]
    }
};