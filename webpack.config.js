const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: [
    'reflect-metadata',
    __dirname + '/src/infraestructure/http/app.ts',
    './src/infraestructure/controller'
  ],
  mode: 'development',
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new NodemonPlugin()
  ]
};