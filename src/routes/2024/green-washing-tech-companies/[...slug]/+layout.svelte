<div>
	<slot />
</div>

<style>
	div :global(*) {
		text-transform: none !important;
		font-weight: 400 !important;
	}

	div :global(strong) {
		font-weight: 700 !important;
		color: green;
	}

	div :global(ul li) {
		list-style: '—   ';
	}

	div :global(.slide-number) {
		position: absolute;
		left: 10px;
		width: fit-content;
		background-color: transparent;
		color: green;
		font-size: 20px;
	}

	div :global(.slide-number *) {
		font-weight: 700 !important;
	}

	div :global(.controls),
	div :global(.progress) {
		color: green;
	}
</style>
