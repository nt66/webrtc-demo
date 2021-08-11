require('ignore-styles')
require('regenerator-runtime/runtime') // async await 支持
require('@babel/register')({
  ignore: [/\/(build|node_modules)\//],
  presets: [
    '@babel/preset-env',  
    '@babel/preset-react'
  ],
})

require('./server.js')