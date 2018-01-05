var path = require( 'path' )
var utils = require( './utils' )
var webpack = require( 'webpack' )
var config = require( '../config' )
var merge = require( 'webpack-merge' )
var baseWebpackConfig = require( './webpack.base.conf' )
var CopyWebpackPlugin = require( 'copy-webpack-plugin' )
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' )
var OptimizeCSSPlugin = require( 'optimize-css-assets-webpack-plugin' )
var ExtractCssChunks = require( 'extract-css-chunks-webpack-plugin' )
var WebpackNodeExternals = require( 'webpack-node-externals' )

var env = process.env.NODE_ENV === 'testing' ?
    require( '../config/test.env' ) :
    config.release.env

var webpackConfig = merge( baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders( {
            sourceMap: config.release.productionSourceMap,
            extract: true
        } )
    },
    externals: [WebpackNodeExternals()],
    devtool: config.release.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.release.assetsRoot,
        filename: 'cedar.js',
        publicPath: config.release.assetsPublicPath,
        libraryTarget: 'commonjs2',
        umdNamedDefine: true
    },
    plugins: [
        // extract css into separate files
        new ExtractCssChunks('cedar-core.css'),
        new ExtractTextPlugin('cedar-components.css'),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin( {
            cssProcessorOptions: {
                safe: true
            }
        } ),
        // copy custom static assets
        new CopyWebpackPlugin( [ {
            from: path.resolve( __dirname, '../static' ),
            to: config.release.assetsSubDirectory,
            ignore: [ '.*' ]
        } ] )
    ]
} )

if ( config.release.productionGzip ) {
    var CompressionWebpackPlugin = require( 'compression-webpack-plugin' )

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin( {
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.release.productionGzipExtensions.join( '|' ) +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        } )
    )
}

if ( config.release.bundleAnalyzerReport ) {
    var BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin
    webpackConfig.plugins.push( new BundleAnalyzerPlugin() )
}

module.exports = webpackConfig
