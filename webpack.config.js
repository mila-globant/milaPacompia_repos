const path = require('path');
const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

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
    new NodemonPlugin(),
    new webpack.IgnorePlugin({ resourceRegExp: /^pg-native$/ }),
    new webpack.ContextReplacementPlugin(/typeorm/),
    new FilterWarningsPlugin({
      exclude: [/mongodb/, /mssql/, /mysql/, /mysql2/, /oracledb/, /pg/, /pg-native/, /pg-query-stream/, /react-native-sqlite-storage/, /redis/, /sqlite3/, /sql.js/, /typeorm-aurora-data-api-driver/, /hdb-pool/, /@google-cloud\/spanner/, /@sap\/hana-clien/]
    })
  ]
};