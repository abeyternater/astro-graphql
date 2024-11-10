import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_e7b109d6.mjs';

const _page0  = () => import('./chunks/generic_6e56fcba.mjs');
const _page1  = () => import('./chunks/index_188ba4a7.mjs');
const _page2  = () => import('./chunks/graphql_fa1d9dd4.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/api/graphql.ts", _page2]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"d8219c94-8bfb-4d2f-94fc-1597f4a679e4"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
