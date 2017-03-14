<cdr-modal-video>
    <div>
        <button ref="button" type="button" class="btn btn-play" onclick="{showModal}">
            <span class="icon icon-rei-play-small" aria-hidden="true"></span><span>{opts.buttonText}</span>
        </button>
        <aside if={opened} ref="modal" class="cdr-modal" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="dialog1Title">
            <span id="dialog1Title" class="sr-only">{'Begin dialog for' + opts.videoTitle}</span>
            <div class="cdr-modal__content">
                <div class="text-right">
                    <button onclick={hideModal} class="close icon icon-rei-close img-circle" aria-label="Close"></button>
                </div>
                <section class="cdr-modal__content--inner">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe title="{opts.videoTitle}" width="900" height="506" src="https://www.youtube.com/embed/{opts.videoId}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </section>
            </div>
            <span class="sr-only">End dialog</span>
        </aside>
    </div>

    <style type="less" scoped>
        .icon {
            &.icon-rei-close {
                &.img-circle {
                    background: rgba( 0,0,0,.5 );
                    color: #fff;
                    padding: 2rem;
                    margin: 1.6rem;
                    float: none;

                    @media screen and (max-width: 768px) {
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: auto;
                        left: auto;
                        z-index: 1;
                    }
                }
            }
        }
    </style>

    <script>
        //properties
        const tag = this;
        const $el = tag.root;
        tag.opened = false;
        tag.opener; // Will hold element clicked to open modal for returning focus
        //methods
        tag.on( 'mount', onMount );
        tag.showModal = showModal;
        tag.hideModal = hideModal;
        tag.tabTrap = tabTrap;

        // MOUNT
        // -----------------------------------------
        function onMount() {
            // Close modal on esc key
            $el.addEventListener( 'keyup', ( e ) => {
                if ( e.keyCode === 27 ) {
                    tag.hideModal( tag.opener );
                }
            } );

            // Change modal button display
            if ( opts.cedarButton == "text" ) {
                tag.refs.button.className = 'btn btn__link-inline-play';
            }
        }

        // METHODS
        // ----------------------------------

        // Function to show modal
        function showModal(e) {
            tag.opener = e.target;
            tag.opened = true; // Add modal to DOM
            tag.update(); // Because riot isn't fully reactive

            // Add backdrop, classes, set aria
            let body = document.querySelector( 'body' );
            let modalBackdrop = document.createElement( 'div' );
            modalBackdrop.id = 'modalBackdrop';
                // IE workaround, list out each classList item
            modalBackdrop.classList.add( 'cdr-modal__backdrop' );
            modalBackdrop.classList.add( 'opaque' );
            modalBackdrop.classList.add( 'fade' );
            modalBackdrop.tabindex = -1;
            body.appendChild( modalBackdrop );
            body.classList.add( 'cdr-modal--open' );
            tag.refs.modal.setAttribute('aria-hidden', 'false');
            tag.refs.modal.classList.add( 'in' );
            modalBackdrop.classList.add( 'in' );

            // Trap tabs
            tag.refs.modal.addEventListener( 'keydown', function ( e ) {
                if ( e.keyCode === 9 ) {
                   document.addEventListener( 'focus', tag.tabTrap, true );
                }
            } );

            tag.refs.modal.focus(); // Set focus into modal
        }

        // Function to hide modal
        function hideModal( ) {
            // remove classes
            let body = document.querySelector( 'body' );
            let modalBackdrop = document.querySelector( '#modalBackdrop' );
            tag.refs.modal.classList.remove( 'in' );
            tag.refs.modal.setAttribute('aria-hidden', 'true');
            modalBackdrop.classList.remove( 'in' );
            body.classList.remove( 'cdr-modal--open' );
            body.removeChild( modalBackdrop );

            document.removeEventListener( 'focus', tag.tabTrap, true ); //remove tab trapping event listener

            tag.opened = false; // Remove modal from DOM
            tag.update(); // Because riot isn't fully reactive

            tag.opener.focus();// return focus to element that launched the modal
        }

        // tab trapping event handler
        function tabTrap(evt) {
            if ( !tag.refs.modal.contains( evt.target ) ) {
                evt.stopPropagation();
                tag.refs.modal.focus();
            }
        }
    </script>
</cdr-modal-video>
