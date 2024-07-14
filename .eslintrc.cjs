module.exports = {
  extends: [
    '@mate-academy/eslint-config-react-typescript',
    'plugin:cypress/recommended',
  ],
  rules: {},
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'src/vite-env.d.ts', 'cypress'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
