module.exports = function(grunt) {
    require('jit-grunt')(grunt);
   
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: false,
            yuicompress: false,
            optimization: 2
          },
          files: {
            "css/all.css": "less/_all.less"
          }
        }
      },
      watch: {
        styles: {
          files: ['less/**/*.less'],
          tasks: ['less']
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'watch']);
  };