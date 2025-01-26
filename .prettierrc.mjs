export default {
  singleQuote: true, // 使用单引号
  trailingComma: 'es5', // 在 ES5 兼容的地方添加尾随逗号（如对象、数组）
  printWidth: 100, // 每行最大宽度为 100 字符（更紧凑的代码）
  tabWidth: 2, // 缩进宽度为 4 个空格
  useTabs: false, // 使用空格代替制表符
  semi: true, // 使用分号
  bracketSpacing: true, // 在对象字面量的大括号之间添加空格
  arrowParens: 'always', // 箭头函数参数始终使用括号
  endOfLine: 'lf', // 使用 LF 作为行尾符（跨平台兼容）
  quoteProps: 'as-needed', // 仅在必要时为对象属性添加引号
  jsxSingleQuote: false, // JSX 中使用双引号,
  plugins: ['prettier-plugin-tailwindcss'], // 支持 Tailwind CSS 的插件
};
