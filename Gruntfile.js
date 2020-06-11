module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        /* Compila o Sass para seu destino no CSS */
        compass: {
            site: {
                options: {
                    sassDir: '/sass',
                    cssDir: '/css',
                    imagesDir: '/img',
                }
            }
        },

        /* Observa altera��es no SASS e JS */
        watch: {
            // Compile o SASS em CSS e concate os assets
            css: {
                files: ['/sass/**/*.scss'],
                tasks: ['compass']
            }
        }
    });

    grunt.registerTask('default', ['watch']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
};