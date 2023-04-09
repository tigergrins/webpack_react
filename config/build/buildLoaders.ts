import webpack from 'webpack';


export const buildLoaders = (): webpack.RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader",
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    loader: 'svg-inline-loader'
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    tsLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ]
}
