/**
 * `tasks/register/compileAssets.js`
 *
 * ---------------------------------------------------------------
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/tasks/register/compile-assets-js
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('compileAssets', [
    'webpack:dev', //We added this line
    'clean:dev',
    'jst:dev',
    'less:dev',
    'copy:dev',
    'coffee:dev'
  ]);
};
