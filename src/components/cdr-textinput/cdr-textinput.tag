<cdr-textinput class="{ 'has-error': hasError(), 'has-warning': hasWarning() }">
	
	<!-- PRESENTATION -->
	<label for="{ opts.el_id }" class="{ 'sr-only': !opts.label || opts.nolabel }">{ opts.label }
		<span if="{ opts.required }">&nbsp;*</span>
	</label>
	<div class="input-wrap">
		<input 
			id="{ opts.el_id }"
			aria-label="{ opts.label }"
			type="{ opts.type || 'text' }"
			name="{ opts.name }"
			maxlength="{ opts.maxlength }"
			placeholder="{ opts.placeholder }"
			required="{ opts.required }" 
			disabled="{ opts.disabled }" 
			onkeypress="{ delayedValidate }"
			onchange="{ setDirty }"
			onpaste="{ immediateValidate }"
			onkeydown="{ checkDelete }"
			onblur="{ setBlurred }"
			onfocus="{ setFocused }"
			value="{ opts.riotValue }" />
		<div class="validation-icon">
			<i class="icon"></i>
		</div>
		<div class="validation-block">
			<div class="validation-block-inner">
				<span>{ validationMsg }</span>
			</div>
		</div>
	</div>

	
	<!-- LOGIC -->
	<script>
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

		/**
		 * event handler for 'blur' event
		 * @param  {Event} e event object
		 * 
		 * @return {null}   no return
		 */
		this.setBlurred = ( e ) => {
			e.preventUpdate = true;
			this.isFocused = false;

			// don't re-validate if there is already an error showing
			if ( this.validationBlockOn || !this.isDirty ) return;
			this.immediateValidate( e );
		}

		/**
		 * Event handler for 'focus' event
		 * @param  {Event} e event object
		 * 
		 * @return {null}   no return
		 */
		this.setFocused = ( e ) => {
			this.isFocused = true;
			this.isDirty = true;
		}

		/**
		 * Set the field to dirty state
		 * @param  {Event} e The triggering DOM event
		 * @return {null}   no return
		 */
		this.setDirty = ( e ) => {
			e.preventUpdate = true;
			this.isDirty = true;

			this.execProperValidation( e );			
		};


		/**
		 * Choose the correct way to run validation against the event (delayed or immediate)
		 * @param  {Event} e The triggering DOM event
		 * @return {null}   no return
		 */
		this.execProperValidation = ( e ) => {
			// if the block is not on, delay validation as normal
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

		/**
		 * Validation handler. Takes in the current value of the
		 * field and runs validation against the field and
		 * any validation requirements like pattern or required.
		 * 
		 * @param  {Event} e the event of the 'keypress'
		 * @return {Promise} returns a promise for when the validation is complete
		 */
		this.validate = ( e ) => {
			debounced.cancel();
			clearTimeout(timerId);
			return new Promise( ( resolve, reject ) => {
				let _target = _.get( e, 'target' ) || _this.root.querySelector( 'input' );
				let isValid = _target.checkValidity();
				let currentValidityState = _target.validity;

				// External Error
				if ( _this.shouldShowExternalError ) {
					_this.update( { validationBlockOn: true, validationType: 'error', validationMsg: opts.external_error.errorText, isDirty: false } );
					_this.validationBlock.show();

					resolve( 'invalid' );
				}

				// check validityState
				else {

					// valid
					if ( isValid ) {
						_this.update( { validationType: null, validationBlockOn: false, isDirty: false } );
						_this.validationBlock.hide();
						resolve( 'valid' );
					}

					// Not valid
					else {

						if( currentValidityState.typeMismatch ){
							// invalid email
							if( _target.type === "email" ){
								_this.update( { validationBlockOn: true, validationType: 'error', validationMsg: 'Please enter a valid email.' } );
								_this.validationBlock.show();
							}
							if( _target.type === "tel" ){
								_this.update( { validationBlockOn: true, validationType: 'error', validationMsg: 'Please enter a valid phone number.' } );
								_this.validationBlock.show();
							}
						} else {

							// Does not match the pattern
							if( currentValidityState.patternMismatch ){
								if( _target.type === "email" ){
									// invalid email pattern
									_this.update( { validationBlockOn: true, validationType: 'error', validationMsg: 'Please enter a valid email.' } );
									_this.validationBlock.show();
								} else {
									_this.update( { validationBlockOn: true, validationType: 'error', validationMsg: opts.pattern_error_msg } );
									_this.validationBlock.show();
								}
							}
						
							// Is not present and is required and not focused
							else if( opts.required && currentValidityState.valueMissing && !this.isFocused ){
								_this.update( { validationBlockOn: true, validationType: 'error', validationMsg: 'This field is required' });
								_this.validationBlock.show();
							} 

							// clear error (used for delete/backspace)
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

		/**
		 * A debounced version of the callback for the 'keypress'
		 * event so that we "wait" 750 ms before firing the callback
		 * and provides an easy hook to cancel the debounce if
		 * the key is pressed a second time before the callback is fired
		 * 
		 * @type {Function}
		 */
		let debounced = _.debounce( () => { this.validate().catch( _this.handleErr ); }, 750, { 'leading': false } );

		let timerId;


		/**
		 * Event handler for the 'keypress' event. This is the raw handler
		 * that determines which callback to fire (debounced or immediate)
		 * and also cancels previous calls if they exist.
		 * 
		 * @param  {Event} e event object
		 * @return {boolean}   returns true so that the event continues to propagate instead of being killed by Riot
		 */
		this.delayedValidate = ( e ) => {
			e.preventUpdate = true;
			// this.isDirty = true;

			if ( _this.validationBlockOn ) {
				// Need to defer this so that the keypress event has propagated
				// the input field with the value (so that the validate runs against the
				// actual input as opposed to empty)
				timerId = _.defer( ( e ) => {
					_this.validate( e )
						.catch( _this.handleErr );
				} );
			} else {
				debounced.cancel();
				debounced( e );
			}
		};

		/**
		 * Immediately (defers to the stack) validates the input of the field
		 * 
		 * @param  {Event} e event object
		 * @return {Boolean}   returns true so that the event continues to propagate instead of being killed by Riot
		 */
		this.immediateValidate = ( e ) => {
			e.preventUpdate = true;
			debounced.cancel();
			timerId = _.defer( ( e ) => {
				_this.validate( e )
					.catch( _this.handleErr );
			} );
		};

		/**
		 * Event handler to check to see if the delete/backspace
		 * key was pressed. When the user shows that they are 
		 * in the act of clearing an error by deleting erroneous
		 * input data we want to clear the error for them.
		 * 
		 * @param  {Event} e event object
		 * @return {Boolean}   returns true so that the event continues to propagate instead of being killed by Riot
		 */
		this.checkDelete = ( e ) => {
			e.preventUpdate = true;
			if ( e.which == 8 || e.which == 46 ) {

				this.isDirty = true;

				this.execProperValidation( e );
			}
			return true;
		}

		/**
		 * Error handler for promises.
		 * 
		 * @param  {Event} e event object
		 * @return {null}   no return
		 */
		this.handleErr = ( e ) => {
			console.log( e, 'debug' );
		}


		/**
		 * Control Object for validation states
		 * there are 4 possibles states that the validation block can be in
		 * 
		 * - validation block hidden
		 * - validation animating in
		 * - validation block shown
		 * - validation animating out
		 *
		 * This is designed to help keep everything straight and to avoid
		 * calling show or hide at unnecessary times. 
		 * 
		 * @type {Object}
		 */
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
				if( this.isAnimatingIn || this.isShown && this.currentMsg === _this.validationMsg ) return // do nothing
				
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
				if( this.isAnimatingOut || this.isHidden ) return // do nothing
				
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

	</script>

</cdr-textinput>