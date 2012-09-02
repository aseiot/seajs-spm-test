define(function(require, exports) {
    var say=function(word){
        alert(word+"__defined in b!")
    }

	exports.say=say;
})