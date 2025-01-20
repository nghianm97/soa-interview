module.exports = {
  extends: ['@commitlint/config-conventional'],
  'type-enum': [
    2,
    'always',
    [
      'feat', //changes that introduce a new feature.
      'fix', //changes that patch a bug.
      'docs', // changes that affect the documentation.
      'chore', //changes that aren't user-facing.
      'style', //changes that don't affect code logic, such as white-spaces, formatting, missing semi-colons.
      'refactor', //changes which neither fix a bug nor add a feature.
      'ci',
      'test', //changes that add missing tests or correct existing tests.
      'perf', // changes which improve performance.
      'revert', //changes that revert a previous commit.
      'vercel'
    ]
  ]
}
