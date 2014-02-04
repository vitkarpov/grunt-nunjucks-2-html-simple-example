module.exports = function(grunt) {

  grunt.initConfig({
    nunjucks: {
      options: {
        templatesFolder: 'bundles',
        data: grunt.file.readJSON('templates-data.json')
      },
      render: {
        files: [
           {
              expand: true,
              cwd: "bundles/",
              src: "*.html",
              dest: "build/",
              ext: ".html"
           }
        ]
      }
    }
  });

  // Load the plugin that renders my templates
  grunt.loadNpmTasks('grunt-nunjucks-2-html');

  // Default task(s).
  grunt.registerTask('default', ['nunjucks']);

};
