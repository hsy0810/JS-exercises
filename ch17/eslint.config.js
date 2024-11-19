import eslintPluginPrettier from 'eslint-plugin-prettier';
export default [
  {
    ignores: ['ex01/format_sample.js'],
    files: ['**/*.js'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
  },
  {
    files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: [
        '@typescript-eslint',
      ],
  }
];
