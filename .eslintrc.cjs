module.exports = {
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier', 'plugin:prettier/recommended'],
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        'no-alert': 0, //禁止使用alert confirm prompt
        // 'no-console': 2, // 禁止使用console
        camelcase: 2, //强制驼峰法命名
        'comma-spacing': 2, //逗号前后的空格
        'no-extra-semi': 2, //禁止多余的冒号
        'eol-last': 0,
        'prefer-const': 0,
        semi: [2, 'always'],
        'array-bracket-spacing': ['error', 'never'], // 数组首尾无空格 每项逗号后空格
        'object-curly-spacing': ['error', 'never'], // 对象首尾无空格 每项逗号后空格
        'comma-dangle': ['error', 'never'] // 尾部禁止逗号
    }
};
