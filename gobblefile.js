var gobble = require( 'gobble' );

module.exports = gobble([

	// include src/root files
	gobble( 'src/root' ),

	// include bower_components
	gobble( 'bower_components' ),

	gobble( 'src/js' )

		// transpile src/js file with 6to5, creating
		// AMD modules (NOT CommonJS) so that they
		// can be loaded with RequireJS
		.transform( '6to5', {
			modules: 'amd',
			sourceMap: false
		})

		// then use the RequireJS optimizer to
		// bundle the modules into a single file
		.transform( 'requirejs', {
			name: 'app',
			out: 'app.js',
			name: 'app',
			optimize: 'none'
		})

		// then use AMDClean to remove the RequireJS
		// stuff, so that it's a self-executing script
		.transform( 'amdclean', {
			wrap: {
				start: '(function () {',
				end: 'app.launch();\n})();'
			}
		})

]);
