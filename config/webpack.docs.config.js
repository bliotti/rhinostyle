import webpack from 'webpack';
import path    from 'path';

const nodeEnv = process.env.NODE_ENV || 'development';
const vendor = [
  'react',
  'react-dom',
  'moment',
  'component-playground',
];

module.exports = {
  entry: {
    vendor,
    'rhinostyle-docs':    path.join(__dirname, '../src/scripts/docs/entry.js'),
  },
  output: {
    path: path.join(__dirname, '../build/scripts'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '../src/scripts'),
        ],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.join(__dirname, '../', 'node_modules', 'react'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChuncks: 3,
    }),
    new webpack.DefinePlugin({
      'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
  ],
};
