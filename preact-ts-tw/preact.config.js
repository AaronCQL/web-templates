module.exports = (config, env, helpers) => {
  // if building for production, set NODE_ENV for tailwind to purge unused css
  process.env.NODE_ENV = env.production ? "production" : "development";

  // add tailwind to the postcss-loader
  const postCssLoaders = helpers.getLoadersByName(config, "postcss-loader");
  postCssLoaders.forEach(({ loader }) => {
    loader.options.plugins.unshift(require("tailwindcss"));
  });

  return config;
};
