'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes and trigger compass and uglify
    watch: {
      compass: {
        files: ['assets/sass/*.{scss,sass}'],
        tasks: ['compass']
      },
      js: {
        files: ['assets/js/**'],
        tasks: ['uglify']
      }      
    },

    // Compass and scss
    compass: {
      options: {
        //bundleExec: true,
        httpPath: './',
        cssDir: 'public/css',
        sassDir: 'assets/sass',
        imagesDir: 'images',
        javascriptsDir: 'js',
        fontsDir: 'fonts',
        assetCacheBuster: 'none',
        specify : 'assets/sass/style.scss'
        // require: [
        //   'sass-globbing'
        // ]
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compact',
          force: true
        }
      }
    },
 
    // Concat & minify
    uglify: {
      dist: {
        options: {
          mangle: true,
          compress: {}
        },
        files: [
          {'public/js/app.min.js': 'assets/js/app.js'}
        ]
      }
    },
    
    // Create sprites
    sprity: {
      options: {
        'cssPath': '../images',
        'processor': 'dg-sprity-sass',
        'orientation': 'compact',
        'margin': 2,
        'dimension' : [
            {ratio: 1, dpi: 72},
            {ratio: 2, dpi : 192}
        ],
      },
      sprite: {
        options: {
          'style': '../../assets/sass/_sprites.scss'
        },
        src: ['assets/img/icons/**'],
        dest: 'public/images/sprites/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sprity');

  grunt.registerTask('default', [
    'uglify',
    'sprity',
    'compass',
    'watch'
  ]);

};