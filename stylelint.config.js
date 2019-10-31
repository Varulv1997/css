const currentVersion = process.env.PRIMER_VERSION || require('./package.json').version

module.exports = {
  extends: ['stylelint-config-primer'],
  plugins: ['./lib/stylelint-todo'],
  syntax: 'scss',
  rules: {
    'primer/no-override': false,
    'primer/colors': true,
    'primer-css/TODO': [true, {currentVersion, severity: 'error'}]
  }
}
