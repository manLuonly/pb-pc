const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var webpack = require("webpack");

// 是否使用gzip
const productionGzip = true;
// 需要gzip压缩的文件后缀
const productionGzipExtensions = ["js", "css"];
// 开发端口 port
const port = process.env.port || process.env.npm_config_port || 9000;
//代理地址
const devServerProxyTargetUrl = "http://47.94.162.7:8080/hc/";

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    productionSourceMap: false,
    css: {
        loaderOptions: {
            scss: {
                data: `@import "~@/styles/index.scss";`
            }
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {

            config.optimization = {
                minimizer: [
                    // https://webpack.js.org/plugins/terser-webpack-plugin/
                    new TerserPlugin({
                        extractComments: false,
                        terserOptions: {
                            compress: {
                                drop_console: true,
                                drop_debugger: true,
                                pure_funcs: ["console.log"]
                            }
                        }
                    })
                ]
            };

            config.performance = {
                hints: false
            };

            productionGzip &&
                config.plugins.push(
                    new CompressionWebpackPlugin({
                        algorithm: "gzip",
                        test: new RegExp(
                            "\\.(" + productionGzipExtensions.join("|") + ")$"
                        ),
                        threshold: 8192,
                        minRatio: 0.8,
                        deleteOriginalAssets: false //不删除源文件
                    })
                );

            config.plugins.push(
                new ParallelUglifyPlugin({
                    cacheDir: ".cache/",
                    uglifyES: {
                        output: {
                            comments: false
                        },
                        warnings: false,
                        compress: {
                            drop_debugger: true,
                            drop_console: true
                        }
                    }
                })
            );
        }
    },

    chainWebpack: config => {
        config
            .plugin("ignore")
            .use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));

        config.module
            .rule("images")
            .use("image-webpack-loader")
            .loader("image-webpack-loader")
            .options({
                bypassOnDebug: true
            })
            .end();

        config.plugins.delete("preload");
        config.plugins.delete("prefetch");

        config.when(process.env.NODE_ENV === "development", config =>
            config.devtool("cheap-source-map")
        );
    },
    devServer: {
        port: port,
        disableHostCheck: true,
        open: true,
        proxy: {
            "/": {
                target: devServerProxyTargetUrl,
                changeOrigin: true
            }
        }
    }
};

VUE_APP_BASE_API = "/";