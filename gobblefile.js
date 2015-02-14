var gobble = require( 'gobble' );

module.exports = gobble([

	// include src/root files
	gobble( 'src/root' ),

	gobble( 'src/js' )

		// transpile src/js file with 6to5, creating
		// CommonJS modules
		.transform( '6to5', {
			sourceMap: false
		})

		// bundle modules with Browserify
		.transform( 'browserify', {
			entries: [ './app' ],
			dest: 'app.js',
			standalone: 'app'
		})

]);
