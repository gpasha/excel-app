module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
      babelOptions: {
        configFile: "./babel.config.json",
      },
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ["eslint:recommended", "google"],
    rules: {
        'semi': 'off',
        'coma-dangle': 'off',
        'object-curly-spacing': 'off',
        'indent': 'off',
        'quotes': 'off',
        'eol-last': 'off',
        'require-jsdoc': 'off'
    },
}