'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
//  require('time-grunt')(grunt);
//    grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    yeoman: {
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      dist: [
        'Gruntfile.js',
        '<%= yeoman.app %>/src/{,*/}*.js'
      ]
    },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/angular-bindOnceOrStatic-min.js': [ 'src/app.js', 'src/services/*.js', 'src/directives/*.js', 'src/app-configuration.js' ]
        }
      }
    }
  });
  grunt.registerTask('build', ['jshint:dist', 'clean:dist', 'uglify:dist']);
};
