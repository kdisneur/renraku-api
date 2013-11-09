var sourcePattern = ['{models,routes,services,views}/**/*.js', '*.js'];

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    jshint: {
      options: {
        force: true,
      },
      source: {
        src: sourcePattern
      }
    },
    nodemon: {
      dev: {
        options: {
          args: ['--environment=development']
        }
      }
    },
    watch: {
      scripts: {
        files: sourcePattern,
        tasks: ['jshint']
      }
    }
  });

  grunt.registerTask('default', ['concurrent:dev']);
};
