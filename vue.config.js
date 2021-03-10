module.exports = {
  filenameHashing: false,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    // If you wish to remove the standard entry point
    
    // then add your own
    config.entry('light-theme')
      .add('./src/sass/light-theme.scss')
      .end()

      config.entry('dark-theme')
      .add('./src/sass/dark-theme.scss')
      .end()

      config
      .plugin('html')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].excludeChunks = ['light-theme', 'dark-theme' ];
        return args;
      });
  },
  css: {
      extract: { 
          filename: 'css/[name].css', // to have a name related to a theme
          // chunkFilename: 'css/[name].css' 
      },
      requireModuleExtension: false,
      sourceMap: true
  },
  // pages: {
  //   "light-theme": {
  //     entry: "src/sass/light-theme.scss",
  //     filename: "light-theme.css"
  //   }
  // }
}