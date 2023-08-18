const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[contenthash].bundle.js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      publicPath: require("./package.json").homepage,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.*/,
        include: path.resolve(__dirname, 'database'),
        type: 'asset/source',
      },
    ],
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    historyApiFallback: true,
  },
};
