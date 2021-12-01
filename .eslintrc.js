module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
        "jest": true
    },
    "extends": [
        'eslint:recommended',
        "plugin:vue/vue3-essential",
        'plugin:vue/vue3-recommended',
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "@vue/prettier",
        "eslint:recommended"
    ],
    "plugins": ["vue", "@typescript-eslint"],
    "parser": "vue-eslint-parser",

    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "comma-dangle": ["error", "never"]
    }
}