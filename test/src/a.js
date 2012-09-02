define(function(require, exports, module){
	var init=function(){
//		require('./b').say("from a");
		require('./c.js').say();
	}
	exports.init=init;
})
