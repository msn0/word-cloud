module.exports = function (grunt) {

  grunt.initConfig({
    BUILD_FILE: "dist/cloud.js",
    clean: ["dist"],
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      all: ['Gruntfile.js', 'src/**/*.js']
    },
    uglify: {
      article: {
        options: {
          mangle: true
        },
        files: {
          '<%= BUILD_FILE %>': [
            'src/intersector.js',
            'src/positioner.js',
            'src/font-manager.js',
            'src/word-cloud.js',
            'src/main.js'
          ]
        }
      }
    },
    anonymous: {
      dist : {
        files: {
          '<%= BUILD_FILE %>': '<%= BUILD_FILE %>'
        }
      }
    },
    bower: {
      install: {
        options: {
          targetDir: './lib',
          layout: 'byComponent',
          install: true,
          verbose: true,
          cleanTargetDir: true,
          cleanBowerDir: true,
          bowerOptions: {}
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-anonymous');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask("test", ['karma']);
  grunt.registerTask('build', [
    /*'jshint', */'clean', 'bower:install', 'test', 'uglify', 'anonymous'
  ]);
  grunt.registerTask("default", ['build']);

};