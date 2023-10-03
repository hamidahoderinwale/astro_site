import { d as createComponent, r as renderTemplate, h as renderComponent, u as unescapeHTML } from '../astro_7b0539fb.mjs';
import 'clsx';
import { $ as $$Layout } from './100-questions_7f9eb0b1.mjs';
import 'html-escaper';
/* empty css                           */
const html = "<h2>Critically Understanding School</h2>\n<p><i>October 22, 2022</i></p>\n<p><i> I plan to further expand on the thoughts below, but hopefully, I can lay out some initial thoughts here. </i></p>\n<p>Many of the blogs that I read are run by authors who have seemingly rebellious but tactically not very unique takes on school. This looks like, your likely smarter than average – with the credentials to prove it – individual, with success on traditional paradigms (context-dependent). Your (formerly) high-achieving student – who after grappling with some thoughts throughout their academic career, has come to the conclusion that schools aren’t very good. For the most part, I agree with them, the school system in the Western world is a shame considering the resources we delegate to the cause.</p>\n<blockquote>\n<p>Lots of bright students who are ushered onto paths that leave them disillusioned walking off the graduation stage.\nStudents, falsely labelled, who fall behind and distance themselves from school.\nUnique holders of talent, who creatively “succeed” and do well on self-defined axes <i> in spite of the institutions that take their attention for hours a day. </i></p>\n</blockquote>\n<p>Regardless, some of the narratives out there, give advice that isn’t generalizable. I think, for the most part, most students/young people know this, but it feels important to iterate.  Many talented people I’m around would at the very least, somewhat agree with the statements above, many of which independently undergo academic disillusionment. But there is something to say about the comfort that comes with a random stranger – telling you sitting in your very boring class just isn’t worth it. You have so much potential. You’re wasting time doing this thing, which does not feel meaningful actionably and in alignment with your greater goals.</p>\n<p>But like many things there’s nuance, I hope to explore. I covered this very briefly in a library I’m trying to make, which has one page on <a href=\"https://bettertrajectories.notion.site/Gap-Years-318c02fa45c1454f814ce5e019843710\">gap years</a>, but I want to explore this further.</p>\n<p>School was the first institution I had to learn to navigate. Although, I don’t remember much of kindergarten. Much of elementary school was regimented skill-building, and unironically the most crucial to my development. Like truly, you mess up pedagogy between the ages of 4-12 and you’ve very well messed up a young person’s prospects of productively engaging with society. Obviously, building the fundamentals of the ability to contribute to society can be taught outside of the school environment. For many, many students the alternatives just aren’t as good.</p>";

				const frontmatter = {"title":"Critically Understanding School","layout":"../../layouts/Layout.astro"};
				const file = "/Users/hamidahoderinwale/regular-ring/src/pages/posts/criticallyunderstanding.md";
				const url = "/posts/criticallyunderstanding";
				function rawContent() {
					return "\n<h2>Critically Understanding School</h2>\n<p><i>October 22, 2022</i></p>\n\n<i> I plan to further expand on the thoughts below, but hopefully, I can lay out some initial thoughts here. </i>\n\nMany of the blogs that I read are run by authors who have seemingly rebellious but tactically not very unique takes on school. This looks like, your likely smarter than average – with the credentials to prove it – individual, with success on traditional paradigms (context-dependent). Your (formerly) high-achieving student – who after grappling with some thoughts throughout their academic career, has come to the conclusion that schools aren’t very good. For the most part, I agree with them, the school system in the Western world is a shame considering the resources we delegate to the cause. \n\n\n   > Lots of bright students who are ushered onto paths that leave them disillusioned walking off the graduation stage.\n   > Students, falsely labelled, who fall behind and distance themselves from school.\n   > Unique holders of talent, who creatively “succeed” and do well on self-defined axes <i> in spite of the institutions that take their attention for hours a day. </i>\n\n\nRegardless, some of the narratives out there, give advice that isn’t generalizable. I think, for the most part, most students/young people know this, but it feels important to iterate.  Many talented people I’m around would at the very least, somewhat agree with the statements above, many of which independently undergo academic disillusionment. But there is something to say about the comfort that comes with a random stranger – telling you sitting in your very boring class just isn’t worth it. You have so much potential. You’re wasting time doing this thing, which does not feel meaningful actionably and in alignment with your greater goals.\n\nBut like many things there’s nuance, I hope to explore. I covered this very briefly in a library I’m trying to make, which has one page on <a href=\"https://bettertrajectories.notion.site/Gap-Years-318c02fa45c1454f814ce5e019843710\">gap years</a>, but I want to explore this further.\n\nSchool was the first institution I had to learn to navigate. Although, I don’t remember much of kindergarten. Much of elementary school was regimented skill-building, and unironically the most crucial to my development. Like truly, you mess up pedagogy between the ages of 4-12 and you’ve very well messed up a young person’s prospects of productively engaging with society. Obviously, building the fundamentals of the ability to contribute to society can be taught outside of the school environment. For many, many students the alternatives just aren’t as good.";
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
