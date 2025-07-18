"use strict";

function doLogThis() {
	console.log( "this is: ", this );
}

const theObj = {
	name: "Murych"
};
theObj.doLogThis = doLogThis;

theObj.doLogThis();
