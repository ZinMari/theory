"use strict";

function doHandleClick() {
	console.log( "this is:", this )
}

document
	.body
	.addEventListener( "click", doHandleClick );
