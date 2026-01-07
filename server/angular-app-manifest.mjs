
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
    'index.csr.html': {size: 498, hash: '0668ec28256e960dedee594511329c876dcd75e6b0d94c215a809efcd4929a7f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '8902b2413089e321bb841254cab12639a6a82dea940f42dacecee7fd7e12f5ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'repositories/index.html': {size: 5769, hash: 'f4be09ba979777909d9d65cab8b219c621f03d7fd1440512a89be669bedef5e8', text: () => import('./assets-chunks/repositories_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 5758, hash: 'f2533d4bc14f77e7a70e3a6ebed8471ad1b24ce96475c52c4305288846c7b5bf', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'packages/index.html': {size: 5758, hash: 'af0d0cd9dd6e8a20209f8c6f6e2b7a37a7e6445b5fae230a7feaa23c97416f98', text: () => import('./assets-chunks/packages_index_html.mjs').then(m => m.default)},
    'overview/index.html': {size: 8037, hash: '3151df07cca787c70a4844d15efecb7ce48f8e75a17eb3b91882681a3f6a8b67', text: () => import('./assets-chunks/overview_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
