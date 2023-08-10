import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";

export function getReadingTime(content) {
  if (!content) return;
  // Do something
}