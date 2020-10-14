const withSourceMaps = require('@zeit/next-source-maps')();
const withPWA = require('next-pwa');

module.exports = withPWA(
  withSourceMaps({
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      register: true,
    },

    crossOrigin: 'anonymous',
    target: 'serverless',
    experimental: {
      modern: true,
    },
    env: {
      VERSION: require('./package.json').version,
    },
    webpack: config => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  { removeViewBox: false },
                  { removeDimensions: true },
                  {
                    prefixIds: {
                      delim: '_',
                      prefixIds: true,
                      prefixClassNames: false,
                    },
                  },
                ],
              },
            },
          },
        ],
      });

      return config;
    },
  })
);
