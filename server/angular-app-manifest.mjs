
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/kumawatamit587/Make-github-profile/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/kumawatamit587/Make-github-profile/overview",
    "route": "/kumawatamit587/Make-github-profile"
  },
  {
    "renderMode": 2,
    "route": "/kumawatamit587/Make-github-profile/overview"
  },
  {
    "renderMode": 2,
    "route": "/kumawatamit587/Make-github-profile/repositories"
  },
  {
    "renderMode": 2,
    "route": "/kumawatamit587/Make-github-profile/projects"
  },
  {
    "renderMode": 2,
    "route": "/kumawatamit587/Make-github-profile/packages"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 499, hash: '64546ee48055e25c3d0c1f7a68df1404fdf274e7e13ced0b016db9132326cf75', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '7df51e649077e6591cde0b95f23444883bb821a8aca3024bfa13a5810d0726db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'overview/index.html': {size: 8038, hash: '4f8341f7168a53bea35ef79164aff64077e603c74eb3f40ac7fb53aacb4168d4', text: () => import('./assets-chunks/overview_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 9207, hash: '3b9c030fbe46deb99473a5b4b107d0c396221bf3f46da3d982f16d77da6a4739', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'repositories/index.html': {size: 10261, hash: '3163a5f90f8b1f804763fcf90bc25b6c1d78c63008c595a10bcb48d872dadf55', text: () => import('./assets-chunks/repositories_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 12190, hash: 'ceccd216f3bdb980765f247989adc8b2408814c521b70b28cbd84edfbbe1b8fb', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
