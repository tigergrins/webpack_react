import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";
import { buildDevServer } from "./buidDevServer";


export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { paths, mode, isDev } = options

  return {
    entry: paths.entry,
    mode: mode,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
