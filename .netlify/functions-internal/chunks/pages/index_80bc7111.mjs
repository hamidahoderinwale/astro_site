import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_7b0539fb.mjs';
import 'clsx';
import { $ as $$Layout } from './100-questions_7f9eb0b1.mjs';
import 'html-escaper';
/* empty css                           */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About", "class": "front-page" }, { "default": ($$result2) => renderTemplate`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">${maybeRenderHead()}<div style="max-width: 65ch; text-align: left;"><br><em><h3 style="margin-bottom: 10px; color: #494850; font-family: 'Baskervville', serif;"> A bonis ad meliora </h3></em></div><div class="one" style="margin-bottom: 8px;"><div><p><b>Welcome!</b></p><br>
Hi, I'm Hamidah. I’m a student at <a href="https://www.mcgill.ca/" target="_blank">McGill</a> studying Computer Science and fellow at the <a href="https://progress.institute/" target="_blank">Institute for Progress</a>.<br><br>
Here's what I'm <a href="https://curius.app/hamidah-oderinwale" target="_blank">reading on the internet</a> and <a href="https://open.spotify.com/user/oderinwaleh?si=f9071f63689c40f4" target="_blank">the music</a> I'm listening to.
<br></div>
Here's what I'm <a href="/blog/">writing</a>, <a href="https://curius.app/hamidah-oderinwale" target="_blank">reading on the internet</a> and <a href="https://open.spotify.com/user/oderinwaleh?si=f9071f63689c40f4" target="_blank">the music</a> I'm listening to.
<br></div><p>------</p><a><b><p>oderinwaleh@gmail.com</p></b></a><em>Hosted on Netlify. Built with Astro.</em>` })}`;
}, "/Users/hamidahoderinwale/regular-ring/src/pages/index.astro", void 0);

const $$file = "/Users/hamidahoderinwale/regular-ring/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
