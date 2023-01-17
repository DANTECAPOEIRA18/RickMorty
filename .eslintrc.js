const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended', 'airbnb', 'airbnb/hooks',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: [
          'node_modules',
        ],
        paths: ['src', 'src/components'],
      },
      alias: {
        map: [
          ['src', path.resolve(__dirname, './src')],
          ['components', path.resolve(__dirname, './src/components')],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['prettier', 'react',
    'react-hooks'],
  rules: {
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": false,
        "optionalDependencies": false,
        "peerDependencies": false,
        "packageDir": "./"
      }
    ],
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": true }],
    'import/no-cycle': [
      'error',
      // eslint-disable-next-line no-tabs,no-mixed-spaces-and-tabs
	      {
        // eslint-disable-next-line no-tabs,no-mixed-spaces-and-tabs
		    maxDepth: Infinity,
        // eslint-disable-next-line no-tabs,no-mixed-spaces-and-tabs
	    },
    ],
    'no-alert': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-props-no-spreading': [0, {}],
    'react/forbid-prop-types': [
      0,
      {
        forbid: [
          'any',
          'array',
        ],
        checkContextTypes: false,
        checkChildContextTypes: false,
      },
    ],
    camelcase: 'off',
    // 'linebreak-style': ['error', 'unix'],
    'linebreak-style': 0,
    'padded-blocks': ['error', 'always'],
  },
};
