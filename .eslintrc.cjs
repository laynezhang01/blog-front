module.exports = {
    extends: [
        'next/core-web-vitals', // Next.js 推荐的规则
        'next/typescript', // Next.js 对 TypeScript 的支持
        'plugin:@typescript-eslint/recommended', // TypeScript 推荐的规则
        'plugin:prettier/recommended', // Prettier 推荐的规则（避免与 ESLint 冲突）
        'prettier', // 禁用与 Prettier 冲突的规则
    ],
    parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
    parserOptions: {
        ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
        sourceType: 'module', // 使用 ES 模块
        ecmaFeatures: {
            jsx: true, // 支持 JSX
        },
    },
    rules: {
        // 基本规则
        'no-unused-vars': 'off', // 禁用默认的未使用变量检查
        '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}], // 使用 TypeScript 的未使用变量检查
        'no-alert': 'error', // 禁止使用 alert、confirm、prompt
        'no-console': ['warn', {allow: ['warn', 'error']}], // 允许 console.warn 和 console.error
        camelcase: 'error', // 强制使用驼峰命名
        'eol-last': ['error', 'always'], // 文件末尾必须有空行
        semi: ['error', 'always'], // 必须使用分号
        'prefer-const': 'error', // 优先使用 const
        'no-extra-semi': 'error', // 禁止多余的分号

        // 代码风格规则
        'array-bracket-spacing': ['error', 'never'], // 数组括号内不能有空格
        'object-curly-spacing': ['error', 'never'], // 对象括号内不能有空格
        // 'comma-dangle': ['error', 'always-multiline'], // 多行时尾部必须有逗号
        'comma-spacing': ['error', {before: false, after: true}], // 逗号后必须有空格，逗号前不能有空格

        // TypeScript 规则
        '@typescript-eslint/no-explicit-any': 'warn', // 允许使用 any，但给出警告
        '@typescript-eslint/explicit-function-return-type': 'off', // 不强制显式函数返回类型
        '@typescript-eslint/interface-name-prefix': 'off', // 不强制接口名称前缀
        '@typescript-eslint/no-non-null-assertion': 'off', // 允许使用非空断言（!）

        // React/JSX 规则
        'react/jsx-curly-brace-presence': ['error', {props: 'never', children: 'never'}], // JSX 中禁止不必要的花括号
        'react/jsx-filename-extension': ['error', {extensions: ['.tsx', '.jsx']}], // 只允许在 .tsx 和 .jsx 文件中使用 JSX
        'react/react-in-jsx-scope': 'off', // 不需要显式引入 React（Next.js 自动处理）

        // 其他规则
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always', // 分组之间必须有空行
                alphabetize: {order: 'asc', caseInsensitive: true}, // 按字母顺序排序
            },
        ], // 规范 import 顺序
    },
    settings: {
        react: {
            version: 'detect', // 自动检测 React 版本
        },
    },
};
