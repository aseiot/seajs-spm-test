define(function(require, exports) {
    var say = function(){
	    require('./b').say("from c")
    }
	exports.say=say;
})