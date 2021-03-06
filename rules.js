module.exports = {
	rules: {
		'max-classes-per-file': ['error', 3],
		'eslint-comments/disable-enable-pair': [
			'error',
			{ allowWholeFile: true },
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/webpack.config.ts',
					'**/*.test.tsx',
					'**/*.test.ts',
				],
			},
		],
		'import/no-cycle': 'off',
		'import/prefer-default-export': 'off',
		'prefer-const': ['error', { destructuring: 'all' }],
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'import/no-unresolved': [
			'error',
			{ ignore: ['\\.(svg|png|jpg)(\\?asFile)?$'] },
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'dot-notation': 'off',
		'class-methods-use-this': 'off',
		// until https://github.com/iamturns/eslint-config-airbnb-typescript/issues/95 is released:
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
				filter: {
					regex: '^_+$',
					match: false,
				},
			},
			{
				selector: 'function',
				format: ['camelCase', 'PascalCase'],
			},
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
			},
			{
				selector: 'parameter',
				format: ['camelCase'],
				filter: {
					regex: '^_+$',
					match: false,
				},
			},
			{
				selector: 'property',
				format: null,
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
		],
	},
};
