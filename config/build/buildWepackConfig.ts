import webpack from 'webpack'
import { buildLoaders } from './buildLoader'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { BuildOptions } from './types/config'

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {mode, paths} = options

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
  }
}