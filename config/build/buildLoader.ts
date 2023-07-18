import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack'
import { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  // если не использовать typescript - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev 
        ? "style-loader"  /*Creates `style` nodes from JS strings */
        : MiniCssExtractPlugin.loader,

      {
        loader: "css-loader",   // Translates CSS into CommonJS
        options: {
          modules: {
            // auto: /module/                    //только файлы scss в названи которых есть слово "module" обрабатываються как модуль-css 
            // auto: /\.module\.s[ac]ss$/        //только файлы scss в названи которых есть слово "module" обрабатываються как модуль-css 
            auto: (path: string): boolean => path.includes('.module.scss'),       //только файлы scss в названи которых есть слово "module" обрабатываються как модуль-css 
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      "sass-loader",  // Compiles Sass to CSS
    ],
  };

  return [typescriptLoader, cssLoader]
}