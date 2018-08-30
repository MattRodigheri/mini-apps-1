module.exports = {
      entry: __dirname + '/client/app.jsx',
          module: {
            rules: [
              {
                test: [/\.jsx$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['env', 'react'],
                }
              }
            ]
          },
           output: {
            filename: 'bundle.js',
            path: __dirname + '/public'
          }
        };
