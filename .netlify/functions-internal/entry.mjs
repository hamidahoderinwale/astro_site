import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_1a4bfc75.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_76475cf7.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_6514595b.mjs');
const _page1  = () => import('./chunks/index_c07f0916.mjs');
const _page2  = () => import('./chunks/about_87f4ddd7.mjs');
const _page3  = () => import('./chunks/environmentaldeterminism_08904a8b.mjs');
const _page4  = () => import('./chunks/criticallyunderstanding_abb92e77.mjs');
const _page5  = () => import('./chunks/understandinghumility_d44bc1d1.mjs');
const _page6  = () => import('./chunks/immunityisafallacy_2d475c2b.mjs');
const _page7  = () => import('./chunks/digitalnetworking_220869da.mjs');
const _page8  = () => import('./chunks/iwantafrenchsalon_12ed6c51.mjs');
const _page9  = () => import('./chunks/frenchdiscomfort_9f75a046.mjs');
const _page10  = () => import('./chunks/philosophybanter_8d99192b.mjs');
const _page11  = () => import('./chunks/myhomoeconomics_847025c3.mjs');
const _page12  = () => import('./chunks/100-questions_f65fa020.mjs');
const _page13  = () => import('./chunks/poetrydefence_11cb8c80.mjs');
const _page14  = () => import('./chunks/stupidwriting_a7ae5496.mjs');
const _page15  = () => import('./chunks/onlegibility_ad9ca022.mjs');
const _page16  = () => import('./chunks/rabbit-duck_4517be7c.mjs');
const _page17  = () => import('./chunks/aesthetics_78e0f87e.mjs');
const _page18  = () => import('./chunks/conviction_5d27b520.mjs');
const _page19  = () => import('./chunks/indefence_713c3178.mjs');
const _page20  = () => import('./chunks/rustlings_113a0b2d.mjs');
const _page21  = () => import('./chunks/stubborn_6b3ae1d3.mjs');
const _page22  = () => import('./chunks/bidding_1c1a760e.mjs');
const _page23  = () => import('./chunks/inertia_65868471.mjs');
const _page24  = () => import('./chunks/learned_0d0dc1eb.mjs');
const _page25  = () => import('./chunks/nigeria_af577551.mjs');
const _page26  = () => import('./chunks/summer_691add86.mjs');
const _page27  = () => import('./chunks/latin_0cc3c5eb.mjs');
const _page28  = () => import('./chunks/blog_2672dbfc.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/about.astro", _page2],["src/pages/posts/environmentaldeterminism.md", _page3],["src/pages/posts/criticallyunderstanding.md", _page4],["src/pages/posts/understandinghumility.md", _page5],["src/pages/posts/immunityisafallacy.md", _page6],["src/pages/posts/digitalnetworking.md", _page7],["src/pages/posts/iwantafrenchsalon.md", _page8],["src/pages/posts/frenchdiscomfort.md", _page9],["src/pages/posts/philosophybanter.md", _page10],["src/pages/posts/myhomoeconomics.md", _page11],["src/pages/posts/100-questions.md", _page12],["src/pages/posts/poetrydefence.md", _page13],["src/pages/posts/stupidwriting.md", _page14],["src/pages/posts/onlegibility.md", _page15],["src/pages/posts/rabbit-duck.md", _page16],["src/pages/posts/aesthetics.md", _page17],["src/pages/posts/conviction.md", _page18],["src/pages/posts/indefence.md", _page19],["src/pages/posts/rustlings.md", _page20],["src/pages/posts/stubborn.md", _page21],["src/pages/posts/bidding.md", _page22],["src/pages/posts/inertia.md", _page23],["src/pages/posts/learned.md", _page24],["src/pages/posts/nigeria.md", _page25],["src/pages/posts/summer.md", _page26],["src/pages/posts/latin.md", _page27],["src/pages/blog.astro", _page28]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
