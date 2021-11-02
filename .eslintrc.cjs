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
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "warn",
		"jest/no-identical-title": "warn",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "warn",
		"no-empty-function": 0,
		"semi": ["warning", "always"]
	  }
};
