global.riot = require( 'riot' );

// Include all tag files
require( '../tags/**/*.tag', {
    mode: 'expand'
} );

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load( 'particles-js', '/assets/js/vendor/particlesjs-config.json', function () {
    console.log( 'particles.js loaded :)' );
} );

$(function(){
	// mount all components once loaded. 
	riot.mount( '*' );
});