const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("Html-webpack-plugin");
const { join } = require('path');

// const publicPath = process.env.PUBLIC_URL || '/';
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  console.log('env', env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist',
      clean: true
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-object-rest-spread", "@babel/plugin-transform-modules-commonjs"]
          }
        }
      }, {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
        ],
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      new HtmlWebpackPlugin({
        title: 'Expensify HOT app',
        template: join(__dirname, 'public', 'index.html')
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public')
      },
      historyApiFallback: true,
      liveReload: false,
      hot: true
    },
  };
};
