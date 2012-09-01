define("test/1.0.0/b-debug", [], function(require, exports) {
    var say=function(word){
        alert(word+"__defined in b!")
    }

	exports.say=say;
})

define("test/1.0.0/c-debug", ["./b-debug"], function(require, exports) {
    var say = function(){
	    require('./b-debug').say("from c")
    }
	exports.say=say;
})

define("test/1.0.0/a-debug", ["./b-debug", "./c-debug"], function(require, exports, module){
	var init=function(){
	 require('./b-debug').say("from a");
	 require('./c-debug').say();
	}
	exports.init=init;
})