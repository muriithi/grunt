module.exports=function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['app/vendor/angular-1.2.26.min.js', 'app/vendor/angular-route-1.2.26.min.js','app/src/*.js','app/src/**/*.js'],
                dest: 'app/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'app/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint:{
            files:['Gruntfile.js', 'app.js','routes/*.js','app/src/*.js','app/src/**/*.js'],
            options: {
                indent:4
            }
            
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['jshint', 'concat','uglify']);
};