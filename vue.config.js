/**
 *
 * 说明：vue配置信息
 */
const webpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const htmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const tersetWebpackPlugin = require('terser-webpack-plugin')
const path = require('path');

function pathResolve(url) {
  return path.join(__dirname, url)
}
console.log("NODE:", process.env.NODE_ENV)
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    './' : "/",
  outputDir: 'dist', //输出打包之后的目录
  assetsDir: 'public', //静态资源放置文件夹
  productionSourceMap: false,
  runtimeCompiler: true,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": pathResolve('src'),
        "assets": pathResolve('src/assets'),
        "components": pathResolve('src/component'),
        "views": pathResolve('src/views'),
      }
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      },
      minimize: true,
      minimizer: [
        new tersetWebpackPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          }
        })
      ],
      splitChunks: {
        cacheGroups: {
          vueLibs: {
            chunks: "all",
            test: /node_modules\/(vuex|vue-router)/,
            name: "vue_libs",
            minChunks: 1,
            maxInitialRequests: 15,
            minSize: 0,
            priority: 100,
          },
          babelLib: {
            chunks: "all",
            test: /node_modules\/(@babel|babel-runtime)/,
            name: "babel_lib",
            minChunks: 1,
            maxInitialRequests: 15,
            minSize: 0,
            priority: 100,
          },
          coreJs: {
            chunks: "all",
            test: /node_modules\/(core-js)/,
            name: "corejs_lib",
            minChunks: 1,
            maxInitialRequests: 15,
            minSize: 0,
            priority: 100,
          },
          vendor: {
            chunks: "all",
            test: /node_modules/,
            name: "vendor",
            minChunks: 1,
            maxInitialRequests: 15,
            minSize: 0,
            priority: 90,
          },
        }
      }
    },
    plugins: [
      new htmlWebpackTagsPlugin({
        tags: ['env.config.js'],
        append: true
      })
    ]
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('report')
        .use(webpackBundleAnalyzer, [{
          analyzerMode: 'server',
        }]);
    }
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "标题"
        return args
      })
  },
  // transpileDependencies: [],
  devServer: { //服务器配置
    open: true, //自动打开浏览器
  }

};
