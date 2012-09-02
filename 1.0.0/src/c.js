define(function(require, exports) {
    var say = function(){
	    require('./b.js').say("from c")
    }
	exports.say=say;
})