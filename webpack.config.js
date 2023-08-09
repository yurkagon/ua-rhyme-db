const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.txt/,
        type: 'asset/source',
      },

      // {
      //   test: /\.(.*)$/,
      //   use: [
      //     {
      //       loader: 'raw-loader',
      //       options: {
      //         name: '[name].[ext]',
      //       },
      //     },
      //   ],
      //   include: path.resolve(__dirname, './database'), 
      // }
    ],
  }
};
