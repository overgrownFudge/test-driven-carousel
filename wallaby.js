module.exports = function(wallaby) {
    return {
      testFramework: 'jest',
      env: {
        type: 'node',
      },
      tests: ['src/tests/**/*.test.js'],
      files: ['src/**/*.js', '!**/*.test.js', '!**/.*'],
      compilers: {
        '**/*.js': wallaby.compilers.babel(), // 1
        // The compilers entry tells Wallaby that all .js files should be compiled with Babel.
      },
    };
  };