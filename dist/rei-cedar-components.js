riot.tag2('cdr-event-date', '<section class="event"> <div class="event__date text-uppercase"> <div class="h2 event__title">{opts.item.dateDayOfWeek}</div> <div class="text-muted">{opts.item.dateMonthAndDayOfMonth}</div> </div> <div class="event__content"> <h4 class="event__title">{opts.item.title}</h4> <div class="event__location text-muted">{opts.item.location}</div> </div> </section>', 'cdr-event-date .event,[data-is="cdr-event-date"] .event{display:flex;flex-flow:row nowrap;justify-content:flex-start} cdr-event-date .event .event__date,[data-is="cdr-event-date"] .event .event__date{padding-right:1rem;white-space:nowrap} cdr-event-date .event .event__content,[data-is="cdr-event-date"] .event .event__content{border-left:1px solid #ccc;padding-left:1rem} cdr-event-date .event .event__title,[data-is="cdr-event-date"] .event .event__title{font-family:inherit} cdr-event-date .event .event__title.h2,[data-is="cdr-event-date"] .event .event__title.h2{margin-bottom:0;line-height:1} cdr-event-date .event .event__location,[data-is="cdr-event-date"] .event .event__location{line-height:1}', '', function(opts) {
});
riot.tag2('cdr-card-docs', '<article class="card vertical-push-lg"> <section class="card-block-xs-open-default card-block-top" data-theme="light-20"> <h3 class="h4 card-doc-heading">{opts.exampleTitle}</h3> </section> <section class="card-block-xs-open-default"> <yield from="example-description"></yield> </section> <section if="{opts.exampleStyle == null}" class="card-block-xs-open-default cedar-example" data-example-id="{opts.elementId}"> <yield from="example"></yield> </section> <section if="{opts.exampleStyle}" class="{opts.exampleStyle + \' cedar-example\'}" data-example-id="{opts.elementId}"> <yield from="example"></yield> </section> <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20"> <input type="checkbox" value="" id="{\'checkbox-\' + opts.elementId}" data-toggle="collapse" data-target="{\'#\' + opts.elementId}"> <label for="{\'checkbox-\' + opts.elementId}">View code</label> </div> <div class="collapse code-toggle--document" id="{opts.elementId}" data-theme="light-20"> <yield from="codeblock"></yield> </div> </article>', '', '', function(opts) {
});

riot.tag2('cdr-list-to-grid', '<section class="tile"> <div class="hidden-xs media-frame ratio-3-4 portrait center"> <img riot-src="{item.imgPath}" alt="{item.imgPathAlt}"> </div> <div class="tile-block"> <cdr-event-date item="{item}"></cdr-event-date> </div> </section>', '', '', function(opts) {
});

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

riot.tag2('cdr-test', '<h1>This is a Riot.js test</h1> <p> For more on Riot.js, make sure to visit <a href="http://riotjs.com/">riotjs.com</a>. </p>', '', '', function(opts) {
});

riot.tag2('cdr-event-aggregator', '<cdr-list-to-grid each="{item in opts.items}" class="col-sm-4 col-md-4 col-lg-3"> </cdr-list-to-grid>', '', 'class="group group-display-fixed flex-grow-none flex-start group-gutter-sm-open-10"', function(opts) {
});
