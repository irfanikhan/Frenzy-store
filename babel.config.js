module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      // "module-resolver",
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          src: "./src",
          "@pages": "./src/pages",
          "@common": "./src/common",
          "@styles": "./src/styles",
          "@utils": "./src/utils",
        },
      },
    ],
  ]
};
