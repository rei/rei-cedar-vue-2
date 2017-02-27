

riot.tag2('cdr-modal-button', '<button if="{opts.cedarbutton == 1 || opts.cedarbutton == null}" type="button" class="btn btn-primary" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 2}" type="button" class="btn btn-contrast btn-primary" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 3}" type="button" class="btn btn-primary btn-sm" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 4}" type="button" class="btn btn-contrast btn-primary btn-xs" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 5}" type="button" class="btn btn-default" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 6}" type="button" class="btn btn-block btn-link" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 7}" type="button" class="btn btn-fixed btn-link-body" id="{opts.hashtag}">{opts.buttontext}</button> <button if="{opts.cedarbutton == 8}" type="button" class="btn btn-fixed btn-link_stag" id="{opts.hashtag}">{opts.buttontext}</button>', 'cdr-modal-button .btn-link-body,[data-is="cdr-modal-button"] .btn-link-body{font-family:inherit;font-size:inherit;font-weight:normal;color:#06c;background:transparent;text-decoration:underline;vertical-align:unset;padding:0} cdr-modal-button .btn-link-body:hover,[data-is="cdr-modal-button"] .btn-link-body:hover,cdr-modal-button .btn-link-body:focus,[data-is="cdr-modal-button"] .btn-link-body:focus,cdr-modal-button .btn-link-body:active,[data-is="cdr-modal-button"] .btn-link-body:active{color:#06c;text-decoration:underline} cdr-modal-button .btn-link_stag,[data-is="cdr-modal-button"] .btn-link_stag{font-family:inherit;font-size:inherit;color:#06c;background:transparent;vertical-align:unset;padding:0} cdr-modal-button .btn-link_stag:hover,[data-is="cdr-modal-button"] .btn-link_stag:hover,cdr-modal-button .btn-link_stag:focus,[data-is="cdr-modal-button"] .btn-link_stag:focus,cdr-modal-button .btn-link_stag:active,[data-is="cdr-modal-button"] .btn-link_stag:active{color:#06c;text-decoration:underline}', '', function(opts) {
});
riot.tag2('cdr-textinput', '<label for="{opts.el_id}" class="{\'sr-only\': !opts.label || opts.nolabel}">{opts.label} <span if="{opts.required}">&nbsp;*</span> </label> <div class="input-wrap"> <input id="{opts.el_id}" aria-label="{opts.label}" type="{opts.type || \'text\'}" name="{opts.name}" maxlength="{opts.maxlength}" placeholder="{opts.placeholder}" required="{opts.required}" disabled="{opts.disabled}" onkeypress="{delayedValidate}" onchange="{setDirty}" onpaste="{immediateValidate}" onkeydown="{checkDelete}" onblur="{setBlurred}" onfocus="{setFocused}" riot-value="{opts.riotValue}"> <div class="validation-icon"> <i class="icon"></i> </div> <div class="validation-block"> <div class="validation-block-inner"> <span>{validationMsg}</span> </div> </div> </div>', '', 'class="{\'has-error\': hasError(), \'has-warning\': hasWarning()}"', function(opts) {
		var _this = this;

		this.mixin( 'validationAnimations' );

		this.validationMsg = opts.pattern_error_msg;
		this.validationBlockOn = !!opts.external_error || false;
		this.shouldShowExternalError = !!opts.external_error;
		this.isDirty = true;
		this.errorBlockAnimating = false;

		this.hasError = () => this.validationBlockOn
		this.hasWarning = () => false

		this.on( 'mount', () => {
			if ( opts.external_error ) {
				_this.validate()
					.then( () => {
						_this.shouldShowExternalError = false;
					} );
			}

			if ( opts.pattern ) {
				this.root.querySelector( 'input' ).pattern = opts.pattern.toString().replace(/^\/|\/$/g, '');
			}
		} );

		this.on( 'update', () => {

		} );

		this.on( 'reset-validation', () => {
			this.update( { validationType: null, validationBlockOn: false } );
			_this.validationBlock.hide();
		} );

		this.setBlurred = ( e ) => {
			e.preventUpdate = true;
			this.isFocused = false;

			if ( this.validationBlockOn || !this.isDirty ) return;
			this.immediateValidate( e );
		}

		this.setFocused = ( e ) => {
			this.isFocused = true;
			this.isDirty = true;
		}

		this.setDirty = ( e ) => {
			e.preventUpdate = true;
			this.isDirty = true;

			this.execProperValidation( e );
		};

		this.execProperValidation = ( e ) => {

			if ( !_this.validationBlockOn ) {
				debounced.cancel();
				debounced( e );
			} else {
				timerId = _.defer( ( e ) => {
					_this.validate( e )
						.catch( _this.handleErr );
				} );
			}
		}

		this.validate = ( e ) => {
			debounced.cancel();
			clearTimeout(timerId);
			return new Promise( ( resolve, reject ) => {
				let _target = _.get( e, 'target' ) || _this.root.querySelector( 'input' );
				let isValid = _target.checkValidity();
				let currentValidityState = _target.validity;

				if ( _this.shouldShowExternalError ) {
					_this.update( { validationBlockOn: true, validationType: 'error', validationMsg: opts.external_error.errorText, isDirty: false } );
					_this.validationBlock.show();

					resolve( 'invalid' );
				}

				else {

					if ( isValid ) {
						_this.update( { validationType: null, validationBlockOn: false, isDirty: false } );
						_this.validationBlock.hide();
						resolve( 'valid' );
					}

					else {

						if( currentValidityState.typeMismatch ){

							if( _target.type === "email" ){
								_this.update( { validationBlockOn: true, validationType: 'error', validationMsg: 'Please enter a valid email.' } );
								_this.validationBlock.show();
							}
							if( _target.type === "tel" ){
								_this.update( { validationBlockOn: true, validationType: 'error', validationMsg: 'Please enter a valid phone number.' } );
								_this.validationBlock.show();
							}
						} else {

							if( currentValidityState.patternMismatch ){
								if( _target.type === "email" ){

									_this.update( { validationBlockOn: true, validationType: 'error', validationMsg: 'Please enter a valid email.' } );
									_this.validationBlock.show();
								} else {
									_this.update( { validationBlockOn: true, validationType: 'error', validationMsg: opts.pattern_error_msg } );
									_this.validationBlock.show();
								}
							}

							else if( opts.required && currentValidityState.valueMissing && !this.isFocused ){
								_this.update( { validationBlockOn: true, validationType: 'error', validationMsg: 'This field is required' });
								_this.validationBlock.show();
							}

							else {
								_this.update( { validationType: null, validationBlockOn: false, hasValidationError: true } );
								_this.validationBlock.hide();
							}
						}

						reject( 'invalid' );
					}
				}

				return;
			} );
		}

		let debounced = _.debounce( () => { this.validate().catch( _this.handleErr ); }, 750, { 'leading': false } );

		let timerId;

		this.delayedValidate = ( e ) => {
			e.preventUpdate = true;

			if ( _this.validationBlockOn ) {

				timerId = _.defer( ( e ) => {
					_this.validate( e )
						.catch( _this.handleErr );
				} );
			} else {
				debounced.cancel();
				debounced( e );
			}
		};

		this.immediateValidate = ( e ) => {
			e.preventUpdate = true;
			debounced.cancel();
			timerId = _.defer( ( e ) => {
				_this.validate( e )
					.catch( _this.handleErr );
			} );
		};

		this.checkDelete = ( e ) => {
			e.preventUpdate = true;
			if ( e.which == 8 || e.which == 46 ) {

				this.isDirty = true;

				this.execProperValidation( e );
			}
			return true;
		}

		this.handleErr = ( e ) => {
			console.log( e, 'debug' );
		}

		this.validationBlock = {
			isHidden: true,
			isShown: false,
			isAnimatingIn: false,
			isAnimatingOut: false,
			currentMsg: null,
			validationType: null,
			errorAnimationClass: 'has-error-animating',
			warningAnimationClass: 'has-warning-animating',
		};

		Object.defineProperty(this.validationBlock, 'show', {
			value: function() {
				if( this.isAnimatingIn || this.isShown && this.currentMsg === _this.validationMsg ) return

				this.isShown = false;
				this.isHidden = false;
				this.isAnimatingIn = true;
				this.isAnimatingOut = false;
				this.validationType = _this.validationType;
				this.currentMsg = _this.validationMsg;

				let animationClass;
				if( this.validationType === 'error' ) animationClass = this.errorAnimationClass;
				if( this.validationType === 'warning' ) animationClass = this.warningAnimationClass;

				_this.root.classList.add( animationClass );
				_this.root.classList.add( 'animating-in' );

				_this.showValidationBlock( _this.root.querySelector( '.validation-block' ), {}, () => {
					this.isAnimatingIn = false;
					this.isShown = true;
					_this.root.classList.remove( animationClass );
					_this.root.classList.remove( 'animating-in' );
					_this.hasValidationError = false;
				} );
			},
		} );

		Object.defineProperty(this.validationBlock, 'hide', {
			value: function() {
				if( this.isAnimatingOut || this.isHidden ) return

				this.isShown = false;
				this.isHidden = false;
				this.isAnimatingIn = false;
				this.isAnimatingOut = true;

				let animationClass;
				if( this.validationType === 'error' ) animationClass = this.errorAnimationClass;
				if( this.validationType === 'warning' ) animationClass = this.warningAnimationClass;

				_this.root.classList.add( animationClass );
				_this.root.classList.add( 'animating-out' );

				_this.hideValidationBlock( _this.root.querySelector( '.validation-block' ), {}, () => {
					this.isAnimatingOut = false;
					this.isHidden = true;
					this.validationType = null;
					_this.root.classList.remove( animationClass );
					_this.root.classList.remove( 'animating-out' );
					_this.hasValidationError = false;
				} );
			}
		} );

});
riot.tag2('cdr-video-modal', '<div class="modal" tabindex="-1" keyup="{}" role="dialog" aria-labelledby="videoModal" aria-hidden="true"> <span class="sr-only">Begin dialog</span> <div class="modal__content"> <div class="text-right"> <button id="{opts.dismisstrigger}" class="close icon icon-rei-close img-circle" aria-label="Close"><span class="sr-only sr-only-focusable">Close</span></button> </div> <div class="modal__content--inner"> <div class="embed-responsive embed-responsive-16by9"> <yield></yield> </div> </div> </div> <button class="modal__video--end--dialog sr-only sr-only-focusable">End dialog</button> </div>', 'cdr-video-modal .icon.icon-rei-close.img-circle,[data-is="cdr-video-modal"] .icon.icon-rei-close.img-circle{background:rgba(0,0,0,0.5);color:#fff;padding:2rem;margin:1.6rem;float:none}@media screen and (max-width:768px){ cdr-video-modal .icon.icon-rei-close.img-circle,[data-is="cdr-video-modal"] .icon.icon-rei-close.img-circle{position:absolute;top:0;right:0;bottom:auto;left:auto;z-index:1}} cdr-video-modal .modal,[data-is="cdr-video-modal"] .modal{opacity:0;transition:opacity .15s linear} cdr-video-modal .modal .modal__content,[data-is="cdr-video-modal"] .modal .modal__content{transition:transform .3s ease-out;transform:translate(0, -25%)}@media screen and (max-width:768px){ cdr-video-modal .modal .modal__content,[data-is="cdr-video-modal"] .modal .modal__content{position:absolute;top:0;bottom:0;left:0;right:0}} cdr-video-modal .modal.show.in,[data-is="cdr-video-modal"] .modal.show.in{opacity:1} cdr-video-modal .modal.show.in .modal__content,[data-is="cdr-video-modal"] .modal.show.in .modal__content{transform:translate(0, 0)} cdr-video-modal .modal__content--inner,[data-is="cdr-video-modal"] .modal__content--inner{max-width:90rem;margin:0 auto}@media screen and (max-width:768px){ cdr-video-modal .modal__content--inner,[data-is="cdr-video-modal"] .modal__content--inner{width:100%;position:absolute;top:50%;right:auto;bottom:auto;left:50%;text-align:center;transform:translate(-50%, -50%)}} cdr-video-modal .modal__video--end--dialog,[data-is="cdr-video-modal"] .modal__video--end--dialog{background-color:transparent;color:#fff}', '', function(opts) {

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

            var focusableItems = $(focusableElements, modal).filter(':visible');

            var focusedItem = $(':focus');

            var numberOfFocusableItems = focusableItems.length;

            var lastFocusableItem = numberOfFocusableItems - 1;

            var focusedItemIndex = focusableItems.index(focusedItem);

            if (evt.shiftKey) {

                if (focusedItemIndex <= 0) {
                    focusableItems.get(lastFocusableItem).focus();
                    evt.preventDefault();
                }
            } else {

                if (focusedItemIndex >= lastFocusableItem) {
                    focusableItems.get(0).focus();
                    evt.preventDefault();
                }
            }
        };

        var modal;

        this.on('mount', function () {
            modal = this.root.querySelector('.modal');

            function showModal() {
                var body = document.querySelector('body');
                var modalBackdrop = document.createElement('div');
                modalBackdrop.id = 'modalBackdrop';

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

            var trigger = document.getElementById(opts.opentrigger);
            trigger.addEventListener('click', function (e) {
                showModal();
            });

            var dismissTrigger = document.getElementById(opts.dismisstrigger);
            dismissTrigger.addEventListener('click', function (e) {
                hideModal();
            });

            this.root.addEventListener('keyup', function (e) {
                if (e.keyCode === 27) {
                    hideModal();
                }
            });

            modal.addEventListener('keydown', function (e) {
                if (e.keyCode === 9) {
                    tabTrap(modal, e);
                }
            });
        });
});
/////////////////////////////////
// Validation Animations Mixin //
/////////////////////////////////



	var validationAnimations = {
		/**
		 * event handler that opens the drawer below an 
		 * input field to display a validation error.
		 * 
		 * @return {null} no return
		 */
		showValidationBlock: ( element, opts, cb ) => {
			let $el = $( element );
			let _opts = _.extend( opts, {} );
			let prevHeight = $el[ 0 ].offsetHeight || 0;
			let padding = _.get( _opts, 'padding' ) ? _.get( _opts, 'padding' ) : 0;
			let fullHeight = $el.css( { 'display': 'block', 'height': 'auto' } ).height() + padding;
			$el.css( { 'display': ' block', 'height': prevHeight } );
			$el
				.velocity( "stop" )
				.velocity( { height: fullHeight }, { 
					duration: 350, 
					easing: 'easeOutQuint',
					complete: () => {
						if( _.isFunction( cb ) ) cb.call();
					} } );
		},

		/**
		 * Event handler to hide the validation block whenever
		 * the validation state is valid or has been cleared for 
		 * other circumstances.
		 * 
		 * @return {null} no return
		 */
		hideValidationBlock: ( element, opts, cb ) => {
			let $el = $( element );
			$el
				.velocity( "stop" )
				.velocity( { height: 0 }, {
					duration: 350,
					easing: 'easeOutQuint',
					complete: () => {
						$el.css( { 'display': 'none' } );
						if( _.isFunction( cb ) ) cb.call();
					}
				} );
		}
	};

	riot.mixin( 'validationAnimations', validationAnimations );
