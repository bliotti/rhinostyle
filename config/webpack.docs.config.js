import webpack from 'webpack';
import path    from 'path';

const dependencies = [
  'react',
  'classnames',
  'component-playground'
];

export default {
  cache: true,
  devTool: 'cheap-module-source-map',
  entry: {
    vendor:      dependencies,
    button:      path.join(__dirname, '../src/scripts/docs/ButtonApp.jsx'),
    icon:        path.join(__dirname, '../src/scripts/docs/IconApp.jsx'),
    feedback:    path.join(__dirname, '../src/scripts/docs/FeedbackApp.jsx'),
    avatar:      path.join(__dirname, '../src/scripts/docs/AvatarApp.jsx'),
    label:       path.join(__dirname, '../src/scripts/docs/LabelApp.jsx'),
    loader:      path.join(__dirname, '../src/scripts/docs/LoaderApp.jsx'),
    progressbar: path.join(__dirname, '../src/scripts/docs/ProgressBarApp.jsx'),
    pill:        path.join(__dirname, '../src/scripts/docs/PillApp.jsx'),
    dropdown:    path.join(__dirname, '../src/scripts/docs/DropdownApp.jsx'),
  },
  output: {
    path: path.join(__dirname, '../build/scripts'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'react': path.join(__dirname, '../', 'node_modules', 'react')
    },
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: false, exclude: /vendor/ })
  ]
};
