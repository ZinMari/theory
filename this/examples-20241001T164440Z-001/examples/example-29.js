String.prototype.doThingStrict = function () {
	"use strict";
	console.log( "this is:", this instanceof Object, this )
};


String.prototype.doThing = function () {
	console.log( "this is:", this instanceof Object, this )
};

Number.prototype.doThing = function () {
	"use strict";
	console.log( "this is:", this )
};


// "Yo".doThingStrict(); 	// this будет связан со значением "Yo"
// "Yo".doThing(); 		// this будет связан со значением new String("Yo")
12..doThing();
// doThing(); 
