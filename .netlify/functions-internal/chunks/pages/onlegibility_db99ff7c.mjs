import { d as createComponent, r as renderTemplate, h as renderComponent, u as unescapeHTML } from '../astro_7b0539fb.mjs';
import 'clsx';
import { $ as $$Layout } from './100-questions_7f9eb0b1.mjs';
import 'html-escaper';
/* empty css                           */
const html = "<h2>On Legibility</h2>\n<p><i>November 16, 2022</i></p>\n<p>I’m really disappointed that being a student was a personal means to an end before it looked like a worthwhile journey on its own – learning that is. Although I’m relatively young, I’m somewhat disappointed that I didn’t reach this resolution sooner. At a point where my brain was more malleable. My environment was more conducive to learning weird topics in disparate fields. At a time before the transactional benefit of “contributing to society” felt so totalizing. </p>\n<p>I was tempted to plan my future degree to a T, optimizing my credit hours. Efficiency so I could spend the latter half of my four years in interviews and tailoring my resume for jobs. Doing classes in my first year that I knew I could do well in, with content covering work in research that I already have experience supporting; so, that I can finesse a really great research internship. So I can get into a really good graduate school program. So that I could do something?</p>\n<p>Ultimately, I don’t hold this notion of planning, optimizing, and scheduling to be appealing anymore. Learning as a virtue seems valuable enough, that working towards this aim, with a career being instrumental seems worthwhile. </p>\n<p>At ESPR, I sat in on a class. In this class, we discussed what it meant to be on rails. At some point during the liberties of early childhood, we’re exposed to tracks. Tracks that through liberal paternalism, incentives and social pressure, we’d be pushed towards. Many of us were told that not only did these tracks exist, but that we would be really good at being on them: with our grades, extracurriculars and glowing teacher recommendations to prove it. This class was a verbal expression of something I always felt to be true. That there were other ways to approach life. Off-rail paths meant that you could move in any direction in ‘n’ dimensions – magnitude and direction at your discretion. This seemed right, but looking around at those who were not currently on rails, new rails began to emerge. Goodhart-ing at its finest. Although I don’t think illegibility is something to hold as a career value on its own, it’s something I want to pursue.</p>\n<p>Growing up, I dabbled in this. Choosing the areas of lowest concentration – knowing that an ability to emerge into my own was possible with a lot less friction. Although, generally this means that you face the trade-off of interestingness and legibility. For the trailblazers in their respective fields, they were originally drawn to their fields of study for their interestingness but their legibility to the outside world likely “suffered” as a result. Fewer people in their social circles understood their “whys” and as such, they were the outsiders amongst their peers, but still managed to push frontiers – (mainly) benefiting society as a whole.</p>";

				const frontmatter = {"title":"On Legibility","layout":"../../layouts/Layout.astro"};
				const file = "/Users/hamidahoderinwale/regular-ring/src/pages/posts/onlegibility.md";
				const url = "/posts/onlegibility";
				function rawContent() {
					return "\n<h2>On Legibility</h2>\n<p><i>November 16, 2022</i></p>\n\n\nI’m really disappointed that being a student was a personal means to an end before it looked like a worthwhile journey on its own – learning that is. Although I’m relatively young, I’m somewhat disappointed that I didn’t reach this resolution sooner. At a point where my brain was more malleable. My environment was more conducive to learning weird topics in disparate fields. At a time before the transactional benefit of “contributing to society” felt so totalizing. \n\nI was tempted to plan my future degree to a T, optimizing my credit hours. Efficiency so I could spend the latter half of my four years in interviews and tailoring my resume for jobs. Doing classes in my first year that I knew I could do well in, with content covering work in research that I already have experience supporting; so, that I can finesse a really great research internship. So I can get into a really good graduate school program. So that I could do something?\n\nUltimately, I don’t hold this notion of planning, optimizing, and scheduling to be appealing anymore. Learning as a virtue seems valuable enough, that working towards this aim, with a career being instrumental seems worthwhile. \n\nAt ESPR, I sat in on a class. In this class, we discussed what it meant to be on rails. At some point during the liberties of early childhood, we’re exposed to tracks. Tracks that through liberal paternalism, incentives and social pressure, we’d be pushed towards. Many of us were told that not only did these tracks exist, but that we would be really good at being on them: with our grades, extracurriculars and glowing teacher recommendations to prove it. This class was a verbal expression of something I always felt to be true. That there were other ways to approach life. Off-rail paths meant that you could move in any direction in ‘n’ dimensions – magnitude and direction at your discretion. This seemed right, but looking around at those who were not currently on rails, new rails began to emerge. Goodhart-ing at its finest. Although I don’t think illegibility is something to hold as a career value on its own, it’s something I want to pursue.\n\nGrowing up, I dabbled in this. Choosing the areas of lowest concentration – knowing that an ability to emerge into my own was possible with a lot less friction. Although, generally this means that you face the trade-off of interestingness and legibility. For the trailblazers in their respective fields, they were originally drawn to their fields of study for their interestingness but their legibility to the outside world likely “suffered” as a result. Fewer people in their social circles understood their “whys” and as such, they were the outsiders amongst their peers, but still managed to push frontiers – (mainly) benefiting society as a whole.";
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
