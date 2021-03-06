module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['svelte3', 'jest'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
		'jest/globals': true
	},
	rules: {
		semi: [1, "always"],
		'no-unused-vars': 1
	}
};
