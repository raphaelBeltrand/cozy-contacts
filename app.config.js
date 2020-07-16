const webpack = require('webpack')
const { environment } = require('cozy-scripts/config/webpack.vars.js')
const production = environment === 'production'

const configurationFiles = []

configurationFiles.push(
  require('cozy-scripts/config/webpack.bundle.default.js')
)

configurationFiles.push(
  require('cozy-scripts/config/webpack.config.css-modules')
)

const extraConfig = {
  plugins: [
    new webpack.ProvidePlugin({
      'cozy.bar': production
        ? 'cozy-bar/dist/cozy-bar.min.js'
        : 'cozy-bar/dist/cozy-bar.js'
    }) /*,
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __STACK_ASSETS__: true
    })*/
  ]
}

configurationFiles.push(extraConfig)

module.exports = configurationFiles
