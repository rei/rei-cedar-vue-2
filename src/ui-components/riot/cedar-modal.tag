<cedar-modal>
	<div id="cedarModal">
        <div id="modal" class="modal" tabindex="-1" role="dialog" keyup={} >
            <div class="modal-dialog" role="document">
                <div class="card-block modal-content">
                    <yield/>
                    <button class="btn btn-primary" id="modalCloseBtn" onclick={ this.hideModal }>Close</button>
                </div>
            </div>
        </div>
        <button class="btn btn-primary" onclick={ this.showModal } id="modalOpen">Show Modal</button>
    </div>
    <script>
        this.on( 'mount', function() {
            setupModal();
        } );
        
        function setupModal() {
            // TODO can i give the modal focus on showing then bind the keyup event to the modal instead of the document
            // easier removal of the event listener then...
            document.addEventListener('keyup', function (e) {
                if (e.keyCode === 27) { // close with esc
                    keyHideModal();
                }
            });
            var modal = document.getElementById('modal');
            modal.addEventListener('keydown', function(e) {
                if (e.keyCode === 9) {
                    console.log('Key 9');
                    //- var children = $($el).find('*');
                    //- var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
                    //- var focusableItems = children.filter(focusableElementsString).filter(':visible');
                    //- var focusedItem = $(document.activeElement);
                    //- var numberOfFocusableItems = focusableItems.length;
                    //- var focusedItemIndex = focusableItems.index(focusedItem);
                    
                    //- if ( !e.shiftKey && (focusedItemIndex == numberOfFocusableItems - 1) ){
                    //-     focusableItems.get(0).focus();
                    //-     event.preventDefault();
                    //- }
                    //- else if ( e.shiftKey && focusedItemIndex === 0 || e.shiftKey && focusedItemIndex == -1 ){
                    //-     focusableItems.get(numberOfFocusableItems - 1).focus();
                    //-     event.preventDefault();
                    //- }
                }
            } );
        }

        showModal() {
            var body = document.querySelector('body');
            var modal = document.getElementById('modal');
            var modalBackdrop = document.createElement('div');
            modalBackdrop.id = 'modalBackdrop';
            modalBackdrop.classList.add('modal-backdrop', 'fade', 'in');
            modalBackdrop.tabindex = -1;            
            body.appendChild(modalBackdrop);
            body.classList.add('modal-open');  // prevent body scrolling
            modal.classList.add('show');
            modal.focus();
        }

        hideModal() {
            jsFriendlyHideModal();
        }
        function keyHideModal() {
            jsFriendlyHideModal();
        }
        function jsFriendlyHideModal () {
            var body = document.querySelector('body');
            body.classList.remove('modal-open');
            var modalBackdrop = document.getElementById('modalBackdrop');
            body.removeChild(modalBackdrop);
            var modal = document.getElementById('modal');
            modal.classList.remove('show');
            var modalLaunchId = document.getElementById('modalOpen');
            modalLaunchId.focus();
        }
        
        
    </script>
</cedar-modal>
