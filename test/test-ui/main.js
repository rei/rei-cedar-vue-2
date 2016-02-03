var fs              = require( 'fs' );
var phantomcss      = require( '../../node_modules/phantomcss' );
var LIBRARY_ROOT    = fs.absolute( fs.workingDirectory + '/node_modules/phantomcss' );
var SCREENSHOT_PATH = fs.absolute( fs.workingDirectory + '/test/test-ui/screenshots' );
var FAILED_PATH     = fs.absolute( fs.workingDirectory + '/test/test-ui/failures' );

// List of pages under patterns.rei.com; grid -> http://patterns.rei.com/grid
var DOCS = [
    'alerts',
    'breadcrumbs',
    'buttons',
    'button-groups',
    'checkboxes-and-radios',
    'containers',
    'forms',
    'grid',
    'images',
    'inputs',
    'input-groups',
    'layouts',
    'links',
    'lists',
    'list-groups',
    'rei-icons',
    'tabs',
    'typography'
    //'color',
    // 'tables',
    // 'modals',
    // 'style-and-behavior'
];

/*
 Setup `phantomcss`
 */
phantomcss.init( {
    rebase               : casper.cli.get( 'rebase' ),
    casper               : casper,
    libraryRoot          : LIBRARY_ROOT,
    screenshotRoot       : SCREENSHOT_PATH,
    failedComparisonsRoot: FAILED_PATH,
    addLabelToFailedImage: true
} );

/*
 Test all the docs
 */
DOCS.forEach( function ( doc ) {
    var SUITE_NAME = doc;

    casper.test.begin( SUITE_NAME, function ( test ) {
        /*
         Casper Config
         */
        // FIXME: The css within this file no longer loads, when opening from the filesystem in a browser.
        // var HTML_SRC            = fs.absolute( fs.workingDirectory + '/_gh_pages/components/index.html' );
        var HTML_SRC            = 'http://localhost:9002/' + SUITE_NAME + '/';
        var VIEWPORT_WIDTH      = 1280;
        var VIEWPORT_HEIGHT     = 800;

        /*
         Logging
        */
        casper
            .on( 'remote.message', casper.echo )
            .on( 'error', function ( err ) {
                this.die( 'PhantomJS has errored: ' + err );
            })
            .on( 'resource.error', function ( err ) {
                this.log( 'Resource load error: ' + err, 'warning' );
            });

        /*
         Test Cases
        */
        casper
            .start( HTML_SRC )
            .viewport( VIEWPORT_WIDTH, VIEWPORT_HEIGHT )
            .then( function ( ) {
                var EXAMPLE_SELECTOR = '[data-example-id]';
                var examples = this.getElementsInfo( EXAMPLE_SELECTOR );

                // Take Screen shots of all the componenets
                examples.forEach( function ( example ) {
                    casper
                        .then( function ( ) {
                            var name     = example.attributes[ EXAMPLE_SELECTOR.replace( /\[|\]/g, '') ];
                            var prefix   = SUITE_NAME;
                            var selector = EXAMPLE_SELECTOR.replace( ']', '=' + name + ']' );

                            phantomcss.screenshot( selector, SUITE_NAME + '-' + name );
                        } );
                } );
            } )
            .then( function () {
                // Compare all the component screenshots
                phantomcss.compareAll();
            } )
            .run( function () {
                this.test.done();
            } );
    } );

} );
