riot.tag2('cdr-card-docs', '<article class="card vertical-push-lg"> <section class="card-block-xs-open-default card-block-top" data-theme="light-20"> <h3 class="h4 card-doc-heading">{opts.exampleTitle}</h3> </section> <section class="card-block-xs-open-default"> <yield from="example-description"></yield> </section> <section if="{opts.exampleStyle == null}" class="card-block-xs-open-default cedar-example" data-example-id="{opts.elementId}"> <yield from="example"></yield> </section> <section data-theme="{opts.exampleTheme}" if="{opts.exampleStyle}" class="{opts.exampleStyle + \' cedar-example\'}" data-example-id="{opts.elementId}"> <yield from="example"></yield> </section> <div class="code-toggle--control checkbox toggle-show-hide text-xs-right" data-theme="light-20"> <input type="checkbox" value="" id="{\'checkbox-\' + opts.elementId}" data-toggle="collapse" data-target="{\'#\' + opts.elementId}"> <label for="{\'checkbox-\' + opts.elementId}">View code</label> </div> <div class="collapse code-toggle--document" id="{opts.elementId}" data-theme="light-20"> <yield from="codeblock"></yield> </div> </article>', '', '', function(opts) {
});

riot.tag2('cdr-event-date', '<section class="event"> <div class="event__date text-uppercase"> <div class="h2 event__title">{opts.item.dateDayOfWeek}</div> <div class="text-muted">{opts.item.dateMonthAndDayOfMonth}</div> </div> <div class="event__content"> <h4 class="event__title">{opts.item.title}</h4> <p class="event__location">{opts.item.location}</p> <div if="{opts.item.spots > 0 || opts.item.spots == 0}" class="event__availability"> <div if="{opts.item.spots > 0}" class="text-muted">{opts.item.spots} spots available</div> <div class="event__waitList" if="{opts.item.spots == 0}"><span class="text-off-price">Event is full.</span> <a href="{opts.item.waitListUrl}" class="link_navigation text-nowrap">Join wait list</a></div> </div> </div> </section>', 'cdr-event-date .event,[data-is="cdr-event-date"] .event{display:flex;flex-flow:row nowrap;justify-content:flex-start} cdr-event-date .event__location:last-child,[data-is="cdr-event-date"] .event__location:last-child{margin-bottom:0} cdr-event-date .event__date,[data-is="cdr-event-date"] .event__date{padding-right:1rem;white-space:nowrap}@media screen and (max-width:768px){ cdr-event-date .event__date,[data-is="cdr-event-date"] .event__date{min-width:7.5rem}} cdr-event-date .event__content,[data-is="cdr-event-date"] .event__content{border-left:1px solid #ccc;padding-left:1rem} cdr-event-date .event__title,[data-is="cdr-event-date"] .event__title{font-family:inherit} cdr-event-date .event__title.h2,[data-is="cdr-event-date"] .event__title.h2{margin-bottom:0;line-height:1}@media screen and (min-width:1200px){ cdr-event-date .event__title.h2,[data-is="cdr-event-date"] .event__title.h2{font-size:2.843rem}} cdr-event-date .event__waitList a,[data-is="cdr-event-date"] .event__waitList a{text-decoration:underline}@media screen and (min-width:768px){ cdr-event-date .event__waitList>*,[data-is="cdr-event-date"] .event__waitList>*{display:block}}', '', function(opts) {
});

riot.tag2('cdr-list-to-grid', '<section class="tile"> <div class="hidden-xs media-frame ratio-3-4 portrait center"> <img riot-src="{item.imgPath}" alt="{item.imgPathAlt}"> </div> <div class="tile-block"> <cdr-event-date item="{item}"></cdr-event-date> </div> </section>', '', '', function(opts) {
});

riot.tag2('cdr-event-aggregator', '<cdr-list-to-grid each="{item in opts.items}" class="col-sm-4 col-md-4 col-lg-3"> </cdr-list-to-grid>', '', 'class="group group-display-fixed flex-grow-none flex-start group-gutter-sm-open-10"', function(opts) {
});

riot.tag2('cdr-modal-video', '<div> <button type="button" class="btn btn-play" onclick="{showModal}"> <span class="icon icon-rei-play-small" aria-hidden="true"></span>{opts.buttonText}</button> <aside if="{opened}" class="cdr-modal" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="dialog1Title"> <span id="dialog1Title" class="sr-only">{\'Begin dialog for\' + opts.videoTitle}</span> <div class="cdr-modal__content"> <div class="text-right"> <button onclick="{hideModal}" class="close icon icon-rei-close img-circle" aria-label="Close"></button> </div> <section class="cdr-modal__content--inner"> <div class="embed-responsive embed-responsive-16by9"> <iframe title="{opts.videoTitle}" width="900" height="506" riot-src="https://www.youtube.com/embed/{opts.videoId}" frameborder="0" allowfullscreen></iframe> </div> </section> </div> <span class="sr-only">End dialog</span> </aside> </div>', 'cdr-modal-video .cdr-modal__content .icon.icon-rei-close.img-circle,[data-is="cdr-modal-video"] .cdr-modal__content .icon.icon-rei-close.img-circle{background:rgba(0,0,0,0.5);color:#fff;padding:2rem;margin:1.6rem;float:none}@media screen and (max-width:768px){ cdr-modal-video .cdr-modal__content .icon.icon-rei-close.img-circle,[data-is="cdr-modal-video"] .cdr-modal__content .icon.icon-rei-close.img-circle{position:absolute;top:0;right:0;bottom:auto;left:auto;z-index:1}}', '', function(opts) {

        var tag = this;
        var $el = tag.root;
        tag.opened = false;
        tag.opener;

        tag.on( 'mount', onMount );
        tag.showModal = showModal;
        tag.hideModal = hideModal;
        tag.tabTrap = tabTrap;

        var cdrModal;

        function onMount() {

            var modalLaunchBtn = $el.querySelector('.btn-play');
            if ( opts.cedarButton == "text" ) {
                modalLaunchBtn.className = 'btn btn__link-inline-play';
            }
        }

        function showModal( e ) {
            tag.opener = e.target;
            tag.opened = true;
            tag.update();

            var body = document.querySelector( 'body' );
            var modalBackdrop = document.createElement( 'div' );
            modalBackdrop.id = 'modalBackdrop';

            modalBackdrop.classList.add( 'cdr-modal__backdrop' );
            modalBackdrop.classList.add( 'opaque' );
            modalBackdrop.classList.add( 'fade' );
            modalBackdrop.tabindex = -1;
            body.appendChild( modalBackdrop );
            body.classList.add( 'cdr-modal--open' );

            cdrModal = body.querySelector( '.cdr-modal' );
            body.appendChild( cdrModal );
            cdrModal.setAttribute( 'aria-hidden', 'false' );
            cdrModal.classList.add( 'in' );
            modalBackdrop.classList.add( 'in' );

            cdrModal.addEventListener( 'keydown', function ( e ) {
                if ( e.keyCode === 9 ) {
                    document.addEventListener( 'focus', tag.tabTrap, true );
                }
            } );

            cdrModal.addEventListener( 'keyup', function ( e ) {
                if ( e.keyCode === 27 ) {
                    tag.hideModal( tag.opener );
                }
            } );

            cdrModal.focus();
        }

        function hideModal( ) {

            if (tag.opened) {

                var body = document.querySelector( 'body' );
                var modalBackdrop = document.querySelector( '#modalBackdrop' );
                cdrModal.classList.remove( 'in' );
                cdrModal.setAttribute( 'aria-hidden', 'true' );
                modalBackdrop.classList.remove( 'in' );
                body.classList.remove( 'cdr-modal--open' );
                body.removeChild( modalBackdrop );

                document.removeEventListener( 'focus', tag.tabTrap, true );

                tag.opened = false;
                tag.update();

                tag.opener.focus();
            }
        }

        function tabTrap( evt ) {
            if ( !cdrModal.contains( evt.target ) ) {
                evt.stopPropagation();
                cdrModal.focus();
            }
        }
});

riot.tag2('cdr-test', '<h1>This is a Riot.js test</h1> <p> For more on Riot.js, make sure to visit <a href="http://riotjs.com/">riotjs.com</a>. </p>', '', '', function(opts) {
});

riot.tag2('cdr-tab-docs', '<div class="well well-tabs" role="tabpanel" data-example-id="togglable-tabs"> <ul id="{opts.elementId}" class="nav-tabs" role="tablist"> <li role="presentation" class="active"><a href="#usage" id="usage-tab" role="tab" data-toggle="tab" aria-controls="usage" aria-expanded="true">Usage</a></li> <li role="presentation"><a href="#implementation" role="tab" id="implementation-tab" data-toggle="tab" aria-controls="implementation">implementation</a></li> </ul> <div id="usageContent" class="tab-content"> <div role="tabpanel" class="tab-pane fade in active" id="usage" aria-labelledby="usage-tab"> <yield from="usageContent"></yield> </div> <div role="tabpanel" class="tab-pane fade" id="implementation" aria-labelledby="implementation-tab"> <yield from="implementationContent"></yield> </div> </div> </div>', '', '', function(opts) {
});

riot.tag2('cdr-well-docs', '<div class="well vertical-push-lg"> <div class="group group-display-fixed"> <div class="col-xs-12 col-sm-8"> <h2 class="h3" id="{\'nav-\' + opts.elementId}">{opts.exampleTitle}</h2> </div> <div class="col-xs-12 col-sm-4"> <div class="code-toggle--control checkbox toggle-show-hide text-sm-right"> <input type="checkbox" value="" id="{\'checkbox-\' + opts.elementId}" data-toggle="collapse" data-target="{\'#\' + opts.elementId}"> <label for="{\'checkbox-\' + opts.elementId}">View code</label> </div> </div> </div> <div class="collapse code-toggle--document" id="{opts.elementId}"> <yield from="codeblock"></yield> </div> <section> <yield from="example-description"></yield> </section> <section if="{opts.exampleStyle == null}" class="cedar-example" data-example-id="{opts.elementId}"> <yield from="example"></yield> </section> <section data-theme="{opts.exampleTheme}" if="{opts.exampleStyle}" class="{opts.exampleStyle + \' cedar-example\'}" data-example-id="{opts.elementId}"> <yield from="example"></yield> </section> </div>', '', '', function(opts) {
});
