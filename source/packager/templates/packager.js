import { ifElse } from 'supermind-packager'

export default function(env) {
  const isProduction = env.production
  const isDevelopment = !isProduction
  const usePreact = env.preact

  const ifProduction = ifElse(isProduction)
  const ifDevelopment = ifElse(isDevelopment)
  const ifPreact = ifElse(usePreact)

  const alias = ifPreact({
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
  }, {})

  return {
    watch: isDevelopment,
    minify: isProduction,
    devtool: ifProduction('source-maps', 'eval-source-maps'),
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      presets: [ 'latest', 'react' ],
      plugins: [ 'latest' ]
    }],
    bundles: [{
      name: 'dll',
      modules: [ 'node_modules' ],
      alias,
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
      watch: false,
      modules: [
        'source/client',
        'source/shared',
        'node_modules'
      ],
      alias,
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
}
