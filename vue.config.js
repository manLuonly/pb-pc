// vue.config.js
const CompressionWebpackPlugin = require("compression-webpack-plugin");

// 是否使用gzip
const productionGzip = true;
// 需要gzip压缩的文件后缀
const productionGzipExtensions = ["js", "css"];
// 开发端口 port
const port = process.env.port || process.env.npm_config_port || 9000;

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
        const myConfig = {
            performance: {
                hints: false
            }
        };
        if (process.env.NODE_ENV === "production") {
            myConfig.plugins = [];

            // 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
            productionGzip &&
                myConfig.plugins.push(
                    new CompressionWebpackPlugin({
                        test: new RegExp(
                            "\\.(" + productionGzipExtensions.join("|") + ")$"
                        ),
                        threshold: 8192,
                        minRatio: 0.8,
                        deleteOriginalAssets: false //不删除源文件
                    })
                );
        }
        return myConfig;
    },

    chainWebpack: config => {
        // 指定入口  es6转es5
        config.entry.app = ["babel-polyfill", "./src/main.js"];
        /**
         * 删除懒加载模块的prefetch，降低带宽压力
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
         * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
         */
        config.plugins.delete("preload");
        config.plugins.delete("prefetch");
        /**
         * 它的作用是阻止标签元素间生成空白内容
         */
        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true;
                return options;
            })
            .end();

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
            // "/": {
            //     target: "http://192.168.31.170:8080",
            //     changeOrigin: true,
            // }
           "/": {
              target: "http://192.168.1.170:8080",
              changeOrigin: true,
           }

        }
    }
};

// .env.development
VUE_APP_BASE_API = "/";
