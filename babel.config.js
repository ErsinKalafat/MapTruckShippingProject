module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.tsx',
          '.android.tsx',
          '.ios.ts',
          '.android.ts',
          '.tsx',
          '.ts',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@data': './src/data',
          '@hocs': './src/hocs',
          '@hooks': './src/hooks',
          '@pages': './src/pages',
          '@theme': './src/theme',
          '@app-types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
