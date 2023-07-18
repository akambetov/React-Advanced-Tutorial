import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack'

export const buildLoaders = (): webpack.RuleSetRule[] => {
  // если не использовать typescript - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      /*
      // Creates `style` nodes from JS strings
      "style-loader",
      */
      
      MiniCssExtractPlugin.loader,
      "css-loader",   // Translates CSS into CommonJS
      "sass-loader",  // Compiles Sass to CSS
    ],
  };

  return [typescriptLoader, cssLoader]
}