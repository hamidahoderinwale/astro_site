import { d as createComponent, r as renderTemplate, h as renderComponent, u as unescapeHTML } from '../astro_7b0539fb.mjs';
import 'clsx';
import { $ as $$Layout } from './100-questions_7f9eb0b1.mjs';
import 'html-escaper';
/* empty css                           */
const html = "<h2> Inertia </h2>\n<p><i>May 8, 2023</i></p>\n<hr>\n<p>I was listening to one of my newest favorite songs, “Autre Cote” by Elijah Fox - an exceptional contemporary pianist. I started tearing up while trying to put finish my Politics assignment.</p>\n<p>So cringe. Those who have met me in real life, know this is the peak representation of the duality of man lol.</p>\n<p>I think there’s many confounders here. I finally confirmed which university I’ll be attending next year. For once, I didn’t choose the least economically straining option and while it’s still affordable. Being independently responsible for post-secondary comes with stressors that have been hanging over my head, since I clicked “accept.” I just turned 18 and am now officially an adult, although this doesn’t change much except for allowing me to own a credit card and start contributing to my TFSA. Nevertheless, I’m reflecting on what it means for me to be carried away like this, as emotional inertia seems to be the norm</p>\n<p>This summer, I suspect that the majority of my writing will be off the professional, analytical flavour. I think I’ll embrace this stream of consciousness type writing style. I enjoy reading others and I think as much as I’m a feely-humanities oriented person, I need to get better at true authenticity and being able to articulate it well. Hopefully, some general factorization works itself out and I come to figure out the essence of all these ramblings. Today, let’s discuss vulnerability shall we.</p>\n<p>Vulnerability seems cringe. No one needs to know your bloody business. Vulnerability feels like weakness. Leaving all the possible ways you can be exploited for the world to see. Vulnerability seems shameless. You must present yourself in an appropriate manner, and you decided to overshare! Who gave you the right?</p>\n<p>I generally agree with the sentiment that being too vulnerable too quickly can be harmful. In a perfect world, mutual sharing would build trust, but this requires bonding over shared experiences and the other person being mindful of your feelings. Unfortunately, both of these conditions are not always met, so it’s best to be cautious. However, I’ve found that during times when I felt emotionally stunted, it was because I couldn’t even be honest with myself. I disguised deep discomfort with my future by worrying about trivial things and branding myself as socially awkward when, in reality, I’m simply too scared to put myself out there.</p>";

				const frontmatter = {"title":"Inertia","layout":"../../layouts/Layout.astro"};
				const file = "/Users/hamidahoderinwale/regular-ring/src/pages/posts/inertia.md";
				const url = "/posts/inertia";
				function rawContent() {
					return "\n<h2> Inertia </h2>\n<p><i>May 8, 2023</i></p>\n\n---\n\nI was listening to one of my newest favorite songs, \"Autre Cote\" by Elijah Fox - an exceptional contemporary pianist. I started tearing up while trying to put finish my Politics assignment. \n\nSo cringe. Those who have met me in real life, know this is the peak representation of the duality of man lol. \n\nI think there’s many confounders here. I finally confirmed which university I’ll be attending next year. For once, I didn’t choose the least economically straining option and while it’s still affordable. Being independently responsible for post-secondary comes with stressors that have been hanging over my head, since I clicked “accept.” I just turned 18 and am now officially an adult, although this doesn't change much except for allowing me to own a credit card and start contributing to my TFSA. Nevertheless, I'm reflecting on what it means for me to be carried away like this, as emotional inertia seems to be the norm\n\nThis summer, I suspect that the majority of my writing will be off the professional, analytical flavour. I think I’ll embrace this stream of consciousness type writing style. I enjoy reading others and I think as much as I’m a feely-humanities oriented person, I need to get better at true authenticity and being able to articulate it well. Hopefully, some general factorization works itself out and I come to figure out the essence of all these ramblings. Today, let’s discuss vulnerability shall we.\n\nVulnerability seems cringe. No one needs to know your bloody business. Vulnerability feels like weakness. Leaving all the possible ways you can be exploited for the world to see. Vulnerability seems shameless. You must present yourself in an appropriate manner, and you decided to overshare! Who gave you the right?\n\nI generally agree with the sentiment that being too vulnerable too quickly can be harmful. In a perfect world, mutual sharing would build trust, but this requires bonding over shared experiences and the other person being mindful of your feelings. Unfortunately, both of these conditions are not always met, so it's best to be cautious. However, I've found that during times when I felt emotionally stunted, it was because I couldn't even be honest with myself. I disguised deep discomfort with my future by worrying about trivial things and branding myself as socially awkward when, in reality, I’m simply too scared to put myself out there.\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
