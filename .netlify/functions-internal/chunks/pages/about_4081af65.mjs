import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_7b0539fb.mjs';
import 'clsx';
import { $ as $$Layout } from './100-questions_7f9eb0b1.mjs';
import 'html-escaper';
/* empty css                           */
const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sui." }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div id="about"><br>
Hi, I'm Hamidah. I’m a student at <a href="https://www.mcgill.ca/" target="_blank">McGill</a> studying Computer Science and fellow at the <a href="https://progress.institute/" target="_blank">Institute for Progress</a>.<br><br>
Here's what I'm <a href="https://curius.app/hamidah-oderinwale" target="_blank">reading on the internet</a> and <a href="https://open.spotify.com/user/oderinwaleh?si=f9071f63689c40f4" target="_blank">the music</a> I'm listening to.
<br></div>` })}`;
}, "/Users/hamidahoderinwale/regular-ring/src/pages/about.astro", void 0);

const $$file = "/Users/hamidahoderinwale/regular-ring/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
