import { d as createComponent, r as renderTemplate, h as renderComponent, u as unescapeHTML } from '../astro_7b0539fb.mjs';
import 'clsx';
import { $ as $$Layout } from './100-questions_7f9eb0b1.mjs';
import 'html-escaper';
/* empty css                           */
const html = "<h2>Conviction</h2>\n<p><i>July 2022</i></p>\n<p>I feel like I have very little conviction, but I do feel like I have some sense of agency (the ability to be independent and make decisions for myself). These things are not mutually exclusive. <b> Conviction requires that you remain persistent in the manifestation of your beliefs despite contradiction.</b> I’ve had little contradiction because I tend to not share my plans, ideas or thoughts. I’m sure that if I did, I would have more lash back, but I don’t. I kind of just do things and people accept them? Is this because I refuse to have conviction and choose to travel easier paths or maybe people just don’t care as long as it doesn’t interfere with their lives too much (which is something I keep in mind before making decisions)?</p>\n<p>I generally have high openness which manifests as often re-assessing my beliefs mid-conversation and deferring to the opinions of experts, especially if I’ve read their works previously and they have high reasoning transparency that I can align with. I do tend to be less practical and more impulsive.</p>\n<p>Why is having little conviction bad? I will and do have to participate in institutions and systems that are rigid, sometimes to their own detriment. In order to make progress, you need to have conviction because you’re changing systems that already exist. Blazing new paths don’t really exist, but not following the majority tends to be easier, but are the outcomes worse? Looking at the revolutions of science and the civil rights movement – they both required immense conviction but didn’t completely invent the agenda in terms of institutional design for example.</p>";

				const frontmatter = {"title":"Conviction","layout":"../../layouts/Layout.astro"};
				const file = "/Users/hamidahoderinwale/regular-ring/src/pages/posts/conviction.md";
				const url = "/posts/conviction";
				function rawContent() {
					return "\n<h2>Conviction</h2>\n<p><i>July 2022</i></p>\n\nI feel like I have very little conviction, but I do feel like I have some sense of agency (the ability to be independent and make decisions for myself). These things are not mutually exclusive. <b> Conviction requires that you remain persistent in the manifestation of your beliefs despite contradiction.</b> I’ve had little contradiction because I tend to not share my plans, ideas or thoughts. I’m sure that if I did, I would have more lash back, but I don’t. I kind of just do things and people accept them? Is this because I refuse to have conviction and choose to travel easier paths or maybe people just don’t care as long as it doesn’t interfere with their lives too much (which is something I keep in mind before making decisions)?\n\nI generally have high openness which manifests as often re-assessing my beliefs mid-conversation and deferring to the opinions of experts, especially if I’ve read their works previously and they have high reasoning transparency that I can align with. I do tend to be less practical and more impulsive.\n\nWhy is having little conviction bad? I will and do have to participate in institutions and systems that are rigid, sometimes to their own detriment. In order to make progress, you need to have conviction because you’re changing systems that already exist. Blazing new paths don’t really exist, but not following the majority tends to be easier, but are the outcomes worse? Looking at the revolutions of science and the civil rights movement – they both required immense conviction but didn’t completely invent the agenda in terms of institutional design for example.";
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
