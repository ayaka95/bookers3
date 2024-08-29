const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack = require('webpack')
environment.plugin.predend(
  'Provide'),
  new webpack.ProvidePlagin({
    $: 'jquery/src/jquery',
    Popper: 'popper.js'
  })