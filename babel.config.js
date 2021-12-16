module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      "inline-dotenv",
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@navigation": "./src/navigation",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
            "@theme": "./src/theme",
            "@shared": "./src/shared",
            "@hooks": "./src/hooks",
          },
        },
      ],
    ],
  };
};
