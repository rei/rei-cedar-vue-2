// vim: syntax=JSX
riot.tag2('cdr-modal-video', '<div> <button ref="button" type="button" class="btn btn-play" onclick="{showModal}"> <span class="icon icon-rei-play-small" aria-hidden="true"></span><span>{opts.buttonText}</span> </button> <aside if="{opened}" ref="modal" class="cdr-modal" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="dialog1Title"> <span id="dialog1Title" class="sr-only">{\'Begin dialog for\' + opts.videoTitle}</span> <div class="cdr-modal__content"> <div class="text-right"> <button onclick="{hideModal}" class="close icon icon-rei-close img-circle" aria-label="Close"></button> </div> <section class="cdr-modal__content--inner"> <div class="embed-responsive embed-responsive-16by9"> <iframe title="{opts.videoTitle}" width="900" height="506" riot-src="https://www.youtube.com/embed/{opts.videoId}" frameborder="0" allowfullscreen></iframe> </div> </section> </div> <span class="sr-only">End dialog</span> </aside> </div>', 'cdr-modal-video .icon.icon-rei-close.img-circle,[data-is="cdr-modal-video"] .icon.icon-rei-close.img-circle{background:rgba(0,0,0,0.5);color:#fff;padding:2rem;margin:1.6rem;float:none}@media screen and (max-width:768px){ cdr-modal-video .icon.icon-rei-close.img-circle,[data-is="cdr-modal-video"] .icon.icon-rei-close.img-circle{position:absolute;top:0;right:0;bottom:auto;left:auto;z-index:1}}', '', function(opts) {

        const tag = this;
        const $el = tag.root;
        tag.opened = false;
        tag.opener;

        tag.on( 'mount', onMount );
        tag.showModal = showModal;
        tag.hideModal = hideModal;
        tag.tabTrap = tabTrap;

        function onMount() {

            $el.addEventListener( 'keyup', ( e ) => {
                if ( e.keyCode === 27 ) {
                    tag.hideModal( tag.opener );
                }
            } );

            if ( opts.cedarButton == "text" ) {
                tag.refs.button.className = 'btn btn__link-inline-play';
            }
        }

        function showModal(e) {
            tag.opener = e.target;
            tag.opened = true;
            tag.update();

            let body = document.querySelector( 'body' );
            let modalBackdrop = document.createElement( 'div' );
            modalBackdrop.id = 'modalBackdrop';

            modalBackdrop.classList.add( 'cdr-modal__backdrop' );
            modalBackdrop.classList.add( 'opaque' );
            modalBackdrop.classList.add( 'fade' );
            modalBackdrop.tabindex = -1;
            body.appendChild( modalBackdrop );
            body.classList.add( 'cdr-modal--open' );
            tag.refs.modal.setAttribute('aria-hidden', 'false');
            tag.refs.modal.classList.add( 'in' );
            modalBackdrop.classList.add( 'in' );

            tag.refs.modal.addEventListener( 'keydown', function ( e ) {
                if ( e.keyCode === 9 ) {
                   document.addEventListener( 'focus', tag.tabTrap, true );
                }
            } );

            tag.refs.modal.focus();
        }

        function hideModal( ) {

            let body = document.querySelector( 'body' );
            let modalBackdrop = document.querySelector( '#modalBackdrop' );
            tag.refs.modal.classList.remove( 'in' );
            tag.refs.modal.setAttribute('aria-hidden', 'true');
            modalBackdrop.classList.remove( 'in' );
            body.classList.remove( 'cdr-modal--open' );
            body.removeChild( modalBackdrop );

            document.removeEventListener( 'focus', tag.tabTrap, true );

            tag.opened = false;
            tag.update();

            tag.opener.focus();
        }

        function tabTrap(evt) {
            if ( !tag.refs.modal.contains( evt.target ) ) {
                evt.stopPropagation();
                tag.refs.modal.focus();
            }
        }

});

riot.tag2('cdr-tile-event-aggregator', '<section class="tile"> <div class="hidden-xs hidden-sm media-frame ratio-3-4 portrait center"> <img riot-src="{opts.imgPath}" alt="{opts.imgPathAlt}"> </div> <div class="group group-display-fixed event-wrapper"> <div class="col-xs-4"> <div class="well event-date"> <span class="h2">{opts.dateDayOfWeek}</span> <span class="text-muted">{opts.dateMonthAndDayOfMonth}</span> </div> </div> <div class="col-xs-8"> <div class="well"> <h2 class="h4" class="description"> {opts.title} </h2> <span class="location text-muted">{opts.location}</span> </div> </div> </div> </section>', '', '', function(opts) {
});

riot.tag2('cdr-test', '<h1>This is a Riot.js test</h1> <p> For more on Riot.js, make sure to visit <a href="http://riotjs.com/">riotjs.com</a>. </p>', '', '', function(opts) {
});

riot.tag2('cdr-card-docs', '<article class="card vertical-push-lg"> <section class="card-block-xs-open-default card-block-top" data-theme="light-20"> <h3 class="h4 card-doc-heading">{opts.exampleTitle}</h3> </section> <section class="card-block-xs-open-default"> <yield from="example-description"></yield> </section> <section if="{opts.example == null}" class="card-block-xs-open-default cedar-example" data-example-id="{opts.elementId}"><yield from="example"></yield></section> <section if="{opts.example-style}" class="{opts.example-style} cedar-example" data-example-id="{opts.elementId}"><yield from="example"></yield></section> <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20"> <input type="checkbox" value="" id="{opts.elementId}" data-toggle="collapse" data-target="{\'#\'+opts.elementId+\'-example\'}"> <label for="{opts.elementId}">View code</label> </div> <div class="collapse code-toggle--document" id="{opts.elementId+\'-example\'}" data-theme="light-20"> <yield from="codeblock"></yield> </div> </article>', '', '', function(opts) {
});

