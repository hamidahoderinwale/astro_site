export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/100-questions_7f9eb0b1.mjs').then(n => n._);

export { page };
