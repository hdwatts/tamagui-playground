const { withTamagui } = require("@tamagui/next-plugin");

module.exports = function (name, { defaultConfig }) {
  let config = {
    ...defaultConfig,
    reactStrictMode: true,
    modularizeImports: {
      "@tamagui/lucide-icons": {
        transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
        skipDefaultConversion: true,
      },
    },
  };

  const tamaguiPlugin = withTamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],
    platform: "web",
    disableExtraction: true,
    useReactNativeWebLite: true,
    // build-time generate CSS styles for better performance
    // we recommend only using this for production so you get reloading during dev mode
    outputCSS:
      process.env.NODE_ENV === "production" ? "./public/tamagui.css" : null,

    // optional advanced settings:

    // set to false if you never call addTheme or updateTheme
    // when combined with outputCSS this saves you 1Kb more bundle size
    doesMutateThemes: true, // default true
  });

  return {
    ...config,
    ...tamaguiPlugin(config),
  };
};
