import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_7231549a.mjs';

const _page0  = () => import('./chunks/generic_6e56fcba.mjs');
const _page1  = () => import('./chunks/index_188ba4a7.mjs');
const _page2  = () => import('./chunks/graphql_fa1d9dd4.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/api/graphql.ts", _page2]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"a9bd565c-f1d2-444b-883f-f3aeccde1c7a"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
