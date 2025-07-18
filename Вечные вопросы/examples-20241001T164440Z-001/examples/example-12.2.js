"use strict";

const theObj = {
	name: "theObj murych",
	returnFunction: function () {
		var doArrowThing = (
			() => (
				console.log( "this is: ", this )
			)
		);
		return doArrowThing;
	}
}

const theSuperObj = {
	name: "murych",
	doSayYourName: function ( doThing ) {
		doThing();
	}
}


theSuperObj.doSayYourName(theObj.returnFunction());

// console.log( theObj.returnFunction() );
