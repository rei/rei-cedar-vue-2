<cdr-video-modal>
    <div class="modal" tabindex="-1" keyup="{}" role="dialog" aria-labelledby="videoModal" aria-hidden="true">
        <span class="sr-only">Begin dialog</span>
        <div class="modal__content">
            <div class="text-right">
                <button id="{opts.dismisstrigger}" class="close icon icon-rei-close img-circle" aria-label="Close"><span class="sr-only sr-only-focusable">Close</span></button>
            </div>
            <div class="modal__content--inner">
                <div class="embed-responsive embed-responsive-16by9">
                    <yield />
                </div>
            </div>
        </div>
        <button class="modal__video--end--dialog sr-only sr-only-focusable">End dialog</button>
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
            
            &.show {
                &.in {
                    opacity: 1;
                
                    .modal__content {
                        transform: translate(0,0);
                    }
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

        .modal__video--end--dialog {
            background-color: transparent;
            color: #fff;
        }
    </style>

    <script>
        /*
        * Keeps focus inside a jQ element. On tab keypress it will move
        * focus form the last elem to the first. On shift-tab keypress it
        * will move focus from first elem to last.
        *
        * @param  {Object} elem element to keep focus in
        * @param  {Object} evt  event object
        */
        var focusableElements = [
            'a',
            'area[href]',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            'button:not([disabled])',
            'iframe',
            'object',
            'embed',
            '*[tabindex]',
            '*[contenteditable]'
        ].join(',');

        var tabTrap = function (elem, evt) {
            var $elem = $(elem);

            // get visible elements
            var focusableItems = $(focusableElements, modal).filter(':visible');

            // get currently focused item
            var focusedItem = $(':focus');

            // get the number of focusable items
            var numberOfFocusableItems = focusableItems.length;

            // get last focusable item
            var lastFocusableItem = numberOfFocusableItems - 1;

            // get the index of the currently focused item
            var focusedItemIndex = focusableItems.index(focusedItem);

            if (evt.shiftKey) {
                // back tab
                // if focused on first item and user preses back-tab, go to the last focusable item
                if (focusedItemIndex <= 0) {
                    focusableItems.get(lastFocusableItem).focus();
                    evt.preventDefault();
                }
            } else {
                // forward tab
                // if focused on the last item and user preses tab, go to the first focusable item
                if (focusedItemIndex >= lastFocusableItem) {
                    focusableItems.get(0).focus();
                    evt.preventDefault();
                }
            }
        };

        var modal;

        this.on('mount', function () {
            modal = this.root.querySelector('.modal');

            // Function to show modal
            function showModal() {
                var body = document.querySelector('body');
                var modalBackdrop = document.createElement('div');
                modalBackdrop.id = 'modalBackdrop';
                // IE workaround, list out each classList item
                modalBackdrop.classList.add('modal-backdrop');
                modalBackdrop.classList.add('opaque');
                modalBackdrop.classList.add('fade');
                modalBackdrop.tabindex = -1;
                body.appendChild(modalBackdrop);
                body.classList.add('modal-open');
                body.classList.add('modal__gutter--right');
                modal.classList.add('show');
                setTimeout(function () {
                    modal.classList.add('in');
                    modalBackdrop.classList.add('in');
                }, 100);
                modal.focus();
            }

            // Function to hide modal
            function hideModal() {
                var body = document.querySelector('body');
                var modalBackdrop = document.querySelector('#modalBackdrop');
                var modalLaunchId = document.getElementById(opts.opentrigger);
                var videoSrc = $('iframe').attr('src');
                $('iframe').attr('src', videoSrc);
                modal.classList.remove('in');
                modalBackdrop.classList.remove('in');
                setTimeout(function () {
                    modal.classList.remove('show');
                    body.classList.remove('modal-open');
                    body.classList.remove('modal__gutter--right');
                    body.removeChild(modalBackdrop);
                }, 200);
                modalLaunchId.focus();
            }

            // Adding trigger for opening modal
            var trigger = document.getElementById(opts.opentrigger);
            trigger.addEventListener('click', function (e) {
                showModal();
            });

            // Close modal on click
            var dismissTrigger = document.getElementById(opts.dismisstrigger);
            dismissTrigger.addEventListener('click', function (e) {
                hideModal();
            });

            // Close modal on esc key
            this.root.addEventListener('keyup', function (e) {
                if (e.keyCode === 27) {
                    hideModal();
                }
            });

            // Call tab trap
            modal.addEventListener('keydown', function (e) {
                if (e.keyCode === 9) {
                    tabTrap(modal, e);
                }
            });
        });
  </script>
</cdr-video-modal>