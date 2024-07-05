<script>
	import CircleImageText from '$lib/CircleImageText.svelte';
	import { Notes, Slide } from 'svelte-reveal.js';
</script>

<Slide>
	<Slide>
		<h1>Carbone</h1>
		<Notes>
			Vous remarquerez que sur les deux premières parties, il s'agissait de "nos engagements"
			et de "nos produits" mais dès qu'il s'agit de parler du carbone, du CO2, ce n'est plus
			le notre !
		</Notes>
	</Slide>

	<CircleImageText
		src="/stormtrooper.png"
		companySrc="/apple.svg"
		text="net zero carbon*<br/>Getting to carbon negative*<br/>Path to net zero*"
	>
		<p>
			Dans la même veine que le titre de cette présentation, on dépersonnifie ici le carbone
			pour ne pas dire que notre entreprise émet des gaz à effet de serre. C'est le même
			principe que les tarifs dans un restaurant ou l'on n'affiche pas le symbole euro pour
			réduire la percéption de la monaie ou issue des émissions de CO2.
		</p>
	</CircleImageText>

	<CircleImageText
		src="/stormtrooper.png"
		companySrc="/apple.svg"
		text="*29% reduction in Scope 2 emissions from purchased electricity"
	>
		<p>
			Les 3 scopes, ce sont les 3 périmètres (direct, indirect lié à l'énergie sur le site,
			indirect lié aux produits et services) à partir desquels on réalise le bilan des impacts
			sur l'environnement et sur lesquels on s'engage. La plupart des bilans se concentrent
			sur les scopes 1 et 2 alors que la majeure partie des impacts sont sur le 3ème
			périmètre.
		</p>
	</CircleImageText>

	<CircleImageText
		src="/stormtrooper.png"
		companySrc="/apple.svg"
		text="émissions scope 1-2 : 468 (unité : 10,000 MtC02e) - réductions : 1,419,003.1 (unité MtCO2e)"
	>
		<p>
			Les unités de ce qui veut être mis en valeur est volontairement plus petite pour gonfler
			les chiffres. Les unités
		</p>
	</CircleImageText>
</Slide>
