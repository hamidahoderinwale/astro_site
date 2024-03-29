import { d as createComponent, r as renderTemplate, h as renderComponent, u as unescapeHTML } from '../astro_7b0539fb.mjs';
import 'clsx';
import { $ as $$Layout } from './100-questions_7f9eb0b1.mjs';
import 'html-escaper';
/* empty css                           */
const html = "<h2>Edgy Bidding</h2>\n<p><i>May 27, 2023</i></p>\n<p>Unfinished note</p>\n<hr>\n<p>So the other day, I fell down an auction theory rabbit hole. One of my first encounters to bidding games started with the ultimatum game. In the game, a set amount of “divisible” currency is asked to be negotiated between the two players. The proposer (player 1) is tasked with splitting this sum with the responder (player 2). Once the proposer has come up with the amount they want to endow upon the responder, they propose it to the responder, who can decide to accept or reject the amount. The interesting nuance here is that, despite the amount chosen to be split, if the responder rejects the amount, they both receive nothing (the proposer included). So now we have this game that is grappling with objective fairness and the spite of each individual. We can determine Nash equilibria and determine what fairness is in the rational and objective sense, but people deviate from that. As a responder, you “win” by simply accepting whatever is offered and the “proposer” maximizes their win by proposing the lowest offer to the responder.</p>\n<p>Many studies centred around the game delve into demographic details that impact gameplay; I think these empirics are fun at the very least and might give some (not super generalizable) insight on what may happen in relevant real-world bids, but let’s delve into the iterative models of the game. So the Ultimatum Game is quite simple, and as such, its iterative model involves simply playing more rounds. How does this change dynamics? Well, now you have some information on your player, but that’s not the most helpful. Knowing you have more tries is the crux here. An offer obscenely too low, I can reject? You still “lose” from that round, but you can express disagreement with “unfairness” while hurting their own gains. This form of the game on an infinite loop is indeed positive-sum, but isn’t it odd that it feels more complete? The semi-rational option to defect allows competition - which feels oddly requisite - but for what? What in our evolutionary makeup makes this edginess feel so necessary?</p>";

				const frontmatter = {"title":"Edgy Bidding","layout":"../../layouts/Layout.astro"};
				const file = "/Users/hamidahoderinwale/regular-ring/src/pages/posts/bidding.md";
				const url = "/posts/bidding";
				function rawContent() {
					return "\n<h2>Edgy Bidding</h2>\n<p><i>May 27, 2023</i></p>\n\nUnfinished note \n\n--- \n\nSo the other day, I fell down an auction theory rabbit hole. One of my first encounters to bidding games started with the ultimatum game. In the game, a set amount of \"divisible\" currency is asked to be negotiated between the two players. The proposer (player 1) is tasked with splitting this sum with the responder (player 2). Once the proposer has come up with the amount they want to endow upon the responder, they propose it to the responder, who can decide to accept or reject the amount. The interesting nuance here is that, despite the amount chosen to be split, if the responder rejects the amount, they both receive nothing (the proposer included). So now we have this game that is grappling with objective fairness and the spite of each individual. We can determine Nash equilibria and determine what fairness is in the rational and objective sense, but people deviate from that. As a responder, you \"win\" by simply accepting whatever is offered and the \"proposer\" maximizes their win by proposing the lowest offer to the responder.\n\nMany studies centred around the game delve into demographic details that impact gameplay; I think these empirics are fun at the very least and might give some (not super generalizable) insight on what may happen in relevant real-world bids, but let's delve into the iterative models of the game. So the Ultimatum Game is quite simple, and as such, its iterative model involves simply playing more rounds. How does this change dynamics? Well, now you have some information on your player, but that's not the most helpful. Knowing you have more tries is the crux here. An offer obscenely too low, I can reject? You still \"lose\" from that round, but you can express disagreement with \"unfairness\" while hurting their own gains. This form of the game on an infinite loop is indeed positive-sum, but isn't it odd that it feels more complete? The semi-rational option to defect allows competition - which feels oddly requisite - but for what? What in our evolutionary makeup makes this edginess feel so necessary?";
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
