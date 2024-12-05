import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {
                // Your global variables here
            },
        },
        plugins: ['prettier'],
        extends: [
            'eslint:recommended',
            'plugin:prettier/recommended'
        ],
        rules: {
            'capitalized-comments': ['error', 'always']
        }
    }
];
// {
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//         "ecmaVersion": 12,
//         "sourceType": "module"
//     },
//     "plugins": ["@typescript-eslint"],
//     "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
//     "rules": {
//         "@typescript-eslint/no-unused-vars": "error",
//         "@typescript-eslint/consistent-type-definitions": ["error", "type"]
//     },
//     "env": {
//         "browser": false,
//         "es2021": true
//     }
// }