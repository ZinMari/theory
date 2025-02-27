"use strict";
function doLogThis() {
	console.log( "this is: ", this );
}

var thisArg = "Yo";
doLogThis.call( thisArg );
doLogThis.apply( thisArg );
doLogThis.bind( thisArg )();
