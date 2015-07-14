var publicAssets = "./tmp/assets";
var sourceFiles  = "./app";

module.exports = {
  publicAssets: publicAssets,
  browserSync: {
    proxy: 'localhost:3000',
    files: ['./app/views/**']
  },
  browserify: {
    bundleConfigs: [{
      entries: [sourceFiles + '/js/app.js'],
      dest: publicAssets + '/js',
      outputName: 'bundle.js',
      extensions: ['.js','.coffee', '.jsx']
    }]
  }
};
