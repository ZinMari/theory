"use strict";

const theObj = {
	name: "Murych",
	doLogThis: function () {
		console.log( "this is: ", this );
	}
};
var doLogThis = theObj.doLogThis;
setTimeout( doLogThis, 1 );
