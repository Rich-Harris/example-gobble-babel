var gobble = require( 'gobble' );

module.exports = gobble([

	// include src/root files
	gobble( 'src/root' ),

	// include bower_components
	gobble( 'bower_components' ),

	// transpile src/js file with babel, creating
	// AMD modules (NOT CommonJS) so that they
	// can be loaded with RequireJS
	gobble( 'src/js' ).transform( 'babel', {
		modules: 'amd'
	})

]);
