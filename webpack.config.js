module.exports = {
  test: /\.svg$/,
  use: [
    {
      loader: "@svgr/webpack",
      options: {
        native: true,
      },
    },
  ],
};
