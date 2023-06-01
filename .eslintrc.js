module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
        'vue/custom-event-name-casing': 'off',
        'vue/valid-attribute-name': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/require-v-for-key': 'off',
        'vue/valid-v-for': 'off',
        'vue/v-on-event-hyphenation': 'off',
        'space-before-function-paren': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/require-default-prop': 'off',
    },
};
