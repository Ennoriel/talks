<script lang="ts">
	import { Notes, Slide } from 'svelte-reveal.js';

	export let src: string;
	export let companySrc: string;
	export let text: string;

	let reveal = false;
</script>

<Slide>
	<div>
		<button on:click|preventDefault={() => (reveal = true)}>
			<img src={reveal ? companySrc : src} alt="" />
		</button>
		<h1>{@html text}</h1>
	</div>
	{#if $$slots}
		<Notes>
			<slot />
		</Notes>
	{/if}
</Slide>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 48px;
		margin: 32px;
	}

	button {
		border: none;
		background: none;
		min-width: calc(300px / var(--slide-scale)) !important;
	}

	img {
		aspect-ratio: 1;
		border-radius: 50%;
		outline: 12px solid green;
		outline-offset: 12px;
		width: 100%;
	}

	h1 {
		font-size: 64px !important;
	}
</style>
