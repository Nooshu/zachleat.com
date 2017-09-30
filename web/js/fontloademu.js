(function() {
	// Font Loading Emulator (in the footer)
	// Cut the mustard: CSS Font Loading API
	if( !( 'fonts' in document ) ) {
		return;
	}

	function enableEmulator() {
		// JS form, enabled with JS.
		fontloademu.style.display = "block";

		var radios = fontloademu.querySelectorAll( '[name="fontloademu"]' );
		var classes = [];

		for( var j = 0, k = radios.length; j < k; j++ ) {
			classes.push( radios[ j ].value );

			radios[ j ].addEventListener( 'change', function() {
				var docEl = document.documentElement;
				classes.forEach(function( cls ) {
					if( cls ) {
						docEl.classList.remove( cls );
					}
				});

				if( this.value && this.checked ) {
					docEl.classList.add( this.value );
				}
			}, false);
		}
	}

	var fontloademu = document.getElementById( 'fontloademu' );
	if( fontloademu ) {
		enableEmulator();
	} else {
		window.addEventListener( "load", function() {
			enableEmulator();
		}, false );
	}

})();