const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
//引入webpack库
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
    /**
     * baseUrl vue-cli3.3 版本已废弃
     * process.env.NODE_ENV值 为production(线上生产环境)或development(开发环境)，
     * 可通过这个改变路径
     */
    // baseUrl: '/', //开发环境
    // baseUrl: '/dist', //线上环境
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    /**
     * 经过一顿搜索，发现js的map文件.原来map文件只是帮助我们调试用的，
     * 毕竟打包后的代码都是压缩的，调试起来很不方便。测试没问题，正式上线时，我们完全可以去掉这个文件
     * @value  为false打包时不生成 .map文件减少打包大小
     */
    productionSourceMap: false,
    css: {
        loaderOptions: {
            // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
            // 因为 `scss` 语法在内部也是由 sass-loader 处理的
            // 但是在配置 `data` 选项的时候
            // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
            // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
            scss: {
                data: `@import "~@/styles/index.scss";`
            }
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {

            //压缩代码 去除consolelog
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

            //关闭 webpack 的性能提示
            config.performance = {
                hints: false
            };

            // 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
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

            //压缩代码 去除consolelog
            config.plugins.push(
                new ParallelUglifyPlugin({
                    //cacheDir 用于配置缓存存放的目录路径。
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
        //忽略/moment/locale下的所有文件
        config
            .plugin("ignore")
            .use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));

        // ============压缩图片 start============
        config.module
            .rule("images")
            .use("image-webpack-loader")
            .loader("image-webpack-loader")
            .options({
                bypassOnDebug: true
            })
            .end();
        // ============压缩图片 end============

        /**
         * 删除懒加载模块的prefetch，降低带宽压力
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
         * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
         */
        config.plugins.delete("preload");
        config.plugins.delete("prefetch");

        // https://webpack.js.org/configuration/devtool/#development
        // 此选项控制是否以及如何生成源映射（选择一种源映射样式，以增强调试过程。这些值会极大地影响构建和重建速度）
        config.when(process.env.NODE_ENV === "development", config =>
            config.devtool("cheap-source-map")
        );
    },
    devServer: {
        port: port,
        open: true,
        proxy: {
            "/": {
                target: devServerProxyTargetUrl,
                changeOrigin: true
            }
        }
    }
};

// .env.development
VUE_APP_BASE_API = "/";