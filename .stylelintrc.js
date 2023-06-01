module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-order'],
    ignoreFiles: ['node_modules/**', 'src/assets/fonts/**', 'src/assets/style/reset.css'],
    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            customSyntax: 'postcss-html',
        },
    ],
    rules: {
        'at-rule-no-unknown': [
            true,
            { ignoreAtRules: ['extends', 'ignores', 'include', 'mixin', 'if', 'else', 'media', 'for'] },
        ],
        'color-hex-case': 'lower',

        'order/order': ['custom-properties', 'declarations'],
        'order/properties-order': ['width', 'height'],

        'indentation': 4,

        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',

        'block-opening-brace-newline-after': 'always',
        'block-closing-brace-space-before': 'always-single-line',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'rule-empty-line-before': ['always', {
          'except': ['first-nested']
        }],
        'selector-list-comma-newline-after': 'never-multi-line'
    },
}
