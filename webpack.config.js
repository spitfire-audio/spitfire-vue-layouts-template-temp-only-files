const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

// Webpack is only used for UILayouts builds - Browser builds use Vite
module.exports = {
    mode: 'development',
    entry: './spitfire-vue-layouts-template-temp-only-files/juce_render/main.js',
    output: {
        path: __dirname + '/build/js',
        filename: 'main.js',
        libraryTarget: 'umd',
        sourceMapFilename: '[file].map',
        globalObject: 'this',
        devtoolModuleFilenameTemplate: (info) => `webpack:///${info.absoluteResourcePath.replace (/\\/g, '/')}`,
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@': path.join (__dirname, 'src'),
            '@components': path.join (__dirname, 'spitfire-vue-component-lib/components/'),
            '@base': path.join (__dirname, 'spitfire-vue-component-lib/components/base_uilayouts'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            modules: {
                                localIdentName: '[local]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['vue-loader', 'vue-svg-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: false,
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
};
