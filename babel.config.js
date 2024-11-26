module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env', // Tên module bạn sẽ sử dụng để import biến môi trường
          path: '.env', // Tên file chứa biến môi trường
        },
      ],
    ],
  };
};
