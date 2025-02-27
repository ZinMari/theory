"use strict";

const theObj = {
	name: "Murych",
	doLogThis: function () {
		console.log( "this is: ", this );
	}
};
theObj.doLogThis();
var doLogThisGlobal = theObj.doLogThis;
doLogThisGlobal();


