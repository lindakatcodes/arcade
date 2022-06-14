import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), svelte(), solid()]
});