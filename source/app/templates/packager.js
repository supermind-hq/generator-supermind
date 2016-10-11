// var path = require('path')

export default function(env) {
  return [{
    name: 'dll',
    modules: [ 'node_modules' ],
    entry: {
      vendor: {
        type: 'dll',
        path: {
          'react': 'react',
          'react-dom': 'react-dom',
          'react-router': 'react-router',
          'redux': 'redux'
        }
      }
    },
    output: 'static/assets/[name]-[chunkhash]'
  }, {
    name: 'client',
    modules: [
      'source/client',
      'source/shared',
      'node_modules'
    ],
    entry: {
      index: {
        path: 'source/client/Bootstrap.js',
        dll: 'vendor'
      }
    },
    output: 'static/assets/[name]-[chunkhash]'
  }, {
    name: 'server',
    target: 'node',
    modules: [
      'source/server',
      'source/shared',
      'node_modules'
    ],
    entry: {
      express: 'source/server/ExpressServer.js',
      lambda: 'source/server/LambdaServer.js'
    },
    output: 'server/[name]/index.js'
  }]
}
