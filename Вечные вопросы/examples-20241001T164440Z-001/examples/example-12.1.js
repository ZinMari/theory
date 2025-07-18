"use strict";

var doArrowThing = (
    () => console.log( "this is: ", this )
);


const theObj = {
    name: 'name',
    doSayYourName: function(){
        doArrowThing()
    }
}

theObj.doSayYourName()
