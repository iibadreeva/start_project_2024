module.exports = {
  // presets: [
  //   [
  //     "@babel/preset-env",
  //     // {
  //     //   useBuiltIns: "entry",
  //     //   corejs: "3.22",
  //     // },
  //     {
  //       targets: {
  //         browsers: [
  //           "Chrome >= 52",
  //           "FireFox >= 44",
  //           "Safari >= 7",
  //           "Explorer 11",
  //           "last 4 Edge versions",
  //         ],
  //       },
  //     },
  //   ],
  //   "@babel/preset-typescript",
  //   "@babel/preset-react",
  //   "es2015",
  //   "stage-0",
  // ],
  presets: ["@babel/preset-typescript", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "emotion",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    [
      "@babel/transform-runtime",
      {
        regenerator: true,
      },
    ],
  ],
  env: {
    test: {
      presets: [
        "@babel/preset-typescript",
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
              ie: "11",
              chrome: "38",
            },
          },
        ],
      ],
    },
  },
};
