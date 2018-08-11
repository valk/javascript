const config = require('../config');

// https://github.com/benmosher/eslint-plugin-import#style-guide
module.exports = {

  rules: {

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
    'import/exports-last': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-namespace': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never'
      }
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: [
          [
            'builtin',
            'external',
            'internal'
          ]
        ],
        'newlines-between': true
      }
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    'import/max-dependencies': [
      'error',
      {
        max: config.importMaxDependenciesMax
      }
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    'import/no-default-export': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
    'import/group-exports': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
    'import/dynamic-import-chunkname': [
      'error',
      {
        importFunctions: [
          'dynamicImport',
          'importedComponent'
        ],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+'
      }
    ]

  }

};