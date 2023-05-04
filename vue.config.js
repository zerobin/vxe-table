/*
 * @Date: 2023-05-04 11:39:00
 * @LastEditors: 庄鸿斌
 * @LastEditTime: 2023-05-04 18:26:53
 */
const path = require('path')
const pkg = require('./package.json')
const { defineConfig } = require('@vue/cli-service')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

process.env.VUE_APP_VXE_TABLE_VERSION = pkg.version
process.env.VUE_APP_VXE_TABLE_ENV = 'development'

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    resolve: {
      alias: {
        '@': resolve('examples'),
        'vxe-table': resolve('packages/all.ts'),
        '@types': resolve('types/all'),
        '@styles': resolve('styles'),
        '@packages': resolve('packages')
      }
    },
    output: {
      library: 'VXETable'
    }
  },
  chainWebpack (config) {
    const XEUtils = {
      root: 'XEUtils',
      commonjs: 'xe-utils',
      commonjs2: 'xe-utils',
      amd: 'xe-utils'
    }
    if (process.env.npm_lifecycle_event && process.env.npm_lifecycle_event.indexOf('lib') === 0) {
      if (config.has('externals')) {
        config.externals
          .set('xe-utils', XEUtils)
      } else {
        config
          .set('externals', {
            'xe-utils': XEUtils,
            'highlight.js': 'hljs'
          })
      }
    }
  }
})
