module.exports = {
	'env': {
        "browser": true,
        "commonjs": true,
        "es2021": true,
		"node": true,
		"mocha": true
	},
	"extends": [
		"plugin:wdio/recommended"
	  ],
	"parser": "babel-eslint",
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'warn',
			'tab'
		],
		'linebreak-style': [
			'warn',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
	},
	"globals": {
		"$": true,
		"$$": true,
		"browser": true,
		"driver": true
	},
	"plugins": [
		"wdio",
	],
};
