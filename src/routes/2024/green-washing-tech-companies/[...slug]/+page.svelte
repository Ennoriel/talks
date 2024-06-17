<script lang="ts">
	import {
		RevealJsContext,
		SvelteRevealHMR,
		black,
		monokai,
		highlight,
		markdown,
		notes
	} from 'svelte-reveal.js';
	import * as Slide from './slides';
</script>

<RevealJsContext
	options={{
		controls: true,
		progress: true,
		center: true,
		hash: true
	}}
	plugins={[highlight, markdown, notes]}
	themes={[black, monokai]}
>
	<!-- use this only in dev -->
	<!-- if you forget it, it's not a big deal though -->
	<SvelteRevealHMR />

	<Slide.Title />
</RevealJsContext>
