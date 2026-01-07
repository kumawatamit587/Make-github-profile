
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://kumawatamit587.github.io/Make-github-profile/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Make-github-profile/overview",
    "route": "/Make-github-profile"
  },
  {
    "renderMode": 2,
    "route": "/Make-github-profile/overview"
  },
  {
    "renderMode": 2,
    "route": "/Make-github-profile/repositories"
  },
  {
    "renderMode": 2,
    "route": "/Make-github-profile/projects"
  },
  {
    "renderMode": 2,
    "route": "/Make-github-profile/packages"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 498, hash: '324641ad4065fbf432813bc1bf5f394a704b3929680556277ab0bacc28b09adb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: 'c14149ec41a3ddea0a96a8352ab45c6962ca2018f10820cc4cf56220cc6ad568', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'overview/index.html': {size: 255, hash: '0b5f4c0b5ae187e5614f7b8a74c631b5f6bdee78e63234de1cd5ca636903dd98', text: () => import('./assets-chunks/overview_index_html.mjs').then(m => m.default)},
    'repositories/index.html': {size: 255, hash: '0b5f4c0b5ae187e5614f7b8a74c631b5f6bdee78e63234de1cd5ca636903dd98', text: () => import('./assets-chunks/repositories_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 255, hash: '0b5f4c0b5ae187e5614f7b8a74c631b5f6bdee78e63234de1cd5ca636903dd98', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 255, hash: '0b5f4c0b5ae187e5614f7b8a74c631b5f6bdee78e63234de1cd5ca636903dd98', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
