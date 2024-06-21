const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: project,
	},
  extends: [...[
		'@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
  ].map(require.resolve), "plugin:prettier/recommended"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
		es6: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
		'dist/'
  ],
	rules: {
		'import/no-default-export': 'off',
		"unicorn/filename-case": [
			"error",
			{
				"cases": {
					"kebabCase": true,
					"pascalCase": true
				}
			}
		],
		"no-console": [
			"error",
			{
				allow: ["warn", "error"]
			}
		],
		"prettier/prettier": [
			"warn",
			{
				endOfLine: "auto",
			},
		],
		"@typescript-eslint/array-type": [
			"error",
			{
				default: "generic"
			}
		],
		"@typescript-eslint/restrict-template-expressions": [
			"error",
			{
				allowNumber: true,
			}
		],
		"react/jsx-no-leaked-render": [
			"warn",
			{
				validStrategies: ["coerce"]
			}
		]
	},
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
