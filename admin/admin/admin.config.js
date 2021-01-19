module.exports = {
  webpack: (config, webpack) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    // throw 'test'
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    config.optimization.minimize = false

    return config;
  },
};
