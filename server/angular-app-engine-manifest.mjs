
export default {
  basePath: 'https://github.com/kumawatamit587/Make-github-profile',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
