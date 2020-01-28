module.exports = {
  output: {
       path: 'static/frontend',
       //filename: 'bundle.js'
   },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
              test: /\.(jpg|png)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: '[name].[ext]',  //keep the same name as before after compiling of webpack
                          outputPath: 'img/',    //output path of the copy of the file made by webpack
                            //publicPath: 'api/'     //accesing path to use then in react component by importing
                      }
                  }
              ]
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          }
    ]
  }
}
