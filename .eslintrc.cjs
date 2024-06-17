/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		},
		{
			files: ['*.svelte', '*.ts'],
			rules: {
				// https://typescript-eslint.io/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
				// typescript-eslint recommend that you do not use the no-undef lint rule on TypeScript projects.
				// The checks it provides are already provided by TypeScript without the need for configuration
				// TypeScript just does this significantly better.
				'no-undef': 'off'
			}
		}
	],
	rules: {
		// https://stackoverflow.com/a/64067915/11320442
		// allows unused variable if they start with _
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_'
			}
		],
		// https://eslint.org/docs/latest/rules/no-console
		// disallows the use of console.info() and console.log()
		'no-console': [
			'error',
			{
				allow: ['warn', 'error']
			}
		],
		// https://eslint.org/docs/latest/rules/no-control-regex
		// allows to write new RegExp("\t") which is normally only possible with /\t/
		'no-control-regex': 0
	}
};
