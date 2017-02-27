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
