module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		qunit: {
			all: {
				options: {
					urls: ["http://localhost:8000/test/index.html"]
				}
			}
		},
		connect: {
			server: {
				options: {
				  port: 8000,
				  base: '.',
				  keepalive: true
				}
			},
			phantomjs: {
				options: {
				  port: 8000,
				  base: '.'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks("grunt-contrib-qunit");

	grunt.registerTask("default", ["connect:phantomjs", "qunit"]);
};
