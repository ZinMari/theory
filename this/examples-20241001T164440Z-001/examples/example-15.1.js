"use strict";
function doLogThis() {
	console.log( "this is: ", this );
}

var thisArg = { name: "thisArg" };
doLogThis.call( thisArg );
doLogThis.apply( thisArg );
doLogThis.bind( thisArg )();
