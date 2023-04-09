import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types/types";


export const buildPlugins = (paths: BuildPaths): webpack.WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({template: paths.html})
  ]
}
