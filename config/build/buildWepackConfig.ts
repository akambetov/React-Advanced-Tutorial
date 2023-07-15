import webpack from 'webpack'
import { buildLoaders } from './buildLoader'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { BuildOptions } from './types/config'
import { buildDevSerer } from './buildDevServer'

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {mode, paths, isDev} = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders()
    },
    resolve: {
      extensions: buildResolvers(),
    },
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ?  buildDevSerer(options) : undefined
  }
}