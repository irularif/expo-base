module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        'babel-preset-expo',
        {
          jsxImportSource: 'nativewind',
        },
      ],
      'nativewind/babel',
    ],

    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@app': './app',
            '@pkgs/ui': './pkgs/ui',
            '@pkgs/constants': './pkgs/constants',
            '@pkgs/hooks': './pkgs/hooks',
            '@pkgs/providers': './pkgs/providers',
            '@pkgs/config': './pkgs/config',
            '@pkgs/utils': './pkgs/utils',
            '@assets': './app/assets',
            'tailwind.config': './tailwind.config.js',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      ],
    ],
  };
};
