<script lang="ts">
	import { RevealJsContext, SvelteRevealHMR, simple, notes } from 'svelte-reveal.js';
	import Slides from './slides';
</script>

<RevealJsContext
	options={{
		controls: true,
		progress: true,
		center: true,
		hash: true,
		slideNumber: true,
		width: 1280
	}}
	plugins={[notes]}
	themes={[simple]}
>
	<!-- use this only in dev -->
	<!-- if you forget it, it's not a big deal though -->
	<SvelteRevealHMR />

	{#each Slides as Slide}
		<svelte:component this={Slide} />
	{/each}
</RevealJsContext>
