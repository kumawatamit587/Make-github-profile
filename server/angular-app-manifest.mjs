
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/overview",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/overview"
  },
  {
    "renderMode": 2,
    "route": "/repositories"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/packages"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 446, hash: '3930b399fe9429930c74ce36028f8068de189047e9d54899d88e4d9693e9271c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: '2e408fc8426dd661febee6a1542fa50f7afca3c245e7124f7e192b53996d4850', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 255, hash: '0b5f4c0b5ae187e5614f7b8a74c631b5f6bdee78e63234de1cd5ca636903dd98', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'overview/index.html': {size: 255, hash: '0b5f4c0b5ae187e5614f7b8a74c631b5f6bdee78e63234de1cd5ca636903dd98', text: () => import('./assets-chunks/overview_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 255, hash: '0b5f4c0b5ae187e5614f7b8a74c631b5f6bdee78e63234de1cd5ca636903dd98', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'repositories/index.html': {size: 255, hash: '0b5f4c0b5ae187e5614f7b8a74c631b5f6bdee78e63234de1cd5ca636903dd98', text: () => import('./assets-chunks/repositories_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
