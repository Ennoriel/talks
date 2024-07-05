<div>
	<slot />
</div>

<style>
	div :global(*) {
		text-transform: none !important;
		font-weight: 400 !important;
	}

	div :global(ul li) {
		list-style: '—   ';
	}
</style>
