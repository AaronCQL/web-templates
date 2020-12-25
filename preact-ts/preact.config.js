module.exports = (config, env, helpers) => {
  // enable use of absolute path
  config.resolve.modules.push(env.src);

  return config;
};
