module.exports = (api: any) => {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['react-native-web']
  };
};