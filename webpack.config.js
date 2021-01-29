const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
let htmlPageNames = ['index', 'about', 'contact', 'projects'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});

module.exports = {
  entry: {
    "index": "./src/index.js",
},
output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
},
  module: {
    
    
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ['index']
    })
  ].concat(multipleHtmlPlugins)
};