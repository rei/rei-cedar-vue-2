$( document ).ready( function () {
    // Setup the a11y nav
    $( '#js-a11ynav' ).setup_navigation();
} );

var keyCodeMap = {
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    59: ";",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    96: "0",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9"
};

var menuHoverClass = 'js-show-menu';

$.fn.showMenu = function () {
    return this.attr( 'aria-hidden', 'false' )
        .addClass( menuHoverClass )
        .find( 'a' ).attr( 'tabIndex', 0 );
};

$.fn.hideMenu = function () {
    return this.attr( 'aria-hidden', 'true' )
        .removeClass( menuHoverClass )
        .find( 'a' )
        .attr( 'tabIndex', -1 );
};

function openAndFocus( el, direction ) {
    var menu = $( el ).parent( 'li' ).find( 'ul' );

    if ( menu.length > 0 ) {
        if ( direction === 'up' ) {
            menu.showMenu().last().focus();
        } else if ( direction === 'down' ) {
            menu.showMenu().first().focus();
        }
    }
}

function linkFocus( el, direction ) {
    var menu = $( el ).parent( 'li' );

    if ( direction === 'left' || direction === 'up' ) {
        if ( menu.prev( 'li' ).length === 0 ) {
            if ( direction === 'left' ) {
                $( el ).parents( 'ul' ).find( '> li' ).last().find( 'a' ).first().focus();
            } else if ( direction === 'up' ) {
                $( el ).parents( 'ul' ).parents( 'li' ).find( 'a' ).first().focus();
            }
        } else {
            menu.prev( 'li' ).find( 'a' ).first().focus();
        }
    } else if ( direction === 'right' || direction === 'down' ) {
        if ( menu.next( 'li' ).length === 0 ) {
            if ( direction === 'right' ) {
                $( el ).parents( 'ul' ).find( '> li' ).first().find( 'a' ).first().focus();
            } else if ( direction === 'down' ) {
                $( el ).parents( 'ul' ).parents( 'li' ).find( 'a' ).first().focus();
            }
        } else {
            menu.next( 'li' ).find( 'a' ).first().focus();
        }
    }
}

$.fn.setup_navigation = function () {

    // Add ARIA role to menubar and menu items
    $( this ).attr( 'role', 'menubar' ).find( 'li' ).attr( 'role', 'menuitem' );

    var top_level_links = $( this ).find( '> li > a' );

    // Set tabIndex to -1 so that top_level_links can't receive focus until menu is open
    $( top_level_links ).next( 'ul' )
        .attr( 'data-test', 'true' )
        .attr( {
            'aria-hidden': 'true',
            'role': 'menu'
        } )
        .find( 'a' )
        .attr( 'tabIndex', -1 );

    // Adding aria-haspopup for appropriate items
    $( top_level_links ).each( function () {
        if ( $( this ).next( 'ul' ).length > 0 )
            $( this ).parent( 'li' ).attr( 'aria-haspopup', 'true' );
    } );

    $( top_level_links ).hover( function () {
        $( this ).closest( 'ul' )
            .attr( 'aria-hidden', 'false' )
            .find( '.' + menuHoverClass )
            .hideMenu();

        $( this ).next( 'ul' )
            .showMenu();
    } );

    $( top_level_links ).focus( function () {
        $( this ).closest( 'ul' )
            .find( '.' + menuHoverClass )
            .hideMenu();

        $( this ).next( 'ul' )
            .showMenu();
    } );

    // Bind arrow keys for navigation
    $( top_level_links ).keydown( function ( e ) {
        if ( e.keyCode == 37 ) {
            e.preventDefault();
            linkFocus( $( this ), 'left' );
        } else if ( e.keyCode == 39 ) {
            e.preventDefault();
            linkFocus( $( this ), 'right' );
        } else if ( e.keyCode == 38 ) {
            e.preventDefault();
            openAndFocus( $( this ), 'up' );
        } else if ( e.keyCode == 40 ) {
            e.preventDefault();
            openAndFocus( $( this ), 'down' );
        } else if ( e.keyCode == 32 ) {
            // If submenu is hidden, open it
            e.preventDefault();
            $( this ).parent( 'li' ).find( 'ul[aria-hidden=true]' )
                .showMenu().first().focus();
        } else if ( e.keyCode == 27 ) {
            e.preventDefault();
            $( '.' + menuHoverClass ).hideMenu();
        } else {
            $( this ).parent( 'li' ).find( 'ul[aria-hidden=false] a' ).each( function () {
                if ( $( this ).text().substring( 0, 1 ).toLowerCase() == keyCodeMap[ e.keyCode ] ) {
                    $( this ).focus();
                    return false;
                }
            } );
        }
    } );


    var links = $( top_level_links ).parent( 'li' ).find( 'ul' ).find( 'a' );
    $( links ).keydown( function ( e ) {
        if ( e.keyCode == 38 ) {
            e.preventDefault();
            linkFocus( $( this ), 'up' );
        } else if ( e.keyCode == 40 ) {
            e.preventDefault();
            linkFocus( $( this ), 'down' );
        } else if ( e.keyCode == 27 || e.keyCode == 37 ) {
            e.preventDefault();
            $( this )
                .parents( 'ul' ).first()
                .prev( 'a' ).focus()
                .parents( 'ul' ).first().find( '.' + menuHoverClass )
                .hideMenu();
        } else if ( e.keyCode == 32 ) {
            e.preventDefault();
            window.location = $( this ).attr( 'href' );
        } else {
            var found = false;
            $( this ).parent( 'li' ).nextAll( 'li' ).find( 'a' ).each( function () {
                if ( $( this ).text().substring( 0, 1 ).toLowerCase() == keyCodeMap[ e.keyCode ] ) {
                    $( this ).focus();
                    found = true;
                    return false;
                }
            } );

            if ( !found ) {
                $( this ).parent( 'li' ).prevAll( 'li' ).find( 'a' ).each( function () {
                    if ( $( this ).text().substring( 0, 1 ).toLowerCase() == keyCodeMap[ e.keyCode ] ) {
                        $( this ).focus();
                        return false;
                    }
                } );
            }
        }
    } );


    // Hide menu if click or focus occurs outside of navigation
    $( this ).find( 'a' ).last().keydown( function ( e ) {
        if ( e.keyCode == 9 ) {
            // If the user tabs out of the navigation hide all menus
            $( '.' + menuHoverClass )
                .hideMenu();
        }
    } );

    $( document ).click( function () {
        $( '.' + menuHoverClass )
            .hideMenu();
    } );

    $( this ).click( function ( e ) {
        e.stopPropagation();
    } );
};
