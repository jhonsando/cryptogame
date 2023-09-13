const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      containers: path.resolve(__dirname, './src/containers/'),
      graphql: path.resolve(__dirname, './src/graphql/'),
      hooks: path.resolve(__dirname, './src/hooks/'),
      pages: path.resolve(__dirname, './src/pages/')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};