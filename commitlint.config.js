module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0],
    'trumed-subject': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'trumed-subject': ({ subject }) => {
          const trumedSubjectRegex = /^TRUMED-\d+.*/;
          const TRUMED_PREFIX = 'TRUMED-###';
          return [
            trumedSubjectRegex.test(subject),
            `Commit subject should start with ${TRUMED_PREFIX} message`,
          ];
        },
      },
    },
  ],
};