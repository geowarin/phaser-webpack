module.exports = {

    // Currently we need to add '.ts' to resolve.extensions array.
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    entry: './src/Game.ts',

    output: {
        path: 'build',
        filename: 'bundle.js'
    },

    // Source maps support (or 'inline-source-map' also works)
    devtool: 'source-map',

    // Add loader for .ts files.
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'typescript-loader'
            }
        ]
    }
};
