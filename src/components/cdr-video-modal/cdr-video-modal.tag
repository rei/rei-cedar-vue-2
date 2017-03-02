// vim: syntax=JSX
<cdr-video-modal>
    <div if={opened} ref="modal" class="modal" tabindex="-1" role="dialog" aria-hidden="true">
        <span class="sr-only">Begin dialog</span>
        <div class="modal__content">
            <div class="text-right">
                <button data-cdr-modal-close="{opts.dismisstrigger}" class="close icon icon-rei-close img-circle" aria-label="Close"></button>
            </div>
            <div class="modal__content--inner">
                <div class="embed-responsive embed-responsive-16by9">
                    <yield />
                </div>
            </div>
        </div>
        <span class="sr-only">End dialog</span>
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

        .modal {
            opacity: 0;
            transition: opacity .15s linear;
                
            .modal__content {
                transition: transform .3s ease-out;
                transform: translate(0, -25%);

                @media screen and (max-width: 768px) {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }
            }
            
            &.in {
                display: block;
                opacity: 1;
            
                .modal__content {
                    transform: translate(0,0);
                }
            }
        }

        .modal__content--inner {
            max-width: 90rem;
            margin: 0 auto;

            @media screen and (max-width: 768px) {
                width: 100%;
                position: absolute;
                top: 50%;
                right: auto;
                bottom: auto;
                left: 50%;
                text-align: center;
                transform: translate(-50%, -50%);
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
            // Set up open triggers            
            let triggerArr = document.querySelectorAll( `[data-cdr-modal-open="${tag.opts.opentrigger}"]` );   
            triggerArr.forEach( ( trigger ) => {
                trigger.addEventListener( 'click', ( e ) => {
                    tag.opener = e.target;
                    tag.showModal();
                }, true );
            } );

            // Close modal on esc key
            $el.addEventListener( 'keyup', ( e ) => {
                if ( e.keyCode === 27 ) {                  
                    tag.hideModal( tag.opener );
                }
            } );
        }

        // METHODS
        // ----------------------------------

        // Function to show modal
        function showModal() {
            tag.opened = true; // Add modal to DOM 
            tag.update(); // Because riot isn't fully reactive

            // Add backdrop, classes, set aria
            let body = document.querySelector( 'body' );
            let modalBackdrop = document.createElement( 'div' );
            modalBackdrop.id = 'modalBackdrop';
                // IE workaround, list out each classList item
            modalBackdrop.classList.add( 'modal-backdrop' );
            modalBackdrop.classList.add( 'opaque' );
            modalBackdrop.classList.add( 'fade' );
            modalBackdrop.tabindex = -1;
            body.appendChild( modalBackdrop );
            body.classList.add( 'modal-open' );
            body.classList.add( 'modal__gutter--right' );
            tag.refs.modal.setAttribute('aria-hidden', 'false');
            tag.refs.modal.classList.add( 'in' );
            modalBackdrop.classList.add( 'in' );

            // Set up dismiss triggers
            let dismissTriggerArr = document.querySelectorAll( `[data-cdr-modal-close="${tag.opts.dismisstrigger}"]` );         
            dismissTriggerArr.forEach( ( dismissTrigger ) => {
                dismissTrigger.addEventListener( 'click', ( e ) => {
                    tag.hideModal( tag.opener );
                } );
            } );

            // Trap tabs
            tag.refs.modal.addEventListener( 'keydown', function ( e ) {
                if ( e.keyCode === 9 ) {
                   document.addEventListener( 'focus', tag.tabTrap, true );
                }
            } );

            tag.refs.modal.focus(); // Set focus into modal
        }


        // Function to hide modal
        function hideModal( focusAfter ) {   
            // remove classes     
            let body = document.querySelector( 'body' );
            let modalBackdrop = document.querySelector( '#modalBackdrop' );
            tag.refs.modal.classList.remove( 'in' );
            tag.refs.modal.setAttribute('aria-hidden', 'true');
            modalBackdrop.classList.remove( 'in' );
            body.classList.remove( 'modal-open' );
            body.classList.remove( 'modal__gutter--right' );
            body.removeChild( modalBackdrop );

            document.removeEventListener( 'focus', tag.tabTrap, true ); //remove tab trapping event listener

            tag.opened = false; // Remove modal from DOM
            tag.update(); // Because riot isn't fully reactive

            focusAfter.focus();// return focus to element that launched the modal
        }


        // tab trapping event handler
        function tabTrap(evt) {                    
            if ( !tag.refs.modal.contains( evt.target ) ) {
                evt.stopPropagation();
                tag.refs.modal.focus();
            }
        }

    </script>
</cdr-video-modal>
