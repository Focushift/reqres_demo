const ghpages = process.env.npm_lifecycle_event && process.env.npm_lifecycle_event.includes(':ghpages')

module.exports = {
  lintOnSave: false,
  runtimeCompiler: false,
  publicPath: ghpages
    ? '/reqres_demo/'
    : '/'
}