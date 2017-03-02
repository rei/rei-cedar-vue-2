// vim: syntax=JSX
riot.tag2('cdr-video-modal', '<div if="{opened}" ref="modal" class="modal" tabindex="-1" role="dialog" aria-hidden="true"> <span class="sr-only">Begin dialog</span> <div class="modal__content"> <div class="text-right"> <button data-cdr-modal-close="{opts.dismisstrigger}" class="close icon icon-rei-close img-circle" aria-label="Close"></button> </div> <div class="modal__content--inner"> <div class="embed-responsive embed-responsive-16by9"> <yield></yield> </div> </div> </div> <span class="sr-only">End dialog</span> </div>', 'cdr-video-modal .icon.icon-rei-close.img-circle,[riot-tag="cdr-video-modal"] .icon.icon-rei-close.img-circle,[data-is="cdr-video-modal"] .icon.icon-rei-close.img-circle{background:rgba(0,0,0,0.5);color:#fff;padding:2rem;margin:1.6rem;float:none}@media screen and (max-width:768px){ cdr-video-modal .icon.icon-rei-close.img-circle,[riot-tag="cdr-video-modal"] .icon.icon-rei-close.img-circle,[data-is="cdr-video-modal"] .icon.icon-rei-close.img-circle{position:absolute;top:0;right:0;bottom:auto;left:auto;z-index:1}} cdr-video-modal .modal,[riot-tag="cdr-video-modal"] .modal,[data-is="cdr-video-modal"] .modal{opacity:0;transition:opacity .15s linear} cdr-video-modal .modal .modal__content,[riot-tag="cdr-video-modal"] .modal .modal__content,[data-is="cdr-video-modal"] .modal .modal__content{transition:transform .3s ease-out;transform:translate(0, -25%)}@media screen and (max-width:768px){ cdr-video-modal .modal .modal__content,[riot-tag="cdr-video-modal"] .modal .modal__content,[data-is="cdr-video-modal"] .modal .modal__content{position:absolute;top:0;bottom:0;left:0;right:0}} cdr-video-modal .modal.in,[riot-tag="cdr-video-modal"] .modal.in,[data-is="cdr-video-modal"] .modal.in{display:block;opacity:1} cdr-video-modal .modal.in .modal__content,[riot-tag="cdr-video-modal"] .modal.in .modal__content,[data-is="cdr-video-modal"] .modal.in .modal__content{transform:translate(0, 0)} cdr-video-modal .modal__content--inner,[riot-tag="cdr-video-modal"] .modal__content--inner,[data-is="cdr-video-modal"] .modal__content--inner{max-width:90rem;margin:0 auto}@media screen and (max-width:768px){ cdr-video-modal .modal__content--inner,[riot-tag="cdr-video-modal"] .modal__content--inner,[data-is="cdr-video-modal"] .modal__content--inner{width:100%;position:absolute;top:50%;right:auto;bottom:auto;left:50%;text-align:center;transform:translate(-50%, -50%)}}', '', function(opts) {

        const tag = this;
        const $el = tag.root;
        tag.opened = false;
        tag.opener;

        tag.on( 'mount', onMount );
        tag.showModal = showModal;
        tag.hideModal = hideModal;
        tag.tabTrap = tabTrap;

        function onMount() {

            let triggerArr = document.querySelectorAll( `[data-cdr-modal-open="${tag.opts.opentrigger}"]` );
            triggerArr.forEach( ( trigger ) => {
                trigger.addEventListener( 'click', ( e ) => {
                    tag.opener = e.target;
                    tag.showModal();
                }, true );
            } );

            $el.addEventListener( 'keyup', ( e ) => {
                if ( e.keyCode === 27 ) {
                    tag.hideModal( tag.opener );
                }
            } );
        }

        function showModal() {
            tag.opened = true;
            tag.update();

            let body = document.querySelector( 'body' );
            let modalBackdrop = document.createElement( 'div' );
            modalBackdrop.id = 'modalBackdrop';

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

            let dismissTriggerArr = document.querySelectorAll( `[data-cdr-modal-close="${tag.opts.dismisstrigger}"]` );
            dismissTriggerArr.forEach( ( dismissTrigger ) => {
                dismissTrigger.addEventListener( 'click', ( e ) => {
                    tag.hideModal( tag.opener );
                } );
            } );

            tag.refs.modal.addEventListener( 'keydown', function ( e ) {
                if ( e.keyCode === 9 ) {
                   document.addEventListener( 'focus', tag.tabTrap, true );
                }
            } );

            tag.refs.modal.focus();
        }

        function hideModal( focusAfter ) {

            let body = document.querySelector( 'body' );
            let modalBackdrop = document.querySelector( '#modalBackdrop' );
            tag.refs.modal.classList.remove( 'in' );
            tag.refs.modal.setAttribute('aria-hidden', 'true');
            modalBackdrop.classList.remove( 'in' );
            body.classList.remove( 'modal-open' );
            body.classList.remove( 'modal__gutter--right' );
            body.removeChild( modalBackdrop );

            document.removeEventListener( 'focus', tag.tabTrap, true );

            tag.opened = false;
            tag.update();

            focusAfter.focus();
        }

        function tabTrap(evt) {
            if ( !tag.refs.modal.contains( evt.target ) ) {
                evt.stopPropagation();
                tag.refs.modal.focus();
            }
        }

});



riot.tag2('cdr-modal-button', '<button if="{opts.cedarbutton == 1 || opts.cedarbutton == null}" type="button" class="btn btn-primary" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 2}" type="button" class="btn btn-contrast btn-primary" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 3}" type="button" class="btn btn-primary btn-sm" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 4}" type="button" class="btn btn-contrast btn-primary btn-xs" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 5}" type="button" class="btn btn-default" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 6}" type="button" class="btn btn-block btn-link" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 7}" type="button" class="btn btn-fixed btn-link-body" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 8}" type="button" class="btn btn-fixed btn-link_stag" id="{opts.hashtag}">{opts.buttontext}</button>', 'cdr-modal-button .btn-link-body,[riot-tag="cdr-modal-button"] .btn-link-body,[data-is="cdr-modal-button"] .btn-link-body{font-family:inherit;font-size:inherit;font-weight:normal;color:#06c;background:transparent;text-decoration:underline;vertical-align:unset;padding:0} cdr-modal-button .btn-link-body:hover,[riot-tag="cdr-modal-button"] .btn-link-body:hover,[data-is="cdr-modal-button"] .btn-link-body:hover,cdr-modal-button .btn-link-body:focus,[riot-tag="cdr-modal-button"] .btn-link-body:focus,[data-is="cdr-modal-button"] .btn-link-body:focus,cdr-modal-button .btn-link-body:active,[riot-tag="cdr-modal-button"] .btn-link-body:active,[data-is="cdr-modal-button"] .btn-link-body:active{color:#06c;text-decoration:underline} cdr-modal-button .btn-link_stag,[riot-tag="cdr-modal-button"] .btn-link_stag,[data-is="cdr-modal-button"] .btn-link_stag{font-family:inherit;font-size:inherit;color:#06c;background:transparent;vertical-align:unset;padding:0} cdr-modal-button .btn-link_stag:hover,[riot-tag="cdr-modal-button"] .btn-link_stag:hover,[data-is="cdr-modal-button"] .btn-link_stag:hover,cdr-modal-button .btn-link_stag:focus,[riot-tag="cdr-modal-button"] .btn-link_stag:focus,[data-is="cdr-modal-button"] .btn-link_stag:focus,cdr-modal-button .btn-link_stag:active,[riot-tag="cdr-modal-button"] .btn-link_stag:active,[data-is="cdr-modal-button"] .btn-link_stag:active{color:#06c;text-decoration:underline}', '', function(opts) {
});

riot.tag2('cdr-test', '<h1>This is a Riot.js test</h1> <p> For more on Riot.js, make sure to visit <a href="http://riotjs.com/">riotjs.com</a>. </p>', '', '', function(opts) {
});
