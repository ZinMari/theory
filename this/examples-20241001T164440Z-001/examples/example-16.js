"use strict";
function doLogThis() {
	console.log( "this is: ", this );
}

new doLogThis();
new doLogThis;
