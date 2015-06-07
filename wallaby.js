module.exports = function () {
  return {
    'files': [
      'src/index.js'
    ],
    'tests': [
      'test/*.test.js'
    ],
    env: {
      type: 'node',
      params: {
        runner: '--harmony --harmony_arrow_functions'
      }
    }
  };
};
