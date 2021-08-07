module.exports = {
  lintOnSave: false,
  runtimeCompiler: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/reqres_demo/'
    : '/'
}