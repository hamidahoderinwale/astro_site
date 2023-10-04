import { d as createComponent, r as renderTemplate, h as renderComponent, u as unescapeHTML } from '../astro_7b0539fb.mjs';
import 'clsx';
import { $ as $$Layout } from './100-questions_7f9eb0b1.mjs';
import 'html-escaper';
/* empty css                           */
const html = "<h2>Immunity is a Fallacy: Groupthink and Cults</h2>\n<p><i>August 2022</i></p>\n<p>Cults are really interesting. Aside from the memetic cautionary tale of “not drinking the Kool-Aid”, generally learning about the nuances of the most notable of cults has helped me idealize how the most (seemingly) well-adjusted, well-respected and well-off of society can end up in situations, doing things that are completely contrary to what beneficially contributes to the human state all as a result of being in a group?</p>\n<h4><b>No One is Safe</b></h4>\n<p>In true reductionist reasoning, I thought about the groups I was a part of, the level of intelligence I had, and my frequency of interaction with seemingly charismatic people, and I wondered, have I ever been in a cult? Although, this line of thinking is probably irrational – I do think more people should be aware of how little control we have over our decisions and the way we perceive the world – from understanding our qualia to understanding how we fail to manifest the autonomy we seemingly hold.</p>\n<p>In the 1960s, Jim Jones – the Elvis impersonating, preacher from Indiana started a cult which would be known as the People’s Church.</p>\n<p>Bafflingly he was able to amass groups of seemingly well-adjusted individuals to move from the United States to Jonestown, Guyana, where their greatest mental flaw would ultimately lead to their death. Amongst the hundreds dead, many were seemingly intelligent by traditional metrics: lawyers, doctors and engineers.</p>\n<p>As commendable it is for a man from lowly Indiana to acquire the resources to complete such a feat: building an almost 1000-person commune in Guyana. I’m more intrigued by the idea that hundreds saw no warning signs, or red flags, and decided it was a good idea or at least ignored all the bad signals.</p>\n<h4><b>Epistemological Individualism</b></h4>\n<p>Although I wouldn’t put the majority of situations where one would find themselves succumbing to groupthink as extreme or fatal as the aforementioned example. Many times our inability to develop and maintain our epistemological individualism leaves us in a state of vulnerability, unidentifiable to ourselves.</p>\n<p>Groupthink is a term that coins the exact opposite of epistemological individualism. Ray Wallis, a sociologist coined the term, ultimately describing the (in)ability of people to reason their own views and lead their lives with conviction. People in cults were not the most susceptible due to their intelligence but due to the extent to which they had this skill. People with low epistemological individualism can be manipulated to align with “vague boundaries and fluctuating belief systems”.</p>\n<p>My experience with groupthink is not that different from others, which signals the widespread absence of this quality in the majority. Many institutions highly value the ability to conform and this courtesy extends to beliefs as well. This evolutionary psychological trait often puts us in suboptimal conditions, but there are ways to interact with the world that would help us to work towards a better version of ourselves and hold ideologies that we can truly call our own.</p>";

				const frontmatter = {"title":"Immunity is a Fallacy: Groupthink and Cults","layout":"../../layouts/Layout.astro"};
				const file = "/Users/hamidahoderinwale/regular-ring/src/pages/posts/immunityisafallacy.md";
				const url = "/posts/immunityisafallacy";
				function rawContent() {
					return "\n<h2>Immunity is a Fallacy: Groupthink and Cults</h2>\n<p><i>August 2022</i></p>\n\nCults are really interesting. Aside from the memetic cautionary tale of “not drinking the Kool-Aid”, generally learning about the nuances of the most notable of cults has helped me idealize how the most (seemingly) well-adjusted, well-respected and well-off of society can end up in situations, doing things that are completely contrary to what beneficially contributes to the human state all as a result of being in a group?\n\n<h4><b>No One is Safe</b></h4>\n \nIn true reductionist reasoning, I thought about the groups I was a part of, the level of intelligence I had, and my frequency of interaction with seemingly charismatic people, and I wondered, have I ever been in a cult? Although, this line of thinking is probably irrational – I do think more people should be aware of how little control we have over our decisions and the way we perceive the world – from understanding our qualia to understanding how we fail to manifest the autonomy we seemingly hold.\n\nIn the 1960s, Jim Jones – the Elvis impersonating, preacher from Indiana started a cult which would be known as the People’s Church.\n\nBafflingly he was able to amass groups of seemingly well-adjusted individuals to move from the United States to Jonestown, Guyana, where their greatest mental flaw would ultimately lead to their death. Amongst the hundreds dead, many were seemingly intelligent by traditional metrics: lawyers, doctors and engineers.\n\nAs commendable it is for a man from lowly Indiana to acquire the resources to complete such a feat: building an almost 1000-person commune in Guyana. I’m more intrigued by the idea that hundreds saw no warning signs, or red flags, and decided it was a good idea or at least ignored all the bad signals.\n\n<h4><b>Epistemological Individualism</b></h4>\n\nAlthough I wouldn’t put the majority of situations where one would find themselves succumbing to groupthink as extreme or fatal as the aforementioned example. Many times our inability to develop and maintain our epistemological individualism leaves us in a state of vulnerability, unidentifiable to ourselves.\n\nGroupthink is a term that coins the exact opposite of epistemological individualism. Ray Wallis, a sociologist coined the term, ultimately describing the (in)ability of people to reason their own views and lead their lives with conviction. People in cults were not the most susceptible due to their intelligence but due to the extent to which they had this skill. People with low epistemological individualism can be manipulated to align with “vague boundaries and fluctuating belief systems”.\n\nMy experience with groupthink is not that different from others, which signals the widespread absence of this quality in the majority. Many institutions highly value the ability to conform and this courtesy extends to beliefs as well. This evolutionary psychological trait often puts us in suboptimal conditions, but there are ways to interact with the world that would help us to work towards a better version of ourselves and hold ideologies that we can truly call our own.";
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
